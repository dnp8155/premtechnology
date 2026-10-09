import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";
import Reveal from "@/components/site/Reveal";

export default function FooterCta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <div className="shell grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        {/* Left: text */}
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="label-mono text-brand">Let's Engineer Together</span>
          </div>
          <h2 className="display t-h1 mt-6 uppercase text-ink">
            Have a complex<br />engineering project?
          </h2>
          <p className="t-body mt-6 max-w-md leading-relaxed text-steel">
            Tell us about your project or engineering requirement. Our team will review the
            opportunity and discuss how we can support your goals.
          </p>
        </Reveal>

        {/* Middle: buttons */}
        <Reveal className="flex flex-col gap-4 lg:col-span-3 lg:pt-3" delay={0.08}>
          <Link to="/contact" className="btn-solid-dark w-full uppercase">
            Discuss Your Project
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link to="/services" className="btn-outline-dark w-full uppercase">
            Explore Our Services
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>

        {/* Right: image */}
        <Reveal className="relative lg:col-span-4" delay={0.16}>
          <div className="relative h-64 lg:h-full lg:min-h-[360px]">
            <Image
              src={IMG.appBridge}
              alt="Steel plate girder bridge span under construction over water"
              fittingType="fill"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-ink/45 via-ink/15 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute right-4 top-4 text-right">
              <span className="display text-5xl font-semibold leading-none text-white/45">01</span>
              <div className="mt-2.5 space-y-1">
                <p className="label-mono text-white/80">Structures</p>
                <p className="label-mono text-white/80">Infrastructure</p>
                <p className="label-mono text-white/80">Construction</p>
                <p className="label-mono text-white/80">Engineering</p>
              </div>
            </div>
            <p className="label-mono absolute bottom-4 right-4 text-white/85">
              Built for a stronger tomorrow
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}