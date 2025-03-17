"use client";

import { useEffect, useState } from "react";
import { geist } from "@/assets/fonts";
import Image from "next/image";
import empty from "@/assets/img/empty.png";

interface LastFmTrack {
    name: string;
    artist: {
        "#text": string;
    };
    album: {
        "#text": string;
    };
    image: Array<{
        "#text": string;
        size: string;
    }>;
    "@attr"?: {
        nowplaying: string;
    };
}

export const LastFmTrackDisplay = (): React.ReactElement | null => {
    const [lastTrack, setLastTrack] = useState<LastFmTrack | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLastTrack = async (initialFetch = false): Promise<void> => {
            try {
                const res = await fetch(
                    "https://lastfm-last-played.biancarosa.com.br/skyedoesthings1/latest-song",
                );
                const data = await res.json();
                setLastTrack((prev) => {
                    if (
                        initialFetch ||
                        JSON.stringify(data.track) !== JSON.stringify(prev)
                    ) {
                        return data.track;
                    }
                    return prev;
                });
            } catch (error: unknown) {
                console.error("Failed to fetch LastFM track:", error);
            } finally {
                if (initialFetch) setLoading(false);
            }
        };

        fetchLastTrack(true);

        const interval = setInterval(() => fetchLastTrack(false), 30000);

        return (): void => clearInterval(interval);
    }, []);

    if (loading)
        return (
            <section className="space-y-4">
                <h1 className="text-2xl font-bold">Loading...</h1>
                <div className="pixel-border flex items-center gap-4 rounded-lg bg-pink-500/10 p-4">
                    <Image
                        src={empty}
                        alt="album cover"
                        className="h-24 w-24 rounded object-cover"
                        width={96}
                        height={96}
                    />
                    <div>
                        <h2 className="text-xl font-medium"> </h2>
                        <p className={`${geist.className} text-neutral-400`}>
                            {" "}
                        </p>
                    </div>
                </div>
            </section>
        );
    if (!lastTrack) return null;

    return (
        <section className="space-y-4">
            <h1 className="text-2xl font-bold">
                {lastTrack["@attr"]?.nowplaying === "true"
                    ? "currently listening to"
                    : "the song i listened to last"}
            </h1>
            <div className="pixel-border flex items-center gap-4 rounded-lg bg-pink-500/10 p-4">
                <Image
                    src={lastTrack.image[3]["#text"]}
                    alt={`${lastTrack.name} album cover`}
                    className="h-24 w-24 rounded object-cover"
                    width={96}
                    height={96}
                />
                <div>
                    <h2 className="text-xl font-medium">{lastTrack.name}</h2>
                    <p className={`${geist.className} text-neutral-400`}>
                        {lastTrack.artist["#text"]} • {lastTrack.album["#text"]}
                    </p>
                </div>
            </div>
        </section>
    );
};
