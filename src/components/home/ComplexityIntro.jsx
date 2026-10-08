import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { IMG } from "@/lib/images";

const SPECS = [
  ["Sectors", "Transmission & power · temporary & construction · heavy civil"],
  ["Markets", "Canada and the United States"],
  ["Discipline", "Structural engineering and construction engineering"],
  ["Interface", "Contractors, utilities, engineering teams, project owners"],
];

export default function ComplexityIntro() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="shell relative py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <SectionMeta index="01">Practice</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2.2rem,5.4vw,4.2rem)] text-ink">
              Built for
              <br />
              complexity.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <p className="text-[17px] leading-relaxed text-ink">
              Prem Technology Inc. provides specialized structural engineering support for projects where
              technical precision, constructability and reliability matter.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-steel">
              We work across transmission and power structures, temporary and construction structures, and
              heavy civil infrastructure—supporting contractors, utilities, engineering teams and project
              owners through demanding stages of design, review and construction.
            </p>

            <dl className="mt-11 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {SPECS.map(([term, detail]) => (
                <div key={term} className="border-t border-border pt-4">
                  <dt className="label-mono text-steel">{term}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink">{detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="group relative aspect-[4/5] overflow-hidden">
              <Image
                src={IMG.steelDetail}
                alt="Bolted steel lattice connection detail on a transmission structure"
                fittingType="fill"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-between gap-10 lg:col-span-6 lg:col-start-7">
            <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
              Complex projects are resolved in the details — load path, geometry, sequence and tolerance.
              Our work sits at exactly that level.
            </p>
            <ul className="border-t border-border">
              {[
                "Structural performance under demanding loading conditions",
                "Constructability assessed against real site conditions",
                "Documentation prepared for review, fabrication and construction",
              ].map((item, index) => (
                <li key={item} className="flex items-baseline gap-5 border-b border-border py-5">
                  <span className="label-mono text-steel/70">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] leading-relaxed text-steel">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}