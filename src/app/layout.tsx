import { Fredoka } from "next/font/google";
import { Providers } from "@/components/Providers";
import { TopBar } from "@/components/TopBar";
import { Oneko } from "@/components/Oneko";
import { Analytics } from "@vercel/analytics/next";
import { type Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "@/assets/styles/globals.css";

const fredoka = Fredoka({
    preload: true,
    display: "swap",
    subsets: ["latin"],
    weight: ["500"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://skyler.lol"),
    title: "⋆｡°✩ ♥ skye's site ♥ ✩°｡⋆",
    icons: {
        icon: "/favicon.png",
    },
    description: "skyedoesthings cool website",
    openGraph: {
        type: "website",
        title: "⋆｡°✩ ♥ skye's site ♥ ✩°｡⋆",
        images: [
            {
                url: "/og.png",
                alt: "Angry Asuka eating in space cause why not !!",
            },
        ],
    },
    twitter: {
        title: "⋆｡°✩ ♥ skye's site ♥ ✩°｡⋆",
        description: "skyedoesthings cool website",
        creator: "@SkyeDoes_aThing",
        images: [
            {
                url: "/og.png",
                alt: "Angry Asuka eating in space cause why not !!",
            },
        ],
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.ReactElement => {
    const currentYear = new Date().getFullYear();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Skyler",
        url: "https://skyler.lol",
        sameAs: [
            "https://twitter.com/skyedoes_athing",
            "https://github.com/skyedoesthings1",
            "https://bsky.app/profile/skyler.lol",
        ],
        jobTitle: "Developer",
        worksFor: {
            "@type": "Organization",
            name: "Project Rosé",
        },
        description:
            "Developer working on Project Rosé, web technologies, and other open-source projects.",
        knowsAbout: [
            "Web Development",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Docker",
            "PostgreSQL",
        ],
    };

    return (
        <PlausibleProvider
            domain="skyler.lol"
            customDomain="https://a.skyler.lol"
            trackOutboundLinks
            trackFileDownloads
            selfHosted
        >
            <html lang="en">
                <body
                    className={`${fredoka.className} selection:bg-pink-2 min-h-screen font-semibold text-white antialiased selection:text-white`}
                >
                    <div className="pointer-events-none fixed inset-0 bg-black/50"></div>
                    <div className="relative">
                        <Providers>
                            <TopBar />
                            <div className="overflow-hidden">
                                <p className="animate-marquee text-pink-2 py-2">
                                    ✨ ty for visiting my site ^^ ✨
                                </p>
                            </div>
                            <main className="mx-auto mt-4 max-w-3xl rounded-lg border border-pink-500/45 bg-black/50 px-6 py-12 backdrop-blur-sm">
                                {children}
                            </main>
                            <footer className="py-4 text-center">
                                <div className="space-y-2 text-sm">
                                    <p className="text-pink-2">
                                        ♥ Made with love by SkyeDoesThings1 ♥
                                    </p>
                                    <p className="text-gray-500">
                                        © {currentYear} All rights reserved
                                    </p>
                                </div>
                            </footer>
                        </Providers>
                    </div>
                    <Oneko />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(jsonLd),
                        }}
                    />
                </body>
                <Analytics />
            </html>
        </PlausibleProvider>
    );
};

export default RootLayout;
