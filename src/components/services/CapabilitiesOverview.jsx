import React from "react";
import Reveal from "@/components/site/Reveal";
import { SERVICE_CARD } from "@/lib/content";

export default function CapabilitiesOverview() {
  return (
    <section className="border-b border-border bg-background">
      <div className="shell py-16 lg:py-24">
        {/* Scale highlight */}
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="label-mono text-brand">Project Scale</span>
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
          </div>
          <h2 className="display t-h2 mt-6 text-ink">
            From small-scale installations to major infrastructure
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-steel">
            We engineer projects of every scale — from individual structural elements to complete
            infrastructure systems — with the same technical rigor.
          </p>
        </Reveal>

        {/* Two columns of services */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h3 className="label-mono border-b-2 border-brand bg-ink px-5 py-3 text-white">
                Specializations & Services
              </h3>
              <ul className="mt-6 space-y-4">
                {SERVICE_CARD.specializations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                    <span className="text-[15px] leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3 className="label-mono border-b-2 border-brand bg-ink px-5 py-3 text-white">
                Engineering & Technical Services
              </h3>
              <ul className="mt-6 space-y-4">
                {SERVICE_CARD.technicalServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                    <span className="text-[15px] leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Highlight bar */}
        <Reveal className="mt-12">
          <div className="bg-ink px-6 py-5 text-center">
            <span className="font-display text-[16px] font-semibold uppercase tracking-[0.04em] text-white">
              Material Sourcing & Procurement Solutions
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}