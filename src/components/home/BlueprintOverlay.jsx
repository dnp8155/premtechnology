import React from "react";
import { cn } from "@/lib/utils";

export default function BlueprintOverlay({ className }) {
  return (
    <svg
      viewBox="0 0 400 560"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      className={cn("h-full w-full text-white/20", className)}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* horizontal grid */}
      <path d="M0 120 H400 M0 240 H400 M0 360 H400 M0 480 H400" />
      {/* vertical grid */}
      <path d="M100 0 V560 M260 0 V560 M340 0 V560" />
      {/* crosshair */}
      <circle cx="200" cy="280" r="14" />
      <path d="M200 260 V300 M180 280 H220" />
      {/* measurement ticks */}
      <path d="M40 200 V210 M40 205 H52" />
      <path d="M360 400 V390 M360 395 H348" />
      {/* small truss sketch */}
      <path d="M280 440 L300 470 L320 440 M300 470 L300 440 M280 440 L320 440 M290 455 L310 455" />
    </svg>
  );
}