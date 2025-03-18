import { env } from "@/env";
import { NextResponse } from "next/server";
import { redis } from "@/utils/redis";

export const dynamic = "force-dynamic";

const clientId = env.SPOTIFY_CLIENT_ID;
const clientSecret = env.SPOTIFY_CLIENT_SECRET;
const playlistId = env.SPOTIFY_PLAYLIST_ID;

const CACHE_KEY = "spotify_playlist_tracks";
const CACHE_DURATION = 60 * 60 * 48; // 48 hours in seconds

interface SpotifyTokenResponse {
    access_token: string;
}

interface SpotifyTrack {
    name: string;
    duration_ms: number;
    artists: { name: string }[];
    album: {
        images: { url: string }[];
    };
}

interface SpotifyPlaylistResponse {
    items: { track: SpotifyTrack }[];
    next: string | null;
    error?: { message: string };
}

interface Track {
    name: string;
    length: string;
    artists: string;
    cover: string | null;
}

class SpotifyAPIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "SpotifyAPIError";
    }
}

const getToken = async (): Promise<string> => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch access token");
    }

    const data = (await response.json()) as SpotifyTokenResponse;
    return data.access_token;
};

const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const getPlaylistTracks = async (accessToken: string): Promise<Track[]> => {
    let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    let allTracks: Track[] = [];

    while (url) {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!response.ok) {
            throw new SpotifyAPIError(
                `Failed to fetch playlist tracks: ${response.statusText}`,
            );
        }

        const data = (await response.json()) as SpotifyPlaylistResponse;
        if (data.error) throw new SpotifyAPIError(data.error.message);

        const tracks = data.items.map((item) => ({
            name: item.track.name,
            length: formatDuration(item.track.duration_ms),
            artists: item.track.artists.map((artist) => artist.name).join(", "),
            cover: item.track.album.images[0]?.url || null,
        }));

        allTracks = allTracks.concat(tracks);
        url = data.next || "";
    }

    return allTracks;
};

export const GET = async (): Promise<NextResponse> => {
    try {
        // Try to get from cache first
        const cached = await redis.get<Track[]>(CACHE_KEY);
        if (cached) {
            return NextResponse.json({ tracks: cached }, { status: 200 });
        }

        // If not in cache, fetch from Spotify
        const accessToken = await getToken();
        const tracks = await getPlaylistTracks(accessToken);

        // Store in cache
        await redis.set(CACHE_KEY, tracks, { ex: CACHE_DURATION });

        return NextResponse.json({ tracks }, { status: 200 });
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Failed to get playlist data";
        return NextResponse.json({ error: message }, { status: 500 });
    }
};
