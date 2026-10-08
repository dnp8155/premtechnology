import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { CLIENTS } from "@/lib/content";

export default function WhoWeSupport() {
  return (
    <section className="border-b border-border bg-background">
      <div className="shell py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <SectionMeta index="10">Clients</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2rem,4vw,3.2rem)] text-ink">Who we support.</h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-steel">
              We work alongside the teams responsible for delivering complex structural and infrastructure work.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-border">
              {CLIENTS.map((client, index) => (
                <li
                  key={client}
                  className="group flex items-baseline justify-between gap-6 border-b border-border py-5"
                >
                  <span className="font-display text-[clamp(1rem,1.7vw,1.25rem)] uppercase leading-snug tracking-[0.02em] text-ink transition-colors duration-300 group-hover:text-brand">
                    {client}
                  </span>
                  <span className="label-mono text-steel/60">{String(index + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}