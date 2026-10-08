import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionMeta from "./SectionMeta";

export default function CtaBand({
  eyebrow = "Next Stage",
  title = "Let's engineer the next stage.",
  copy = "Have a complex structural or infrastructure requirement? Tell us about your project and our engineering team will review the opportunity.",
  primary = { label: "Discuss Your Project", to: "/contact" },
  secondary = { label: "Explore Our Expertise", to: "/expertise" },
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <div className="tech-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="shell relative grid grid-cols-1 gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-7">
          <SectionMeta index="—">{eyebrow}</SectionMeta>
          <h2 className="display mt-7 text-[clamp(2.2rem,5.6vw,4.6rem)] text-ink">{title}</h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:pt-6" delay={0.1}>
          <p className="max-w-md text-[16px] leading-relaxed text-steel">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={primary.to} className="btn-solid-dark">
              {primary.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            {secondary ? (
              <Link to={secondary.to} className="btn-outline-dark">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}