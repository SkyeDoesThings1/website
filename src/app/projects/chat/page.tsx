import * as React from "react";
import { AnimatedTitle } from "@/components/AnimatedTitle";

const ChatPage = (): React.ReactElement => {
    return (
        <>
            <AnimatedTitle subtitle="chat room" />
            <div className="space-y-8">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ chat room ✩°｡⋆
                    </h1>
                </section>

                <section></section>
            </div>
        </>
    );
};

export default ChatPage;
