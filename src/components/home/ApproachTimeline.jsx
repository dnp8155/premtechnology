import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { APPROACH } from "@/lib/content";

export default function ApproachTimeline() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="shell py-20 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionMeta index="07">Approach</SectionMeta>
          <h2 className="display mt-7 text-[clamp(2.1rem,5vw,3.9rem)] text-ink">
            Engineering with
            <br />
            constructability in mind.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-0 lg:grid-cols-5">
          {APPROACH.map((step, index) => (
            <Reveal
              as="li"
              key={step.index}
              delay={index * 0.06}
              className="relative border-t border-border pb-8 pt-8 lg:pb-0 lg:pr-8 lg:last:pr-0"
            >
              <span aria-hidden="true" className="absolute left-0 top-[-1px] h-[2px] w-12 bg-brand" />
              <span className="label-mono text-steel/70">{step.index}</span>
              <h3 className="display mt-4 text-[1.3rem] text-ink">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-steel">{step.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}