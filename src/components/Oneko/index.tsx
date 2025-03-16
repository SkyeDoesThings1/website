"use client";

import { useEffect } from "react";
import onekoImg from "@/assets/img/oneko.gif";

const oneko = (): void => {
    const isReducedMotion: boolean =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;

    const isMoible = (): boolean => {
        const userAgent =
            navigator.userAgent ||
            navigator.vendor ||
            /* eslint-disable @typescript-eslint/no-explicit-any */
            (window as any).opera ||
            "";

        const mobileRegex1 =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

        const mobileRegex2 =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

        return (
            mobileRegex1.test(userAgent) ||
            mobileRegex2.test(userAgent.substr(0, 4))
        );
    };

    if (isReducedMotion) return;
    if (isMoible()) return;

    const nekoEl: HTMLDivElement = document.createElement("div");

    let nekoPosX: number = 32;
    let nekoPosY: number = 32;

    let mousePosX: number = 0;
    let mousePosY: number = 0;

    let frameCount: number = 0;
    let idleTime: number = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame: number = 0;

    const nekoSpeed: number = 10;
    const spriteSets: Record<string, [number, number][]> = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratchSelf: [
            [-5, 0],
            [-6, 0],
            [-7, 0],
        ],
        scratchWallN: [
            [0, 0],
            [0, -1],
        ],
        scratchWallS: [
            [-7, -1],
            [-6, -2],
        ],
        scratchWallE: [
            [-2, -2],
            [-2, -3],
        ],
        scratchWallW: [
            [-4, 0],
            [-4, -1],
        ],
        tired: [[-3, -2]],
        sleeping: [
            [-2, 0],
            [-2, -1],
        ],
        N: [
            [-1, -2],
            [-1, -3],
        ],
        NE: [
            [0, -2],
            [0, -3],
        ],
        E: [
            [-3, 0],
            [-3, -1],
        ],
        SE: [
            [-5, -1],
            [-5, -2],
        ],
        S: [
            [-6, -3],
            [-7, -2],
        ],
        SW: [
            [-5, -3],
            [-6, -1],
        ],
        W: [
            [-4, -2],
            [-4, -3],
        ],
        NW: [
            [-1, 0],
            [-1, -1],
        ],
    };

    const init = (): void => {
        nekoEl.id = "oneko";
        nekoEl.ariaHidden = "true";
        Object.assign(nekoEl.style, {
            width: "32px",
            height: "32px",
            position: "fixed",
            pointerEvents: "auto",
            imageRendering: "pixelated",
            left: `${nekoPosX - 16}px`,
            top: `${nekoPosY - 16}px`,
            zIndex: String(Number.MAX_VALUE),
        });

        nekoEl.style.backgroundImage = `url(${onekoImg.src})`;

        document.body.appendChild(nekoEl);

        document.addEventListener("mousemove", (event: MouseEvent) => {
            mousePosX = event.clientX;
            mousePosY = event.clientY;
        });

        window.requestAnimationFrame(onAnimationFrame);
    };

    let lastFrameTimestamp: number;

    const onAnimationFrame = (timestamp: number): void => {
        if (!nekoEl.isConnected) return;
        if (!lastFrameTimestamp) {
            lastFrameTimestamp = timestamp;
        }
        if (timestamp - lastFrameTimestamp > 100) {
            lastFrameTimestamp = timestamp;
            frame();
        }
        window.requestAnimationFrame(onAnimationFrame);
    };

    const setSprite = (name: string, frame: number): void => {
        const sprite = spriteSets[name][frame % spriteSets[name].length];
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const resetIdleAnimation = (): void => {
        idleAnimation = null;
        idleAnimationFrame = 0;
    };

    const idle = (): void => {
        idleTime += 1;
        if (
            idleTime > 10 &&
            Math.floor(Math.random() * 200) === 0 &&
            idleAnimation === null
        ) {
            const availableIdleAnimations = ["sleeping", "scratchSelf"];
            if (nekoPosX < 32) availableIdleAnimations.push("scratchWallW");
            if (nekoPosY < 32) availableIdleAnimations.push("scratchWallN");
            if (nekoPosX > window.innerWidth - 32)
                availableIdleAnimations.push("scratchWallE");
            if (nekoPosY > window.innerHeight - 32)
                availableIdleAnimations.push("scratchWallS");
            idleAnimation =
                availableIdleAnimations[
                    Math.floor(Math.random() * availableIdleAnimations.length)
                ];
        }

        switch (idleAnimation) {
            case "sleeping":
                setSprite(
                    idleAnimationFrame < 8 ? "tired" : "sleeping",
                    Math.floor(idleAnimationFrame / 4),
                );
                if (idleAnimationFrame > 192) resetIdleAnimation();
                break;
            case "scratchWallN":
            case "scratchWallS":
            case "scratchWallE":
            case "scratchWallW":
            case "scratchSelf":
                setSprite(idleAnimation, idleAnimationFrame);
                if (idleAnimationFrame > 9) resetIdleAnimation();
                break;
            default:
                setSprite("idle", 0);
                return;
        }
        idleAnimationFrame += 1;
    };

    const frame = (): void => {
        frameCount += 1;
        const diffX = nekoPosX - mousePosX;
        const diffY = nekoPosY - mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < nekoSpeed || distance < 48) {
            idle();
            return;
        }
        idleAnimation = null;
        idleAnimationFrame = 0;

        if (idleTime > 1) {
            setSprite("alert", 0);
            idleTime = Math.min(idleTime, 7);
            idleTime -= 1;
            return;
        }

        const direction: string =
            (diffY / distance > 0.5 ? "N" : "") +
            (diffY / distance < -0.5 ? "S" : "") +
            (diffX / distance > 0.5 ? "W" : "") +
            (diffX / distance < -0.5 ? "E" : "");

        setSprite(direction, frameCount);
        nekoPosX -= (diffX / distance) * nekoSpeed;
        nekoPosY -= (diffY / distance) * nekoSpeed;

        nekoEl.style.left = `${Math.min(Math.max(16, nekoPosX), window.innerWidth - 16) - 16}px`;
        nekoEl.style.top = `${Math.min(Math.max(16, nekoPosY), window.innerHeight - 16) - 16}px`;
    };

    const explodeHearts = (): void => {
        const parent = nekoEl.parentElement;
        const rect = nekoEl.getBoundingClientRect();
        const scrollLeft =
            window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const centerX = rect.left + rect.width / 2 + scrollLeft;
        const centerY = rect.top + rect.height / 2 + scrollTop;

        for (let i = 0; i < 10; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.textContent = "❤";
            const offsetX = (Math.random() - 0.5) * 50;
            const offsetY = (Math.random() - 0.5) * 50;
            heart.style.left = `${centerX + offsetX - 16}px`;
            heart.style.top = `${centerY + offsetY - 16}px`;
            heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            parent?.appendChild(heart);

            setTimeout(() => {
                parent?.removeChild(heart);
            }, 1000);
        }
    };

    const style = document.createElement("style");
    style.innerHTML = `
		  @keyframes heartBurst {
			  0% { transform: scale(0); opacity: 1; }
			  100% { transform: scale(1); opacity: 0; }
		  }
		  .heart {
			  position: absolute;
			  font-size: 2em;
			  animation: heartBurst 1s ease-out;
			  animation-fill-mode: forwards;
			  color: #ffbdf9;
		  }
	  `;

    document.head.appendChild(style);
    nekoEl.addEventListener("click", explodeHearts);

    init();
};

export const Oneko: React.FC = (): null => {
    useEffect(() => {
        oneko();
    }, []);

    return null;
};
