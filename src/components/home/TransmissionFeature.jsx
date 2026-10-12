import React, { useState, useEffect } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { IMG } from "@/lib/images";

const ITEMS = [
  { num: "01", label: "Transmission towers", img: IMG.tf01Towers, alt: "Steel lattice transmission tower under construction" },
  { num: "02", label: "Lattice structures", img: IMG.tf02Lattice, alt: "Steel lattice structure bolted members and gusset plates" },
  { num: "03", label: "Lattice girders", img: IMG.tf03Girders, alt: "Steel lattice girder span with diagonal members" },
  { num: "04", label: "Power infrastructure", img: IMG.tf04Power, alt: "Electrical power substation with steel structures" },
  { num: "05", label: "Structural analysis", img: IMG.tf05Analysis, alt: "Finite element analysis model on a computer monitor" },
  { num: "06", label: "Load calculations", img: IMG.tf06LoadCalc, alt: "Hand-written structural load calculations on grid paper" },
  { num: "07", label: "Engineering review", img: IMG.tf07Review, alt: "Structural drawings marked up with review comments" },
  { num: "08", label: "Certification support", img: IMG.tf08Cert, alt: "Engineering certification document with professional seal" },
];

export default function TransmissionFeature() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = ITEMS[active];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % ITEMS.length), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="shell relative py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — carousel image */}
          <Reveal className="lg:col-span-5">
            <div
              className="relative aspect-[3/4] overflow-hidden border border-border"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {ITEMS.map((item, i) => (
                <Image
                  key={item.num}
                  src={item.img}
                  alt={item.alt}
                  fittingType="fill"
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="label-mono text-brand">{current.num}</span>
                <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
                <span className="label-text text-ink/80">{current.label}</span>
              </div>
            </div>
          </Reveal>

          {/* Right — heading + 8-item grid */}
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-center gap-3">
              <span className="label-mono text-brand">01</span>
              <span className="h-px w-8 bg-border" aria-hidden="true" />
              <span className="label-text text-steel">Transmission &amp; Power Structures</span>
            </div>
            <h2 className="display t-h1 mt-7 text-ink">
              Structures that
              <br />
              carry the grid.
            </h2>
            <p className="t-body mt-7 max-w-md leading-relaxed text-steel">
              Engineering support for transmission towers, lattice girders and power infrastructure where structural
              performance, loading conditions and constructability are critical.
            </p>

            <div className="mt-12 grid grid-cols-2 border-t border-border">
              {ITEMS.map((item, i) => (
                <button
                  key={item.num}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 border-b border-border py-5 pr-4 text-left transition-colors duration-300 ${
                    i % 2 === 0 ? "border-r border-border" : ""
                  } ${active === i ? "text-ink" : "text-steel hover:text-ink"}`}
                >
                  <span
                    className={`label-mono transition-colors duration-300 ${active === i ? "text-brand" : "text-steel/60"}`}
                  >
                    {item.num}
                  </span>
                  <span className="label-text">{item.label}</span>
                  <span
                    className={`ml-auto h-px transition-all duration-500 ease-out ${
                      active === i ? "w-8 bg-brand" : "w-0 bg-border"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}