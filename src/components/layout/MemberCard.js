"use client";

import { useMemo } from "react";

const holdColors = ["blue", "purp", "red", "yellow"];
const corners = [
    { position: "top-left", classes: "-top-7 -left-7" },
    { position: "top-right", classes: "-top-7 -right-7" },
    { position: "bottom-right", classes: "-bottom-7 -right-7" },
];

export default function MemberCard({ title, description, imgUrl }) {
    const holdConfig = useMemo(() => {
        if (Math.random() < 0.36) {
            const holdColor = holdColors[Math.floor(Math.random() * holdColors.length)];
            const corner = corners[Math.floor(Math.random() * corners.length)];
            return { show: true, color: holdColor, corner };
        }
        return { show: false };
    }, []);

    return (
        <div className="relative w-72 bg-white px-2 py-4 text-background flex flex-col">
            <img src="/stickers/tape3.png"
                className="absolute top-[-50] left-1/2 -translate-x-1/2 z-20 w-24 rotate-[-2deg]" />
            {holdConfig.show && (
                <img
                    src={`/stickers/hold_${holdConfig.color}.svg`}
                    alt=""
                    className={`absolute ${holdConfig.corner.classes} z-20 w-18 h-18`}
                />
            )}
            <img
                src={imgUrl}
                alt="Climbing club activity"
                className="mb-3 h-58 w-full object-cover"
            />

            <div className="flex flex-col flex-1 justify-between">
                <div >
                    <h2 className="text-4xl font-mansalva mb-2">{title}</h2>
                    <p className="text-lg font-mansalva">{description}</p>
                </div>
            </div>
        </div>
    );
}
