"use client";

import { useEffect } from "react";

interface AnimatedTitleProps {
    subtitle?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ subtitle }) => {
    useEffect(() => {
        const baseTitle = `${document.title}${subtitle ? ` - ${subtitle}` : ""} ˚｡୨୧˚ `;
        let position = 0;

        const intervalId = setInterval(() => {
            document.title =
                baseTitle.slice(position) + baseTitle.slice(0, position);
            position = (position + 1) % baseTitle.length;
        }, 200);

        return (): void => clearInterval(intervalId);
    }, [subtitle]);

    return null;
};
