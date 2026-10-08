import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { CAPABILITIES } from "@/lib/content";

export default function TechnicalCapabilities() {
  return (
    <section className="border-b border-border bg-background">
      <div className="shell py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionMeta index="08">Capabilities</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2rem,4vw,3.2rem)] text-ink">Technical capabilities.</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7 lg:pt-3">
            <p className="max-w-lg text-[16px] leading-relaxed text-steel">
              A focused technical scope, delivered as part of project design, review and construction support.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => (
            <div
              key={capability}
              className="flex items-baseline gap-4 border-b border-r border-border px-6 py-7"
            >
              <span className="label-mono text-steel/60">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-display text-[15px] uppercase leading-snug tracking-[0.03em] text-ink">
                {capability}
              </span>
            </div>
          ))}

          <Link
            to="/contact"
            className="group flex items-center gap-4 border-b border-r border-border bg-ink px-6 py-7 text-white transition-colors duration-300 hover:bg-graphite"
          >
            <span className="label-mono text-white/50">12</span>
            <span className="font-display text-[15px] uppercase leading-snug tracking-[0.03em]">
              Discuss a specific scope
            </span>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="ml-auto transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}