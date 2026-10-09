import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Youtube, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";
import { Mark } from "@/components/site/Wordmark";
import InfrastructureLineArt from "./InfrastructureLineArt";

const FOOTER_NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Expertise", path: "/expertise" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const FOOTER_SERVICES = [
  { label: "Transmission & Power Structures", path: "/services#transmission" },
  { label: "Temporary & Construction Structures", path: "/services#temporary" },
  { label: "Heavy Civil & Infrastructure", path: "/services#civil" },
  { label: "Water & Wastewater", path: "/services#civil" },
  { label: "Technical Review", path: "/services#supporting" },
  { label: "Construction Engineering", path: "/services#supporting" },
];

const FOOTER_SUPPORT = [
  "General Contractors",
  "EPC Companies",
  "Utilities",
  "Engineering Firms",
  "Infrastructure Owners",
  "Municipal / Public Sector",
  "Fabricators",
  "Developers",
];

const headingClass = "font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-brand";
const linkClass = "t-small text-steel transition-colors hover:text-ink";

export default function FooterColumns() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Line art bottom-left */}
      <InfrastructureLineArt className="pointer-events-none absolute -bottom-1 left-0 h-28 w-[440px] text-ink/[0.07]" />

      <div className="shell relative py-16 lg:py-20">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {/* Column 1: Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="inline-block">
                <div className="flex items-center gap-2.5">
                  <Mark className="h-6 w-6 text-brand" />
                  <span className="display text-2xl font-bold leading-none text-ink">PREM</span>
                </div>
                <p className="label-mono mt-2 pl-[34px] text-steel">Technology Inc.</p>
              </Link>
              <div className="mt-4 h-px w-12 bg-brand" aria-hidden="true" />
              <p className="t-body mt-5 leading-relaxed text-steel">
                Specialized structural engineering for complex infrastructure and construction
                projects across Canada and the USA.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                <span className="label-mono text-steel/70">Transmission</span>
                <span className="text-steel/30">|</span>
                <span className="label-mono text-steel/70">Temporary Works</span>
                <span className="text-steel/30">|</span>
                <span className="label-mono text-steel/70">Heavy Civil</span>
                <span className="text-steel/30">|</span>
                <span className="label-mono text-steel/70">Infrastructure</span>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className={headingClass}>Navigation</h3>
              <ul className="mt-5 space-y-3">
                {FOOTER_NAV.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className={headingClass}>Our Services</h3>
              <ul className="mt-5 space-y-3">
                {FOOTER_SERVICES.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Who We Support */}
            <div>
              <h3 className={headingClass}>Who We Support</h3>
              <ul className="mt-5 space-y-3">
                {FOOTER_SUPPORT.map((item) => (
                  <li key={item}>
                    <Link to="/about" className={linkClass}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Stay Connected */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className={headingClass}>Stay Connected</h3>
              <p className="t-small mt-5 leading-relaxed text-steel">
                Get engineering insights, project updates and industry news.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-5">
                <div className="flex items-center border border-ink/20 bg-white">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent px-3.5 py-3 text-[14px] text-ink placeholder:text-steel/55 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex items-center border-l border-ink/15 px-3.5 py-3 text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </form>
              <div className="mt-5 flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand"
                  aria-hidden="true"
                >
                  <Linkedin size={16} />
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand"
                  aria-hidden="true"
                >
                  <Youtube size={16} />
                </span>
                <Link
                  to="/contact"
                  className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right image panel */}
          <div
            className="relative hidden w-44 shrink-0 overflow-hidden self-stretch xl:block"
            style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src={IMG.steelDetail}
              alt="Close-up of structural steel connection detail"
              fittingType="fill"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/35" aria-hidden="true" />
            <div className="absolute bottom-6 right-5 space-y-1.5 text-right">
              <p className="label-mono text-white/85">People</p>
              <p className="label-mono text-white/85">Engineering</p>
              <p className="label-mono text-white/85">Infrastructure</p>
              <p className="label-mono text-white/85">Communities</p>
              <p className="label-mono mt-3 text-white">For a stronger tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}