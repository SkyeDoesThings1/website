import { fredoka } from "@/assets/fonts";
import { Providers } from "@/components/Providers";
import { TopBar } from "@/components/TopBar";
import { Oneko } from "@/components/Oneko";
import { Analytics } from "@vercel/analytics/next";
import { type Metadata } from "next";
import PlausibleProvider from "next-plausible";
import Script from "next/script";
import "@/assets/styles/globals.css";

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
                url: "/og/og.png",
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
                url: "/og/og.png",
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
                <head>
                    <Script
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                        data-cf-beacon='{"token": "39338d24aaef47859087a8dc0a525b2c"}'
                        strategy="afterInteractive"
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(jsonLd),
                        }}
                    />
                </head>
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
                            <main className="mx-auto mt-4 w-[95%] rounded-lg border border-pink-500/45 bg-black/50 px-4 py-8 backdrop-blur-sm md:max-w-3xl md:px-6 md:py-12">
                                {children}
                            </main>
                            <footer className="px-4 py-4 text-center md:px-0">
                                <div className="space-y-2 text-sm">
                                    <p className="animate-rainbow-text">
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
                    <Script src="/js/sparkle.js" strategy="beforeInteractive" />
                </body>
                <Analytics />
            </html>
        </PlausibleProvider>
    );
};

export default RootLayout;
