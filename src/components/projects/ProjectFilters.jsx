import React from "react";
import { cn } from "@/lib/utils";

const FILTERS = [
  { label: "All Applications", value: "all" },
  { label: "Transmission", value: "Transmission & Power Structures" },
  { label: "Temporary Works", value: "Temporary & Construction Structures" },
  { label: "Heavy Civil", value: "Heavy Civil & Infrastructure" },
];

export default function ProjectFilters({ active, onChange, count }) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={cn(
              "label-mono border px-4 py-2.5 transition-all duration-300",
              active === f.value
                ? "border-ink bg-ink text-white"
                : "border-border text-steel hover:border-ink/40 hover:text-ink"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <span className="label-mono shrink-0 text-steel/60">
        {count} {count === 1 ? "application" : "applications"}
      </span>
    </div>
  );
}