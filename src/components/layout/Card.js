"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Card({
  title,
  description,
  date,
  link,
  imgUrl,
  action,
  showAction = true,
  isPastEvent = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldClamp = description && description.length > 180;
  const cardMinHeight = isPastEvent ? "min-h-[30rem]" : "min-h-[34rem]";

  return (
    <article
      className={`relative flex w-72 flex-col border border-black/10 bg-[#FDFAEA] p-3 text-background shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-1 ${cardMinHeight}`}
    >
      <Image
        src="/stickers/tape3.png"
        alt=""
        aria-hidden="true"
        width={96}
        height={96}
        className="absolute top-[-40] left-1/2 -translate-x-1/2 z-20 w-24 rotate-[-2deg]"
      />
      <Image
        src={imgUrl || "./IMG_9525.jpg"}
        alt={title ? `${title} event image` : "UBC Climbing Club event image"}
        width={600}
        height={600}
        unoptimized
        className="mb-4 h-56 w-full object-cover"
      />

      <div className="flex flex-1 flex-col">
        <div className="mb-5 flex-1">
          <div className="mb-3 inline-flex rounded-full border border-black/15 bg-black/5 px-3 py-1 text-[0.7rem] font-bold tracking-[0.18em] uppercase font-pp-neue-montreal">
            {date || "Date TBA"}
          </div>
          <h2 className="mb-3 text-3xl leading-none font-serif">{title}</h2>

          {description ? (
            <div>
              <p
                className={`text-sm leading-6 font-pp-neue-montreal text-black/80 ${
                  shouldClamp && !isExpanded
                    ? "[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:4]"
                    : ""
                }`}
              >
                {description}
              </p>

              {shouldClamp && (
                <button
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                  aria-expanded={isExpanded}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold font-pp-neue-montreal underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {isExpanded ? "Show less" : "Show more"}
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}
            </div>
          ) : isPastEvent && !link ? (
            <p className="text-sm leading-6 font-pp-neue-montreal text-black/55">
              Photos coming soon!
            </p>
          ) : !isPastEvent ? (
            <p className="text-sm leading-6 font-pp-neue-montreal text-black/55">
              More event details coming soon.
            </p>
          ) : null}
        </div>

        {showAction && (
          <div className="mt-auto flex min-h-[4.5rem] items-end justify-between gap-4 border-t border-black/10 pt-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-black bg-[#E4FF6C] px-5 py-2 text-sm font-bold font-pp-neue-montreal transition-transform duration-200 hover:-translate-y-0.5"
              >
                {action || "RSVP"}
              </a>
            )}

            {!link && !isPastEvent && (
              <span className="inline-flex items-center rounded-md border border-transparent py-2 text-sm font-pp-neue-montreal text-black/55">
                RSVP link coming soon
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
