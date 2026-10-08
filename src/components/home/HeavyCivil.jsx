import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { IMG } from "@/lib/images";

const TAGS = ["LRT", "Metro", "Tunnels", "Bridges", "Overpasses", "Water", "Wastewater", "Heavy Civil"];

export default function HeavyCivil() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={IMG.featureCivilWide}
        alt="Elevated light rail guideway and bridge structure crossing an urban corridor at dawn"
        fittingType="fill"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35" aria-hidden="true" />

      <div className="shell relative py-24 lg:py-36">
        <Reveal className="max-w-3xl">
          <SectionMeta index="05" tone="light">
            Heavy Civil &amp; Infrastructure
          </SectionMeta>
          <h2 className="display mt-7 text-[clamp(2.1rem,5.6vw,4.4rem)] text-white">
            Engineering for
            <br />
            major infrastructure.
          </h2>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70 lg:text-[17px]">
            Supporting complex infrastructure projects with structural engineering expertise aligned with
            demanding construction environments.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4">
          {TAGS.map((tag) => (
            <p key={tag} className="label-mono border-b border-white/10 py-5 text-white/60">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}