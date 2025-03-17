import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

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
