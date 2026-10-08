import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import ShoringDiagram from "@/components/site/ShoringDiagram";

const SCOPE = ["Shoring", "Formwork", "Falsework", "Scaffolding", "Excavation Support"];

export default function TemporaryWorks() {
  return (
    <section className="relative border-b border-border bg-secondary/40">
      <div className="shell relative py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <SectionMeta index="04">Temporary &amp; Construction Works</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2.1rem,5vw,3.9rem)] text-ink">
              Engineered for the
              <br />
              construction sequence.
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-steel">
              Temporary structures are critical to the safe and efficient execution of complex construction.
              Prem Technology supports shoring, formwork, falsework, scaffolding and excavation support with
              engineering focused on real construction conditions.
            </p>

            <ul className="mt-10 border-t border-border sm:grid sm:grid-cols-2 sm:gap-x-8">
              {SCOPE.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4 border-b border-border py-4">
                  <span className="label-mono text-steel/60">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[15px] uppercase tracking-[0.03em] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <figure className="border border-border bg-background p-6 lg:p-8">
              <figcaption className="label-mono mb-7 flex items-center justify-between gap-4 text-steel">
                <span>Fig. 01 — Shoring &amp; Excavation Support</span>
                <span className="text-steel/60">Section</span>
              </figcaption>
              <ShoringDiagram className="h-auto w-full text-ink/80" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}