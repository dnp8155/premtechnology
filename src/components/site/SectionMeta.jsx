import React from "react";
import { cn } from "@/lib/utils";

export default function SectionMeta({ index, children, tone = "dark", className }) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "label-mono flex items-center gap-3",
        light ? "text-white/55" : "text-steel",
        className
      )}
    >
      {index ? <span>{index}</span> : null}
      <span aria-hidden="true" className={cn("h-px w-8", light ? "bg-white/25" : "bg-steel/40")} />
      <span>{children}</span>
    </div>
  );
}