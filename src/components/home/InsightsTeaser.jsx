import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { INSIGHTS } from "@/lib/content";

export default function InsightsTeaser() {
  const featured = INSIGHTS.slice(0, 3);

  return (
    <section className="border-b border-border bg-background">
      <div className="shell py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <SectionMeta index="Insights">Engineering Notes</SectionMeta>
            <h2 className="display mt-6 text-[clamp(1.6rem,3vw,2.3rem)] text-ink">
              Field-tested
              <br />
              engineering
              <br />
              perspectives.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-steel">
              Technical notes on structural engineering, temporary works and construction-phase
              practice — drawn from the conditions we work with.
            </p>
            <Link to="/insights" className="btn-outline-dark mt-8">
              All Insights
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-border">
              {featured.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.06}>
                  <Link
                    to="/insights"
                    className="group flex flex-col gap-3 border-b border-border py-7 transition-colors hover:bg-secondary/30 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="label-mono shrink-0 text-brand sm:w-16">{item.index}</span>
                    <div className="flex-1">
                      <span className="label-mono text-steel/60">{item.category}</span>
                      <h3 className="display mt-2 text-[clamp(1.15rem,1.8vw,1.5rem)] leading-tight text-ink transition-colors group-hover:text-brand">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-steel line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.75}
                      className="shrink-0 text-steel/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink sm:mt-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}