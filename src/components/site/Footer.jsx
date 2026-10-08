import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, NAV } from "@/lib/nav";
import { Mark } from "./Wordmark";

export default function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="shell py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 text-white" aria-label="Prem Technology Inc. — home">
              <Mark className="h-6 w-6" />
              <span className="t-small font-display font-semibold leading-none tracking-[0.06em]">
                {COMPANY.name}
              </span>
            </Link>
            <p className="t-body mt-7 max-w-sm leading-relaxed text-white/70">{COMPANY.tagline}</p>
            <p className="label-text mt-7 text-white/55">{COMPANY.markets}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="label-mono text-white/55">Navigation</h2>
            <ul className="mt-6 space-y-3">
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

          <div className="lg:col-span-4">
            <h2 className="label-mono text-white/55">Engagements</h2>
            <p className="t-body mt-6 max-w-sm leading-relaxed text-white/70">
              Have a technically demanding structural or infrastructure requirement? Send us the scope and our
              engineering team will review the opportunity.
            </p>
            <Link to="/contact" className="btn-outline-light mt-7">
              Discuss Your Project
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-text text-white/55">
            © {new Date().getFullYear()} {COMPANY.legal}
          </p>
          <div className="flex items-center gap-7">
            <Link to="/privacy" className="label-mono text-white/55 transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="label-mono text-white/55 transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}