import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";

const PRINCIPLES = [
  {
    index: "01",
    title: "Technical depth",
    copy: "Engineering judgement grounded in structural behaviour, loading and constructability — applied where the margin for error is small.",
  },
  {
    index: "02",
    title: "Constructability",
    copy: "Solutions developed around how the work is actually built: sequence, access, tolerances and site conditions.",
  },
  {
    index: "03",
    title: "Responsive engineering support",
    copy: "Direct engineering involvement through design reviews, construction phases and coordination with project teams.",
  },
  {
    index: "04",
    title: "Project-focused delivery",
    copy: "Clear, documented engineering information issued in a form project teams can build from and review against.",
  },
];

export default function WhyPrem() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="tech-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="shell relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <SectionMeta index="09" tone="light">
              Why Prem Technology
            </SectionMeta>
            <h2 className="display mt-7 text-[clamp(2.1rem,5vw,4rem)] text-white">
              Precision where
              <br />
              complexity demands it.
            </h2>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            {PRINCIPLES.map((item, index) => (
              <Reveal
                key={item.index}
                delay={index * 0.06}
                className="border-t border-white/15 py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <div className="flex gap-5">
                  <span className="label-mono mt-1.5 text-white/40">{item.index}</span>
                  <div>
                    <h3 className="font-display text-[17px] uppercase tracking-[0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/60">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}