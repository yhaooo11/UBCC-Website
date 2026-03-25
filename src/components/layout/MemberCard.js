"use client";

import Image from "next/image";

const holdColors = ["blue", "purp", "red", "yellow"];
const corners = [
  { classes: "-top-7 -left-7" },
  { classes: "-top-7 -right-7" },
  { classes: "-bottom-7 -right-7" },
];

function getStableIndex(value, length) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash % length;
}

function getHoldConfig(seed) {
  const shouldShow = getStableIndex(seed, 100) < 36;

  if (!shouldShow) {
    return { show: false };
  }

  return {
    show: true,
    color: holdColors[getStableIndex(`${seed}-color`, holdColors.length)],
    corner: corners[getStableIndex(`${seed}-corner`, corners.length)],
  };
}

export default function MemberCard({ title, description, imgUrl }) {
  const holdConfig = getHoldConfig(title);

  return (
    <div className="relative w-72 bg-white px-2 py-4 text-background flex flex-col">
      <Image
        src="/stickers/tape3.png"
        alt=""
        aria-hidden="true"
        width={96}
        height={96}
        className="absolute top-[-50] left-1/2 -translate-x-1/2 z-20 w-24 rotate-[-2deg]"
      />
      {holdConfig.show && (
        <Image
          src={`/stickers/hold_${holdConfig.color}.svg`}
          alt=""
          aria-hidden="true"
          width={72}
          height={72}
          className={`absolute ${holdConfig.corner.classes} z-20 w-18 h-18`}
        />
      )}
      <Image
        src={imgUrl}
        alt={`${title} headshot`}
        width={600}
        height={600}
        className="mb-3 h-58 w-full object-cover"
      />

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-4xl font-mansalva mb-2">{title}</h2>
          <p className="text-lg font-mansalva">{description}</p>
        </div>
      </div>
    </div>
  );
}
