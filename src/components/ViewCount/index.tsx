"use client";

import { usePlausible } from "next-plausible";
import { useQuery } from "@tanstack/react-query";
import { geist } from "@/assets/fonts";

export const ViewCount = (): React.ReactElement => {
    const plausible = usePlausible();

    const { data, isLoading } = useQuery({
        queryKey: ["views"],
        queryFn: async () => {
            plausible("pageView");
            const response = await fetch("/api/views", {
                method: "GET",
            });
            return response.json();
        },
        staleTime: Infinity,
    });

    return (
        <section className="mt-8 text-center">
            <div className="inline-block rounded-lg border border-pink-500/30 p-4">
                <p className="text-[#ff69b4]">View Counter:</p>
                <span
                    className={`${geist.className} font-medium text-green-400`}
                >
                    {isLoading ? "Loading..." : (data?.views ?? 0)}
                </span>
            </div>
        </section>
    );
};
