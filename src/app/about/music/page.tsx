import { env } from "@/env";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { geist } from "@/assets/fonts";
import Image from "next/image";

interface Track {
    name: string;
    length: string;
    artists: string;
    cover: string;
}

const getSpotifySearchUrl = (name: string, artists: string): string => {
    const query = encodeURIComponent(`${name} ${artists}`);
    return `https://open.spotify.com/search/${query}`;
};

async function fetchSpotifyData(): Promise<Track[]> {
    const res = await fetch(`${env.NEXT_PUBLIC_URL}/api/spotify`, {
        cache: "force-cache",
    });
    const data = await res.json();
    return data.tracks;
}

const MusicPage = async (): Promise<React.ReactElement> => {
    const tracks = await fetchSpotifyData();

    return (
        <>
            <AnimatedTitle subtitle="music" />
            <div className="space-y-12">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ music ✩°｡⋆
                    </h1>
                    <p className="pixel-border animate-rainbow-text rounded-lg p-4 text-lg">
                        music u should like totally listen to :3
                    </p>
                </section>

                <div className="pixel-border rounded-lg bg-pink-500/10">
                    {tracks?.map((track: Track, index: number) => (
                        <a
                            href={getSpotifySearchUrl(
                                track.name,
                                track.artists,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`${track.name}-${track.artists}-${index}`}
                            className="flex cursor-pointer items-center border-b border-neutral-800 px-4 py-3 transition-colors hover:bg-neutral-800"
                        >
                            <span className="w-8 text-sm text-neutral-500">
                                {index + 1}
                            </span>
                            <Image
                                src={track.cover}
                                alt={`${track.name} cover`}
                                className="h-12 w-12 rounded object-cover"
                                width={48}
                                height={48}
                            />
                            <div className="ml-4 flex-grow">
                                <h2 className="text-base font-medium">
                                    {track.name}
                                </h2>
                                <p
                                    className={`${geist.className} text-sm text-neutral-400`}
                                >
                                    {track.artists}
                                </p>
                            </div>
                            <span
                                className={`${geist.className} text-sm text-neutral-500`}
                            >
                                {track.length}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MusicPage;
