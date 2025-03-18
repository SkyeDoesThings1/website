import * as React from "react";
import { AnimatedTitle } from "@/components/AnimatedTitle";

const BlogPage = (): React.ReactElement => {
    return (
        <>
            <AnimatedTitle subtitle="blog" />
            <div className="space-y-8">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ blog ✩°｡⋆
                    </h1>
                </section>

                <section></section>
            </div>
        </>
    );
};

export default BlogPage;
