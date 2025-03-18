import { env } from "@/env";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { geist } from "@/assets/fonts";
import { LastFmTrackDisplay } from "./components/LastFmTrack";
import Image from "next/image";

interface Track {
    name: string;
    length: string;
    artists: string;
    cover: string;
}

export const dynamic = "force-dynamic";

const getSpotifySearchUrl = (name: string, artists: string): string => {
    const query = encodeURIComponent(`${name} ${artists}`);
    return `https://open.spotify.com/search/${query}`;
};

const fetchSpotifyData = async (): Promise<Track[]> => {
    const res = await fetch(`${env.NEXT_PUBLIC_URL}/api/spotify`, {
        cache: "force-cache",
    });
    const data = await res.json();
    return data.tracks;
};

const MusicPage = async (): Promise<React.ReactElement> => {
    const tracks = await fetchSpotifyData();

    return (
        <div className="space-y-12">
            <AnimatedTitle subtitle="music" />
            <section className="space-y-6 text-center">
                <h1 className="glitter-text text-4xl font-bold">
                    ⋆｡°✩ music ✩°｡⋆
                </h1>

                <p className="pixel-border animate-rainbow-text rounded-lg p-4 text-lg">
                    music you should like totally listen to :3
                </p>
            </section>
            <LastFmTrackDisplay />

            <div className="pixel-border rounded-lg bg-pink-500/10">
                {tracks?.map((track: Track, index: number) => (
                    <a
                        href={getSpotifySearchUrl(track.name, track.artists)}
                        target="_blank"
                        rel="noopener"
                        key={`${track.name}-${track.artists}-${index}`}
                        className="flex cursor-pointer items-center border-b border-neutral-800 px-4 py-3 transition-colors hover:bg-neutral-800"
                    >
                        <span className="min-w-[2rem] text-sm text-neutral-500">
                            {index + 1}
                        </span>
                        <Image
                            src={track.cover}
                            alt={`${track.name} cover`}
                            className="h-12 w-12 rounded object-cover"
                            width={48}
                            height={48}
                        />
                        <div className="ml-4 min-w-0 flex-grow">
                            <h2 className="truncate text-base font-medium">
                                {track.name}
                            </h2>
                            <p
                                className={`${geist.className} truncate text-sm text-neutral-400`}
                            >
                                {track.artists}
                            </p>
                        </div>
                        <span
                            className={`${geist.className} ml-4 text-sm whitespace-nowrap text-neutral-500`}
                        >
                            {track.length}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MusicPage;
