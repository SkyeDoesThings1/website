import * as React from "react";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import Image from "next/image";
import Link from "next/link";

const AnimeList = [
    {
        title: "Nichijou",
        image: "https://image.tmdb.org/t/p/w1280/qmi1VpOvPFRHg02fbLuc3pVrMbt.jpg",
        url: "https://myanimelist.net/anime/10165/Nichijou?q=nichijou&cat=anime",
    },
    {
        title: "Shikanoko Nokonoko Koshitantan",
        image: "https://image.tmdb.org/t/p/w1280/dTNjwQLaclazxqx21voA50185Ri.jpg",
        url: "https://myanimelist.net/anime/58426/Shikanoko_Nokonoko_Koshitantan?q=shikanoko&cat=anime",
    },
    {
        title: "Neon Genesis Evangelion",
        image: "https://image.tmdb.org/t/p/w1280/y2ah9t0navXyIvoHg1uIbIHO3tt.jpg",
        url: "https://myanimelist.net/anime/30/Shinseiki_Evangelion",
    },
    {
        title: "Onimai",
        image: "https://image.tmdb.org/t/p/w1280/3uZUfYhNI3ZPh4cwLNDtDAQbuR.jpg",
        url: "https://myanimelist.net/anime/51678/Oniichan_wa_Oshimai",
    },
];

const AnimePage = (): React.ReactElement => {
    return (
        <>
            <AnimatedTitle subtitle="anime" />
            <div className="space-y-12">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ anime ✩°｡⋆
                    </h1>
                    <p className="pixel-border animate-rainbow-text rounded-lg p-4 text-lg">
                        anime you should like totally watch (or die)
                    </p>
                </section>
                <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {AnimeList.map((anime, index) => (
                        <Link
                            href={anime.url}
                            target="_blank"
                            rel="noopener"
                            aria-label="Visit this anime my anime list page"
                            className="pixel-border rounded-lg bg-black/50 p-4 transition-transform hover:scale-105"
                            key={index}
                        >
                            <Image
                                src={anime.image}
                                width={305}
                                height={400}
                                alt={anime.title}
                                className="h-[400px] w-full rounded-lg object-cover"
                            />
                            <div className="mt-4 space-y-2">
                                <h3 className="glitter-text text-xl font-bold">
                                    {anime.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </>
    );
};

export default AnimePage;
