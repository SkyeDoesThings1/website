"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TopBar = (): React.ReactElement => {
    const pathname = usePathname();
    return (
        <nav
            className="flex items-center justify-end p-4 font-extrabold"
            aria-label="Main navigation"
        >
            <div className="flex gap-4">
                <Link
                    href="/"
                    className={pathname === "/" ? "text-pink" : ""}
                    aria-current={pathname === "/" ? "page" : undefined}
                >
                    Home
                </Link>
                <Link
                    href="/blog"
                    className={pathname === "/blog" ? "text-pink" : ""}
                    aria-current={pathname === "/blog" ? "page" : undefined}
                >
                    Blog
                </Link>
                <Link
                    href="/projects"
                    className={pathname === "/projects" ? "text-pink" : ""}
                    aria-current={pathname === "/projects" ? "page" : undefined}
                >
                    Projects
                </Link>
                <Link
                    href="/about"
                    className={pathname === "/about" ? "text-pink" : ""}
                    aria-current={pathname === "/about" ? "page" : undefined}
                >
                    About
                </Link>
            </div>
        </nav>
    );
};
