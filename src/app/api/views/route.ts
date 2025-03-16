import { Redis } from "@upstash/redis";
import { env } from "@/env";
import { NextResponse } from "next/server";

const redis = new Redis({
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
});

export const GET = async (): Promise<NextResponse> => {
    try {
        const views = await redis.incr("views");
        return NextResponse.json({ views }, { status: 200 });
    } catch {
        return NextResponse.json(
            { error: "Failed to increment views" },
            { status: 500 },
        );
    }
};
