import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import PageHero from "@/components/site/PageHero";
import SectionMeta from "@/components/site/SectionMeta";
import CtaBand from "@/components/site/CtaBand";
import { IMG } from "@/lib/images";

const PILLARS = [
  {
    index: "01",
    title: "Our Approach",
    copy: "We work from the constraints outward — loads, geometry, sequence and site conditions — so the engineering responds to the project rather than to a template.",
  },
  {
    index: "02",
    title: "Our Expertise",
    copy: "Structural engineering, temporary works, transmission structures and heavy civil infrastructure, delivered as one coordinated technical scope.",
  },
  {
    index: "03",
    title: "Our Markets",
    copy: "Prem Technology Inc. supports projects across Canada and the United States, working alongside contractors, utilities, engineering teams and infrastructure owners.",
  },
  {
    index: "04",
    title: "Our Commitment",
    copy: "Clear engineering information, issued in a form that can be reviewed, fabricated, coordinated and built from.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        index="About"
        eyebrow="Prem Technology Inc."
        title={
          <>
            Engineering
            <br />
            built around
            <br />
            precision.
          </>
        }
        copy="A structural engineering practice focused on complex infrastructure and demanding construction — transmission structures, temporary works and heavy civil."
        image={IMG.documentation}
        imageAlt="Structural engineering drawings, calculation sheets and a bolted steel connection model"
        tags={["Structural Engineering", "Temporary Works", "Transmission Structures", "Heavy Civil"]}
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionMeta index="01">Positioning</SectionMeta>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
              <p className="font-display text-[clamp(1.5rem,3.1vw,2.4rem)] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
                Specialized structural engineering for complex infrastructure and construction.
              </p>
              <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-steel">
                Prem Technology Inc. is an engineering consultancy providing structural engineering support where
                technical precision, constructability and reliability matter. Our work spans transmission and
                power structures, temporary and construction structures, and heavy civil infrastructure.
              </p>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-steel">
                We support contractors, utilities, engineering teams and project owners through the demanding
                stages of a project — design development, technical review, construction planning and execution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="shell py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.index} delay={index * 0.06} className="border-t border-border pt-8">
                <span className="label-mono text-brand">{pillar.index}</span>
                <h2 className="display mt-5 text-[clamp(1.4rem,2.6vw,2rem)] text-ink">{pillar.title}</h2>
                <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-steel">{pillar.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src={IMG.constructionWide}
          alt="Heavy civil construction site with steel falsework and formwork erected"
          fittingType="fill"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/45" aria-hidden="true" />
        <div className="shell relative py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <SectionMeta index="02" tone="light">
              Working Practice
            </SectionMeta>
            <p className="mt-7 font-display text-[clamp(1.4rem,3vw,2.3rem)] font-medium leading-[1.28] tracking-[-0.02em] text-white">
              Engineering that holds up under review — technically defensible, constructable, and documented
              clearly enough for the people building the work.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Company"
        title="Let's engineer the next stage."
        copy="Company information, references and engagement details are provided directly on request."
      />
    </>
  );
}