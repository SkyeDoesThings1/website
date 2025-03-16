import { AnimatedTitle } from "@/components/AnimatedTitle";
import { ViewCount } from "@/components/ViewCount";
import Image from "next/image";
import miku from "@/assets/img/miku3.gif";
import miku2 from "@/assets/img/mikum.gif";
import anyBrowser from "@/assets/img/any.png";
import gayFlags from "@/assets/img/gayflags.png";
import transRights from "@/assets/img/transrights.png";
import nazisAreBad from "@/assets/img/nazisarebad.png";
import aiSucks from "@/assets/img/imageandvideoaisucks.gif";
import asuka from "@/assets/img/asuka.gif";
import asuka2 from "@/assets/img/asuka2.gif";
import aero from "@/assets/img/aero.png";

const HomePage = (): React.ReactElement => {
    const today = new Date();
    today.setUTCHours(11, 0, 0, 0);

    const birthDate = new Date(2011, 10, 13, 11, 0);
    birthDate.setUTCHours(11, 0, 0, 0);

    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const currentAge = Math.floor(diffDays / 365.25);

    return (
        <>
            <AnimatedTitle subtitle="home" />
            <div className="space-y-12">
                <section className="space-y-6 text-center">
                    <h1 className="glitter-text text-4xl font-bold">
                        ⋆｡°✩ hiii, im skye ^^ (she/her) ✩°｡⋆
                        <span className="animate-wave inline-block">👋</span>
                    </h1>

                    <p className="pixel-border rounded-lg bg-pink-500/10 p-4 text-lg">
                        <span className="animate-rainbow-text">
                            hellooo, you found my website !!
                        </span>{" "}
                        i am a {currentAge} year old (bad) web dev. i like to
                        make websites, discord bots, and other stuff like that.
                        i also like to play minecraft, pokemon, and some other
                        games. i am currently learning react and typescript.
                    </p>
                </section>

                <section className="space-y-4">
                    <h1 className="text-3xl font-bold">hobbies</h1>
                    <ul className="list-disc space-y-2 pl-5">
                        <li>programming</li>
                        <li>anime</li>
                        <li>music</li>
                    </ul>
                </section>

                <section className="space-y-12">
                    <div className="mb-4 text-center">
                        <h2 className="text-2xl font-bold text-[#ff69b4]">
                            ✨ buttons from other cool places !! ✨
                        </h2>
                    </div>
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li>
                            <a
                                href="https://plasticdino.net/graphics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={miku}
                                    alt="MIKUUUUU"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                    priority
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://plasticdino.net/graphics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={miku2}
                                    alt="MIKUUUUU"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={anyBrowser}
                                    alt="optimized for any browser !!"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://badge.les.bi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={gayFlags}
                                    alt="my fag flags"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://doqmeat.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={transRights}
                                    alt="TRANS RIGHTS !!!!!!"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://doqmeat.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={nazisAreBad}
                                    alt="kill the nazis"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://doqmeat.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={aiSucks}
                                    alt="image and video ai sucks !!"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://asukalover.neocities.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={asuka}
                                    alt="asuka my queen"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://asukalover.neocities.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={asuka2}
                                    alt="asuka my queen"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://frutigeraeroarchive.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={aero}
                                    alt="frutiger aero archive"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                />
                            </a>
                        </li>
                    </ul>
                </section>

                <ViewCount />
            </div>
        </>
    );
};

export default HomePage;
