import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";
import BlueprintOverlay from "./BlueprintOverlay";

const SERVICES = ["Transmission Structures", "Temporary Works", "Heavy Civil Infrastructure"];
const FLOAT_LABELS = ["Bridges", "Viaducts", "Overpasses", "Structures"];

export default function HeroStage() {
  return (
    <div className="relative bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: content */}
        <div className="px-6 pb-32 pt-14 lg:col-span-7 lg:px-14 lg:pb-44 lg:pt-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="label-mono text-steel">Structural Engineering</span>
          </div>

          <h1 className="display mt-6 uppercase text-ink text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98]">
            Engineering
            <br />
            <span className="text-brand">for complex</span>
            <br />
            infrastructure.
          </h1>

          <p className="t-body mt-8 max-w-xl leading-relaxed text-steel">
            Specialized structural engineering for transmission structures, temporary works and
            heavy civil infrastructure across Canada and the USA.
          </p>
          <span className="mt-6 block h-px w-16 bg-brand" aria-hidden="true" />

          <ul className="mt-10 space-y-3.5">
            {SERVICES.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 bg-brand" aria-hidden="true" />
                <span className="label-mono text-ink">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[380px] lg:col-span-5">
          <Image
            src={IMG.appBridge}
            alt="Major bridge under construction with concrete piers, cranes and temporary steel support structures"
            fittingType="fill"
            loading="eager"
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/50"
            aria-hidden="true"
          />
          <BlueprintOverlay className="absolute inset-0" />

          {/* floating labels */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 space-y-3">
            {FLOAT_LABELS.map((l) => (
              <div key={l} className="flex items-center justify-end gap-3">
                <span className="h-px w-6 bg-white/40" aria-hidden="true" />
                <span className="label-mono text-white/80">{l}</span>
              </div>
            ))}
          </div>

          {/* neutral technical annotation */}
          <span className="label-mono absolute left-5 top-8 text-white/55">
            Section A-A · Typ. Elevation
          </span>
        </div>
      </div>

      {/* CTA panel */}
      <Link
        to="/contact"
        className="absolute bottom-0 left-0 right-0 block bg-brand"
        style={{ clipPath: "polygon(0 0, 72% 0, 100% 100%, 0 100%)" }}
        aria-label="Discuss your project"
      >
        <div className="shell relative flex h-[88px] items-center">
          <span className="font-display text-[19px] font-semibold uppercase tracking-[0.04em] text-white sm:text-[22px]">
            Discuss Your Project
          </span>
          <span className="absolute right-[19%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white">
            <ArrowUpRight size={22} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </div>
  );
}