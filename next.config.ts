import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mii-unsecure.ariankordi.net",
                pathname: "/miis/image.png",
            },
            {
                protocol: "https",
                hostname: "i.scdn.co",
                pathname: "/image/**",
            },
            {
                protocol: "https",
                hostname: "lastfm.freetls.fastly.net",
                pathname: "/i/u/300x300/**",
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: "/projects/rose",
                destination: "https://projectrose.cafe/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
