import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import CtaBand from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";
import { INSIGHTS } from "@/lib/content";

const CATEGORIES = ["All", "Temporary Works", "Transmission", "Heavy Civil", "Construction"];

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All" ? INSIGHTS : INSIGHTS.filter((i) => i.category === filter);

  if (selected) {
    const item = INSIGHTS.find((i) => i.slug === selected);
    return (
      <>
        <article className="border-b border-border bg-background">
          <div className="shell py-16 lg:py-24">
            <button
              onClick={() => setSelected(null)}
              className="label-mono mb-10 inline-flex items-center gap-2 text-steel transition-colors hover:text-ink"
            >
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              Back to all insights
            </button>

            <Reveal className="max-w-3xl">
              <span className="label-mono text-brand">{item.category}</span>
              <h1 className="display mt-5 text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-ink">
                {item.title}
              </h1>
              <div className="mt-8 flex items-center gap-4 border-y border-border py-4">
                <span className="label-mono text-steel/60">{item.readTime}</span>
                <span className="label-mono text-steel/40">·</span>
                <span className="label-mono text-steel/60">Engineering Note</span>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-12 max-w-2xl">
              <p className="text-[18px] leading-relaxed text-steel">{item.excerpt}</p>
              {item.body.map((para, i) => (
                <p key={i} className="mt-6 text-[16px] leading-relaxed text-steel">
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </article>

        <CtaBand
          eyebrow="Discussion"
          title="Have a question on this?"
          copy="Engineering questions are welcome — reach out and we'll respond directly."
          secondary={{ label: "All Insights", to: "/insights" }}
        />
      </>
    );
  }

  return (
    <>
      <PageHero
        index="Insights"
        eyebrow="Engineering Notes"
        title={
          <>
            Field-tested
            <br />
            engineering
            <br />
            perspectives.
          </>
        }
        copy="Technical notes on structural engineering, temporary works, transmission structures and construction-phase practice — written from the conditions we work with."
        tags={["Temporary Works", "Transmission", "Heavy Civil", "Construction"]}
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionMeta index="Filter">Topics</SectionMeta>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
              <div className="flex flex-wrap gap-2 border-b border-border pb-8">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "label-mono border px-4 py-2.5 transition-all duration-300",
                      filter === cat
                        ? "border-ink bg-ink text-white"
                        : "border-border text-steel hover:border-ink/40 hover:text-ink"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-[14px] text-steel/60">
                {filtered.length} {filtered.length === 1 ? "note" : "notes"}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell pb-20 pt-4 lg:pb-28">
          <div className="border-t border-border">
            {filtered.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(item.slug)}
                  className="group flex w-full flex-col gap-3 border-b border-border py-8 text-left transition-colors hover:bg-secondary/30 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="label-mono shrink-0 text-brand sm:w-16">{item.index}</span>
                  <div className="flex-1">
                    <span className="label-mono text-steel/60">{item.category}</span>
                    <h2 className="display mt-2 text-[clamp(1.2rem,2vw,1.65rem)] leading-tight text-ink transition-colors group-hover:text-brand">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel line-clamp-2">
                      {item.excerpt}
                    </p>
                    <span className="label-mono mt-4 inline-block text-steel/50">{item.readTime}</span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.75}
                    className="shrink-0 text-steel/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink sm:mt-1"
                    aria-hidden="true"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Discussion"
        title="Engineering questions are welcome."
        copy="If a note here relates to a project you're working on, reach out — we're happy to discuss the specifics."
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}