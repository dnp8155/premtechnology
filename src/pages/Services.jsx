import React from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import ServiceGroup from "@/components/services/ServiceGroup";
import CtaBand from "@/components/site/CtaBand";
import { SERVICE_GROUPS } from "@/lib/content";
import { IMG } from "@/lib/images";
import CapabilitiesOverview from "@/components/services/CapabilitiesOverview";

const INDEX = [
  ["01", "Transmission & Power Structures"],
  ["02", "Temporary & Construction Structures"],
  ["03", "Heavy Civil & Infrastructure"],
  ["04", "Supporting Engineering Services"],
];

export default function Services() {
  return (
    <>
      <PageHero
        index="Services"
        eyebrow="Engineering Services"
        title={
          <>
            Technical
            <br />
            engineering
            <br />
            services.
          </>
        }
        copy="Four service groups covering the structural engineering, temporary works and infrastructure scopes our clients require."
        image={IMG.constructionWide}
        imageAlt="Heavy civil construction site with steel falsework and formwork erected"
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionMeta index="Index">Service Groups</SectionMeta>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-2xl text-[17px] leading-relaxed text-ink">
                Scopes are structured to suit the way projects are actually delivered — as a defined package, a
                review role, or ongoing engineering support through design and construction.
              </p>
              <ul className="mt-9 border-t border-border">
                {INDEX.map(([number, title]) => (
                  <li key={number} className="flex items-baseline gap-6 border-b border-border py-4">
                    <span className="label-mono text-steel/60">{number}</span>
                    <span className="font-display text-[15px] uppercase tracking-[0.03em] text-ink">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CapabilitiesOverview />

      <section className="bg-background">
        <div className="shell pb-20 pt-12 lg:pb-28 lg:pt-16">
          {SERVICE_GROUPS.map((group, index) => (
            <ServiceGroup key={group.id} group={group} alternate={index % 2 === 1} />
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Next Step"
        title="Let's scope the engineering."
        copy="Send us the project type, location and stage. We will review the scope and respond with how we would approach the engineering."
        secondary={{ label: "Explore Our Expertise", to: "/expertise" }}
      />
    </>
  );
}