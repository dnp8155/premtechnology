import React from "react";
import { cn } from "@/lib/utils";

export default function InfrastructureLineArt({ className }) {
  return (
    <svg
      viewBox="0 0 440 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Tower 1 */}
      <path d="M42 115 L55 18 M78 115 L65 18 M55 18 L65 18" />
      <path d="M38 40 L82 40 M38 36 L38 44 M82 36 L82 44" />
      <path d="M34 62 L86 62 M34 58 L34 66 M86 58 L86 66" />
      <path d="M52 40 L68 62 M68 40 L52 62 M49 62 L71 90 M71 62 L49 90 M45 90 L75 115 M75 90 L45 115" />
      {/* Tower 2 */}
      <path d="M202 115 L215 18 M238 115 L225 18 M215 18 L225 18" />
      <path d="M198 40 L242 40 M198 36 L198 44 M242 36 L242 44" />
      <path d="M194 62 L246 62 M194 58 L194 66 M246 58 L246 66" />
      <path d="M212 40 L228 62 M228 40 L212 62 M209 62 L231 90 M231 62 L209 90 M205 90 L235 115 M235 90 L205 115" />
      {/* Tower 3 */}
      <path d="M362 115 L375 18 M398 115 L385 18 M375 18 L385 18" />
      <path d="M358 40 L402 40 M358 36 L358 44 M402 36 L402 44" />
      <path d="M354 62 L406 62 M354 58 L354 66 M406 58 L406 66" />
      <path d="M372 40 L388 62 M388 40 L372 62 M369 62 L391 90 M391 62 L369 90 M365 90 L395 115 M395 90 L365 115" />
      {/* Power lines */}
      <path d="M82 40 Q140 52 198 40 M242 40 Q300 52 358 40" />
      <path d="M86 62 Q140 74 194 62 M246 62 Q300 74 354 62" />
    </svg>
  );
}