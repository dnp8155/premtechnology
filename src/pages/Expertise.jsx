import React from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import LatticeDiagram from "@/components/site/LatticeDiagram";
import ShoringDiagram from "@/components/site/ShoringDiagram";
import CtaBand from "@/components/site/CtaBand";
import { EXPERTISE_PAGE } from "@/lib/content";

const DELIVERABLES = [
  "Structural analysis",
  "Design calculations",
  "Structural drawings",
  "Review comments",
  "Technical reports",
  "Inspection records",
  "Construction-phase documentation",
  "Engineering coordination",
];

export default function Expertise() {
  return (
    <>
      <PageHero
        index="Expertise"
        eyebrow="Technical Expertise"
        title={
          <>
            Engineering
            <br />
            applied where
            <br />
            it matters.
          </>
        }
        copy="Structural engineering, temporary works and infrastructure expertise applied to structurally complex and technically demanding work."
        tags={[
          "Structural Engineering",
          "Temporary Works",
          "Transmission Structures",
          "Construction Engineering",
        ]}
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <SectionMeta index="01">Applied Expertise</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2rem,4.6vw,3.4rem)] text-ink">
              Nine areas of engineering practice.
            </h2>
          </Reveal>

          <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE_PAGE.map((area) => (
              <Reveal
                key={area.index}
                className="border-b border-r border-border p-7 transition-colors duration-300 hover:bg-secondary/50"
              >
                <span className="label-mono text-brand">{area.index}</span>
                <h3 className="display mt-5 text-[1.2rem] text-ink">{area.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel">{area.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="shell py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <SectionMeta index="02">Technical Language</SectionMeta>
              <h2 className="display mt-7 text-[clamp(1.8rem,3.6vw,2.8rem)] text-ink">
                Structural behaviour, drawn and documented.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-steel">
                Transmission and temporary structures are engineered through load path, panel geometry, support
                conditions and construction sequence — not by catalogue selection.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7">
              <figure className="border border-border bg-background p-6 lg:p-8">
                <figcaption className="label-mono mb-7 flex items-center justify-between gap-4 text-steel">
                  <span>Fig. 01 — Lattice Structure</span>
                  <span className="text-steel/60">Elevation</span>
                </figcaption>
                <LatticeDiagram className="h-auto w-full text-ink/80" />
              </figure>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <figure className="border border-border bg-background p-6 lg:p-8">
                <figcaption className="label-mono mb-7 flex items-center justify-between gap-4 text-steel">
                  <span>Fig. 02 — Temporary Works</span>
                  <span className="text-steel/60">Section</span>
                </figcaption>
                <ShoringDiagram className="h-auto w-full text-ink/80" />
              </figure>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-5 lg:pl-6">
              <SectionMeta index="03">Documentation</SectionMeta>
              <h2 className="display mt-7 text-[clamp(1.6rem,3vw,2.2rem)] text-ink">
                Engineering information that can be used.
              </h2>
              <ul className="mt-8 border-t border-border">
                {DELIVERABLES.map((item, index) => (
                  <li key={item} className="flex items-baseline gap-5 border-b border-border py-3.5">
                    <span className="label-mono text-steel/60">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Scope"
        title="Bring us the technically difficult part."
        copy="Complex geometry, temporary conditions, review requirements — send the details and we will assess how the engineering can be approached."
        secondary={{ label: "View Applications", to: "/projects" }}
      />
    </>
  );
}