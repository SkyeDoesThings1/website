import { AnimatedTitle } from "@/components/AnimatedTitle";
import Link from "next/link";

const AboutPage = (): React.ReactElement => {
    return (
        <>
            <AnimatedTitle subtitle="about" />
            <div className="space-y-12">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ about me ✩°｡⋆
                    </h1>
                    <p className="pixel-border rounded-lg p-4 text-lg">
                        <span className="animate-rainbow-text">
                            helloo !! im skyler
                        </span>{" "}
                        i am a 13 year old full stack dev who is also interested
                        in devops. i love listening to{" "}
                        <Link href="/about/music" className="text-pink">
                            music
                        </Link>{" "}
                        and watching{" "}
                        <Link href="/about/anime" className="text-pink">
                            anime
                        </Link>
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">what i know</h2>
                    <div className="pixel-border rounded-lg bg-pink-500/10 p-4">
                        <ul className="list-disc space-y-2 pl-5">
                            <li>typescript / javascript</li>
                            <li>react & next.js</li>
                            <li>docker & containers</li>
                            <li>node.js</li>
                            <li>sass / css</li>
                            <li>tailwind css</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">contact me</h2>
                    <div className="pixel-border rounded-lg bg-pink-500/10 p-4">
                        <ul className="list-disc space-y-2 pl-5">
                            <li>twitter: @SkyeDoes_aThing</li>
                            <li>github: skyedoesthings1</li>
                            <li>bluesky: skyler.lol</li>
                            <li>discord: @skyedoesthings</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
