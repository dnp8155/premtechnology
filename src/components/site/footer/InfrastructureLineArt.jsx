import React from "react";
import { cn } from "@/lib/utils";

const TOWER_X = [100, 300, 500, 700, 900, 1100];

function towerPaths(cx) {
  return (
    `M${cx - 18} 115 L${cx - 5} 18 M${cx + 18} 115 L${cx + 5} 18 M${cx - 5} 18 L${cx + 5} 18` +
    ` M${cx - 22} 40 L${cx + 22} 40 M${cx - 22} 36 L${cx - 22} 44 M${cx + 22} 36 L${cx + 22} 44` +
    ` M${cx - 26} 62 L${cx + 26} 62 M${cx - 26} 58 L${cx - 26} 66 M${cx + 26} 58 L${cx + 26} 66` +
    ` M${cx - 8} 40 L${cx + 8} 62 M${cx + 8} 40 L${cx - 8} 62` +
    ` M${cx - 11} 62 L${cx + 11} 90 M${cx + 11} 62 L${cx - 11} 90` +
    ` M${cx - 15} 90 L${cx + 15} 115 M${cx + 15} 90 L${cx - 15} 115`
  );
}

function powerLinePaths() {
  const lines = [];
  for (let i = 0; i < TOWER_X.length - 1; i++) {
    const a = TOWER_X[i];
    const b = TOWER_X[i + 1];
    const mid = (a + b) / 2;
    lines.push(`M${a + 22} 40 Q${mid} 52 ${b - 22} 40`);
    lines.push(`M${a + 26} 62 Q${mid} 74 ${b - 26} 62`);
  }
  return lines.join(" ");
}

export default function InfrastructureLineArt({ className }) {
  return (
    <svg
      viewBox="0 0 1200 130"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d={TOWER_X.map(towerPaths).join(" ")} />
      <path d={powerLinePaths()} />
    </svg>
  );
}