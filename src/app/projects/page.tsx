import { AnimatedTitle } from "@/components/AnimatedTitle";
import Link from "next/link";

const ProjectsPage = (): React.ReactElement => {
    return (
        <>
            <AnimatedTitle subtitle="projects" />
            <div className="space-y-8">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ my projects ✩°｡⋆
                    </h1>
                    <p className="pixel-border rounded-lg bg-pink-500/10 p-4 text-lg">
                        <span className="animate-rainbow-text">
                            here are some of the things ive made !!
                        </span>
                    </p>
                </section>

                <div className="grid gap-6 md:grid-cols-2">
                    <Link href="/projects/spinmii">
                        <div className="rounded-lg border border-pink-500/45 bg-black/30 p-6 transition-all hover:scale-[1.02] hover:border-pink-500 hover:bg-pink-500/10">
                            <h3 className="text-pink-2 text-xl font-bold">
                                Spin Mii
                            </h3>
                            <p className="mt-2 text-gray-400">
                                spins your miis !!
                            </p>
                        </div>
                    </Link>
                    <Link href="/projects/rose" rel="noopener" target="_blank">
                        <div className="rounded-lg border border-pink-500/45 bg-black/30 p-6 transition-all hover:scale-[1.02] hover:border-pink-500 hover:bg-pink-500/10">
                            <h3 className="text-pink-2 text-xl font-bold">
                                Project Rosé
                            </h3>
                            <p className="mt-2 text-gray-400">
                                nintendo tvii revival
                            </p>
                        </div>
                    </Link>
                    <Link href="/projects/chat">
                        <div className="rounded-lg border border-pink-500/45 bg-black/30 p-6 transition-all hover:scale-[1.02] hover:border-pink-500 hover:bg-pink-500/10">
                            <h3 className="text-pink-2 text-xl font-bold">
                                Chat room
                            </h3>
                            <p className="mt-2 text-gray-400">
                                a realtime chat room with websockets
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
