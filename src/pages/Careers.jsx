import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import CtaBand from "@/components/site/CtaBand";

const VALUES = [
  {
    index: "01",
    title: "Technical Rigour",
    copy: "Engineering that holds up under review — defensible, constructable, and documented to a standard the industry expects.",
  },
  {
    index: "02",
    title: "Construction Awareness",
    copy: "We work from the construction sequence outward. Understanding how things are built is where the engineering starts.",
  },
  {
    index: "03",
    title: "Direct Communication",
    copy: "Clear engineering information, issued in a form that can be reviewed, fabricated, coordinated and built from.",
  },
  {
    index: "04",
    title: "Continued Development",
    copy: "Exposure to demanding structures across transmission, temporary works and heavy civil infrastructure.",
  },
];

const DISCIPLINES = [
  "Structural Engineering",
  "Temporary Works Engineering",
  "Transmission Structures",
  "Construction Engineering",
  "Heavy Civil Structures",
  "Engineering Review & Documentation",
];

export default function Careers() {
  return (
    <>
      <PageHero
        index="Careers"
        eyebrow="Join the Practice"
        title={
          <>
            Engineering
            <br />
            that builds
            <br />
            infrastructure.
          </>
        }
        copy="We're a structural engineering practice focused on complex infrastructure and demanding construction. If that's the work you want to do, we'd like to hear from you."
        tags={["Structural Engineering", "Temporary Works", "Transmission", "Heavy Civil"]}
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionMeta index="01">The Practice</SectionMeta>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
              <p className="font-display text-[clamp(1.5rem,3.1vw,2.4rem)] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
                We work on the structures that carry the load — transmission towers, temporary
                works, bridges, transit, tunnels and water infrastructure.
              </p>
              <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-steel">
                Prem Technology Inc. is a structural engineering consultancy serving contractors,
                utilities, engineering teams and infrastructure owners across Canada and the
                United States. Our work sits at the interface between design and construction —
                where structural conditions, staging and site constraints all have to hold.
              </p>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-steel">
                We're always interested in hearing from engineers who work well in that space —
                technically precise, construction-aware, and clear in how they communicate.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="shell py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.index} delay={i * 0.06} className="border-t border-border pt-8">
                <span className="label-mono text-brand">{v.index}</span>
                <h2 className="display mt-5 text-[clamp(1.4rem,2.6vw,2rem)] text-ink">{v.title}</h2>
                <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-steel">{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="shell py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionMeta index="02">Disciplines</SectionMeta>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
              <p className="text-[16px] leading-relaxed text-steel">
                We're interested in engineers across the following areas. If your experience
                doesn't fit neatly into one of these but the work resonates, reach out anyway.
              </p>
              <ul className="mt-8 grid gap-0 border-t border-border sm:grid-cols-2">
                {DISCIPLINES.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 border-b border-border py-4 text-[15px] text-ink"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-brand" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Careers"
        title="Send us your information."
        copy="If the work described here is the work you want to do, reach out — we'll take it from there."
        primary={{ label: "Get in Touch", to: "/contact" }}
        secondary={{ label: "Explore Expertise", to: "/expertise" }}
      />
    </>
  );
}