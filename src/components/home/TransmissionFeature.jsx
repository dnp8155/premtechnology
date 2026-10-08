import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { IMG } from "@/lib/images";

const LABELS = [
  "Transmission Towers",
  "Lattice Structures",
  "Load Analysis",
  "Structural Review",
  "Engineering Documentation",
];

export default function TransmissionFeature() {
  return (
    <section className="relative overflow-hidden bg-graphite text-white">
      <div className="tech-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="shell relative py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <SectionMeta index="03" tone="light">
              Transmission &amp; Power Structures
            </SectionMeta>
            <h2 className="display mt-7 text-[clamp(2.1rem,5vw,4rem)] text-white">
              Structures that
              <br />
              carry the grid.
            </h2>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed text-white/65">
              Engineering support for transmission towers, lattice structures and power infrastructure where
              structural performance, loading conditions and constructability are critical.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <div className="group relative aspect-[3/2] overflow-hidden border border-white/10">
              <Image
                src={IMG.featureGrid}
                alt="Line of steel transmission lattice towers crossing a northern landscape at dusk"
                fittingType="fill"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 border-t border-white/15 lg:grid-cols-5">
          {LABELS.map((label) => (
            <p
              key={label}
              className="label-mono border-b border-white/10 py-6 pr-6 text-white/55 lg:border-b-0 lg:border-r lg:border-white/10 lg:last:border-r-0"
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}