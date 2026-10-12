import React, { useState } from "react";
import AreaCarousel from "@/components/home/AreaCarousel";
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
    slides: [IMG.tf01Towers, IMG.tf02Lattice, IMG.tf03Girders, IMG.tf04Power, IMG.tf05Analysis, IMG.tf06LoadCalc, IMG.tf07Review, IMG.tf08Cert],
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
    slides: [IMG.tw01Shoring, IMG.tw02Formwork, IMG.tw03Falsework, IMG.tw04Scaffolding, IMG.tw05Excavation, IMG.tw06TempStructures, IMG.tw07ConstEng, IMG.tw08Inspection],
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
    slides: [IMG.hc01Lrt, IMG.hc02Metro, IMG.hc03Tunnels, IMG.hc04Bridges, IMG.hc05Overpasses, IMG.hc06HeavyCivil, IMG.hc07Water, IMG.hc08Wastewater],
    image: IMG.expertiseHeavyCivil,
    alt: "Concrete overpass bridge under construction with falsework support",
  },
];

function AreaRow({ area, alternate }) {
  const [active, setActive] = useState(0);
  return (
    <article className="border-t border-border py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1"
          )}
        >
          <AreaCarousel area={area} active={active} setActive={setActive} />
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
            <h3 className="display t-h2 text-ink">{area.title}</h3>
          </div>
          <p className="t-body mt-5 max-w-xl leading-relaxed text-steel">{area.summary}</p>

          <ul className="mt-9 grid grid-cols-1 border-t border-border sm:grid-cols-2 sm:gap-x-8">
            {area.items.map((item, index) => (
              <li key={item} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className="flex w-full items-baseline gap-4 py-3 text-left"
                >
                  <span className={cn("label-mono transition-colors", active === index ? "text-brand" : "text-steel")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("t-body transition-colors", active === index ? "text-ink" : "text-steel")}>
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "ml-auto h-px self-center transition-all duration-500",
                      active === index ? "w-8 bg-brand" : "w-0"
                    )}
                  />
                </button>
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
            <h2 className="display t-h1 mt-7 text-ink">Our core expertise.</h2>
          </div>
          <p className="t-body max-w-sm leading-relaxed text-steel lg:text-right">
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