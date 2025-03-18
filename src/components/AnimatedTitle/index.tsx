"use client";

import { useEffect } from "react";
import { isbot } from "isbot";

interface AnimatedTitleProps {
    subtitle?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ subtitle }) => {
    useEffect(() => {
        const baseTitle = `${document.title}${subtitle ? ` - ${subtitle}` : ""} ˚｡୨୧˚ `;

        if (isbot(navigator.userAgent)) {
            document.title = baseTitle;
            console.log(isbot(navigator.userAgent));
            return;
        }

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
