import { Fredoka, Geist_Mono } from "next/font/google";

export const fredoka = Fredoka({
    preload: true,
    display: "swap",
    subsets: ["latin"],
    weight: ["500"],
});

export const geist = Geist_Mono({
    preload: true,
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});
