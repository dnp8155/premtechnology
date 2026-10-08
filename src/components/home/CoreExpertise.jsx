import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

export const EXPERTISE_AREAS = [
  {
    index: "01",
    title: "Transmission & Power Structures",
    summary:
      "Engineering support for transmission towers, lattice girders and power infrastructure where structural performance, loading conditions and constructability are critical.",
    items: [
      "Transmission towers",
      "Lattice structures",
      "Lattice girders",
      "Power infrastructure",
      "Structural analysis",
      "Load calculations",
      "Engineering review",
      "Certification support",
    ],
    image: IMG.expertiseTransmission,
    alt: "Lower leg section and concrete foundation of a steel transmission tower",
  },
  {
    index: "02",
    title: "Temporary & Construction Structures",
    summary:
      "Engineering for the structures that make construction possible — designed around sequence, access, support conditions and the way the work is actually executed.",
    items: [
      "Shoring",
      "Formwork",
      "Falsework",
      "Scaffolding",
      "Excavation support",
      "Temporary structures",
      "Construction engineering",
      "Site inspection",
    ],
    image: IMG.expertiseTemporary,
    alt: "Deep excavation supported by steel soldier piles and ground anchors",
  },
  {
    index: "03",
    title: "Heavy Civil & Infrastructure",
    summary:
      "Structural engineering support for major public and private infrastructure, coordinated with the demands of large construction environments.",
    items: [
      "LRT",
      "Metro",
      "Tunnels",
      "Bridges",
      "Overpasses",
      "Heavy civil works",
      "Water treatment",
      "Wastewater infrastructure",
    ],
    image: IMG.expertiseHeavyCivil,
    alt: "Concrete overpass bridge under construction with falsework support",
  },
];

function AreaRow({ area, alternate }) {
  return (
    <article className="border-t border-border py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1"
          )}
        >
          <div className="group relative aspect-[4/5] overflow-hidden">
            <Image
              src={area.image}
              alt={area.alt}
              fittingType="fill"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7"
          )}
        >
          <div className="flex items-baseline gap-5">
            <span className="label-mono text-brand">{area.index}</span>
            <h3 className="display text-[clamp(1.5rem,3.1vw,2.4rem)] text-ink">{area.title}</h3>
          </div>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-steel">{area.summary}</p>

          <ul className="mt-9 grid grid-cols-1 border-t border-border sm:grid-cols-2 sm:gap-x-8">
            {area.items.map((item, index) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-border py-3">
                <span className="label-mono text-steel/60">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[15px] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}

export default function CoreExpertise() {
  return (
    <section className="bg-background">
      <div className="shell py-20 lg:py-24">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionMeta index="02">Core Expertise</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2.2rem,5.4vw,4.2rem)] text-ink">Our core expertise.</h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-steel lg:text-right">
            Three specialisms, delivered together where a project requires structural, temporary works and
            infrastructure engineering in one coordinated scope.
          </p>
        </Reveal>

        <div className="mt-14">
          {EXPERTISE_AREAS.map((area, index) => (
            <AreaRow key={area.index} area={area} alternate={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}