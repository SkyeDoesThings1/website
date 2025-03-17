import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        UPSTASH_REDIS_REST_URL: z.string().url(),
        UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
        NODE_ENV: z.enum(["development", "production"]),
        SPOTIFY_CLIENT_ID: z.string(),
        SPOTIFY_CLIENT_SECRET: z.string(),
        SPOTIFY_PLAYLIST_ID: z.string(),
    },
    client: {
        NEXT_PUBLIC_URL: z.string().url(),
    },
    runtimeEnv: {
        UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
        UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
        NODE_ENV: process.env.NODE_ENV,
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        SPOTIFY_PLAYLIST_ID: process.env.SPOTIFY_PLAYLIST_ID,
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    },
});
