import React from "react";
import { COMPANY } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Mark({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-[22px] w-[22px] shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1.4" y="1.4" width="21.2" height="21.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7.2 18.4V5.8h5.4a3.7 3.7 0 0 1 0 7.4H7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M16.6 18.4 12.2 13" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Wordmark({ tone = "dark", className }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Mark className={tone === "light" ? "text-white" : "text-ink"} />
      <span
        className={cn(
          "t-small font-display font-semibold leading-none tracking-[0.06em]",
          tone === "light" ? "text-white" : "text-ink"
        )}
      >
        {COMPANY.name}
      </span>
    </span>
  );
}