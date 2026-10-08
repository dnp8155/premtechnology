import React from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import SectionMeta from "./SectionMeta";

export default function PageHero({ index, eyebrow, title, copy, image, imageAlt, tags = [], compact = false }) {
  return (
    <section className={cn("relative overflow-hidden", image ? "bg-ink" : "bg-graphite")}>
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt || ""}
            fittingType="fill"
            loading="eager"
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/75 to-ink/60" aria-hidden="true" />
        </>
      ) : (
        <div className="tech-grid-dark absolute inset-0 opacity-70" aria-hidden="true" />
      )}

      <div
        className={cn(
          "shell relative flex flex-col justify-end pb-12",
          compact ? "min-h-[40vh] pt-36 lg:pb-14" : "min-h-[62vh] pt-40 lg:min-h-[68vh] lg:pb-16 lg:pt-52"
        )}
      >
        <SectionMeta index={index} tone="light">
          {eyebrow}
        </SectionMeta>
        <h1 className="display mt-7 max-w-[19ch] text-[clamp(2.4rem,6.4vw,5.2rem)] text-white">{title}</h1>
        {copy ? <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-white/70 lg:text-[17px]">{copy}</p> : null}

        {tags.length ? (
          <div className="mt-12 grid grid-cols-2 border-t border-white/15 sm:grid-cols-3 lg:grid-cols-4">
            {tags.map((tag) => (
              <div key={tag} className="label-mono border-b border-white/10 py-5 pr-6 text-white/55 lg:border-b-0">
                {tag}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}