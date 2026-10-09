import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/contact"
      aria-label="Discuss your project"
      className={cn(
        "group fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 border border-ink bg-ink px-5 py-3.5 font-mono text-[12px] leading-none tracking-[0.05em] text-white shadow-[0_10px_36px_-14px_rgba(0,0,0,0.55)] transition-all duration-500 hover:border-brand hover:bg-brand",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      )}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 bg-brand transition-colors duration-300 group-hover:bg-white"
      />
      Discuss Your Project
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="text-white/55 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
      />
    </Link>
  );
}