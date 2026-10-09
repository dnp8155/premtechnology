import React from "react";
import { Phone, Mail } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { CanadaFlag, UsaFlag } from "@/components/site/Flags";
import { SERVICE_CARD, CONTACT_INFO } from "@/lib/content";

export default function ServicesCard() {
  return (
    <section className="border-t border-b border-border bg-background">
      <div className="shell py-16 lg:py-24">
        {/* Header + flags */}
        <Reveal className="text-center">
          <h2 className="display t-h1 text-ink">Prem Technology Inc.</h2>

          <div className="mt-8 flex items-center justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center gap-2">
              <span className="label-mono text-brand">P. Eng.</span>
              <CanadaFlag className="h-7 w-10" />
              <span className="label-mono text-steel">Canada</span>
            </div>
            <span className="h-16 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col items-center gap-2">
              <span className="label-mono text-brand">P.E.</span>
              <UsaFlag className="h-7 w-10" />
              <span className="label-mono text-steel">U.S.A.</span>
            </div>
          </div>

          <p className="mx-auto mt-9 max-w-3xl text-[17px] leading-relaxed text-steel">
            <span className="font-display font-semibold text-ink">Structural Engineers for:</span>{" "}
            Transmission Towers, Lattice Girders, Shoring, Forming, Scaffolding, Concrete and Steel
            Structures
          </p>
        </Reveal>

        {/* Scale highlight */}
        <Reveal delay={0.08} className="mt-10">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            <span className="label-mono text-center text-brand">
              From small-scale installations to major infrastructure — engineered at every scale
            </span>
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Two columns of services */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h3 className="label-mono border-b-2 border-brand bg-ink px-5 py-3 text-white">
                Specializations & Services
              </h3>
              <ul className="mt-6 space-y-4">
                {SERVICE_CARD.specializations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                    <span className="text-[15px] leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3 className="label-mono border-b-2 border-brand bg-ink px-5 py-3 text-white">
                Engineering & Technical Services
              </h3>
              <ul className="mt-6 space-y-4">
                {SERVICE_CARD.technicalServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                    <span className="text-[15px] leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Highlight bar */}
        <Reveal className="mt-12">
          <div className="bg-ink px-6 py-5 text-center">
            <span className="font-display text-[16px] font-semibold uppercase tracking-[0.04em] text-white">
              Material Sourcing & Procurement Solutions
            </span>
          </div>
        </Reveal>

        {/* Contact row */}
        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-3 text-ink transition-colors hover:text-brand"
            >
              <Phone size={18} className="text-brand" aria-hidden="true" />
              <span className="font-display text-[16px]">{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-ink transition-colors hover:text-brand"
            >
              <Mail size={18} className="text-brand" aria-hidden="true" />
              <span className="font-display text-[16px]">{CONTACT_INFO.email}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}