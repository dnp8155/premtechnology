import React from "react";
import { cn } from "@/lib/utils";

export function CanadaFlag({ className }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn("h-6 w-9", className)}
      aria-label="Canada"
      role="img"
    >
      <rect width="60" height="40" fill="#fff" />
      <rect width="15" height="40" fill="#D52B1E" />
      <rect x="45" width="15" height="40" fill="#D52B1E" />
      <path
        d="M30 5 L31.8 10.5 L36 9 L34 13.5 L38 15.5 L34 18 L36 22 L31.5 20.5 L30 25 L28.5 20.5 L24 22 L26 18 L22 15.5 L26 13.5 L24 9 L28.2 10.5 Z"
        fill="#D52B1E"
      />
    </svg>
  );
}

export function UsaFlag({ className }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn("h-6 w-9", className)}
      aria-label="U.S.A."
      role="img"
    >
      <rect width="60" height="40" fill="#fff" />
      <rect width="60" height="5.7" fill="#B22234" />
      <rect y="11.4" width="60" height="5.7" fill="#B22234" />
      <rect y="22.8" width="60" height="5.7" fill="#B22234" />
      <rect y="34.2" width="60" height="5.7" fill="#B22234" />
      <rect width="26" height="22.8" fill="#3C3B6E" />
    </svg>
  );
}