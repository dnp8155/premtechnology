import React, { useEffect, useState } from "react";
import { Image } from "@/components/ui/image";

export default function AreaCarousel({ area, active, setActive }) {
  const [paused, setPaused] = useState(false);
  const count = area.items.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % count), 3000);
    return () => clearInterval(id);
  }, [paused, count, setActive]);

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {area.slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={area.items[i]}
            fittingType="fill"
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-5 pt-16">
        <span className="label-mono text-white">{String(active + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-white/40" aria-hidden="true" />
        <span className="label-text text-white/90">{area.items[active]}</span>
      </div>
    </div>
  );
}