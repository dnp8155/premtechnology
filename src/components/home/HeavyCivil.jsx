import React, { useState, useEffect } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { IMG } from "@/lib/images";

const ITEMS = [
  { num: "01", label: "LRT", img: IMG.hc01Lrt, alt: "Elevated light rail transit guideway under construction" },
  { num: "02", label: "Metro", img: IMG.hc02Metro, alt: "Metro subway station under construction" },
  { num: "03", label: "Tunnels", img: IMG.hc03Tunnels, alt: "Tunnel boring and construction" },
  { num: "04", label: "Bridges", img: IMG.hc04Bridges, alt: "Concrete box girder bridge under construction" },
  { num: "05", label: "Overpasses", img: IMG.hc05Overpasses, alt: "Highway overpass interchange under construction" },
  { num: "06", label: "Heavy civil works", img: IMG.hc06HeavyCivil, alt: "Heavy civil construction site with earthworks" },
  { num: "07", label: "Water treatment", img: IMG.hc07Water, alt: "Water treatment plant under construction" },
  { num: "08", label: "Wastewater infrastructure", img: IMG.hc08Wastewater, alt: "Wastewater treatment facility under construction" },
];

export default function HeavyCivil() {
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
                <div
                  key={item.num}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fittingType="fill"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                </div>
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
              <span className="label-mono text-brand">03</span>
              <span className="h-px w-8 bg-border" aria-hidden="true" />
              <span className="label-text text-steel">Heavy Civil &amp; Infrastructure</span>
            </div>
            <h2 className="display t-h1 mt-7 text-ink">
              Engineering for
              <br />
              major infrastructure.
            </h2>
            <p className="t-body mt-7 max-w-md leading-relaxed text-steel">
              Structural engineering support for major public and private infrastructure, coordinated with the
              demands of large construction environments.
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