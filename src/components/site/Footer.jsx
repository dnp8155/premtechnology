import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, NAV } from "@/lib/nav";
import { Mark } from "./Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-graphite text-white">
      <div className="tech-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-brand/60" aria-hidden="true" />

      <div className="shell relative py-16 lg:py-24">
        {/* Editorial brand statement */}
        <div className="border-b border-white/12 pb-12 lg:pb-16">
          <div className="flex items-center gap-3 text-white/55">
            <Mark className="h-5 w-5" />
            <span className="label-mono">{COMPANY.name}</span>
          </div>
          <h2 className="display t-hero mt-6 max-w-[16ch] text-white">
            Engineering for complex infrastructure.
          </h2>
          <p className="t-body mt-6 max-w-md leading-relaxed text-white/65">{COMPANY.tagline}</p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-4">
            <h3 className="label-mono text-white/45">Practice</h3>
            <p className="t-body mt-5 leading-relaxed text-white/70">
              Specialized structural engineering for heavy civil, transit, transmission and temporary
              works across North America.
            </p>
            <p className="label-text mt-6 text-white/50">{COMPANY.markets}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h3 className="label-mono text-white/45">Navigation</h3>
            <ul className="mt-5 space-y-3.5">
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="t-body text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5">
            <h3 className="label-mono text-white/45">Engagements</h3>
            <p className="t-body mt-5 max-w-sm leading-relaxed text-white/70">
              Have a technically demanding structural or infrastructure requirement? Send us the scope
              and our engineering team will review the opportunity.
            </p>
            <Link to="/contact" className="btn-outline-light mt-7">
              Discuss Your Project
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Oversized architectural wordmark */}
        <div className="relative overflow-hidden border-t border-white/12 pt-10" aria-hidden="true">
          <h2
            className="display select-none whitespace-nowrap font-semibold leading-[0.78] tracking-[-0.04em] text-white/[0.07]"
            style={{ fontSize: "clamp(3rem, 13.5vw, 13rem)" }}
          >
            PREM TECHNOLOGY
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-text text-white/50">
            © {year} {COMPANY.legal}
          </p>
          <div className="flex items-center gap-7">
            <Link to="/privacy" className="label-mono text-white/50 transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="label-mono text-white/50 transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}