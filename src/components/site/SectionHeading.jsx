import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  tone = "dark",
  as: Tag = "h2",
  size = "text-[clamp(2rem,4.6vw,3.6rem)]",
  className,
}) {
  return (
    <Tag className={cn("display", size, tone === "light" ? "text-white" : "text-ink", className)}>
      {children}
    </Tag>
  );
}