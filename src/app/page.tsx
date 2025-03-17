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
import aioi from "@/assets/img/aioi.gif";
import wifi from "@/assets/img/wifi.gif";

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

                <section className="space-y-4 rounded-xl bg-pink-500/10 p-6">
                    <h1 className="mb-6 text-center text-3xl font-bold">
                        ✨ hobbies ✨
                    </h1>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <li className="flex items-center space-x-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                            <span className="text-2xl">💻</span>
                            <span>programming</span>
                        </li>
                        <li className="flex items-center space-x-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                            <span className="text-2xl">🎌</span>
                            <span>anime</span>
                        </li>
                        <li className="flex items-center space-x-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                            <span className="text-2xl">🎵</span>
                            <span>music</span>
                        </li>
                    </ul>
                </section>

                <section className="flex justify-center">
                    <iframe
                        width="314"
                        height="321"
                        scrolling="no"
                        src="https://gifypet.neocities.org/pet/pet.html?name=Sylvie&dob=1742198843&gender=f&element=Air&pet=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fe57c0ca5-c162-43e7-b0dc-40f215c30321%2Fdg5zzve-0a3e38cd-c3c7-4290-aed5-f4bb01860b0a.gif%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1N2MwY2E1LWMxNjItNDNlNy1iMGRjLTQwZjIxNWMzMDMyMVwvZGc1enp2ZS0wYTNlMzhjZC1jM2M3LTQyOTAtYWVkNS1mNGJiMDE4NjBiMGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5FPj6o0MJwwg0OvYDXu97b9ke420SGr_T29Pbb03Vk&map=tree.jpg&background=paper.jpg&tablecolor=%23ffaddd&textcolor=black"
                        frameBorder={0}
                    ></iframe>
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
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://aioi.neocities.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={aioi}
                                    alt="frutiger aero archive"
                                    width={88}
                                    height={31}
                                    className="border border-gray-300 shadow-md"
                                    unoptimized
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wi-fi.neocities.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit where the badge is from"
                                className="inline-block hover:m-[-1px] hover:border hover:border-white"
                            >
                                <Image
                                    src={wifi}
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
