import React, { useState } from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ProjectFilters from "@/components/projects/ProjectFilters";
import CtaBand from "@/components/site/CtaBand";
import { APPLICATIONS } from "@/lib/content";

const INDEX = APPLICATIONS.map((item) => [item.index, item.title, item.category]);

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? APPLICATIONS
      : APPLICATIONS.filter((item) => item.category === filter);

  return (
    <>
      <PageHero
        index="Projects"
        eyebrow="Selected Applications"
        title={
          <>
            Applications
            <br />
            we engineer.
          </>
        }
        copy="Our work is presented by application category — project type, engineering challenge, engineering scope and where it applies."
        tags={["Transmission", "Temporary Works", "Transit", "Bridges", "Tunnels", "Water & Wastewater"]}
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionMeta index="Index">Application Categories</SectionMeta>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
              <ul className="border-t border-border">
                {INDEX.map(([number, title, category]) => (
                  <li key={number} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-border py-4">
                    <span className="label-mono text-steel/60">{number}</span>
                    <span className="font-display text-[15px] uppercase tracking-[0.03em] text-ink">
                      {title}
                    </span>
                    <span className="label-mono text-steel/70 sm:ml-auto">{category}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-steel">
                Project references, client names and completed project records are provided directly during the
                engagement process rather than published here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell pb-20 pt-12 lg:pb-28 lg:pt-16">
          <div className="mb-10">
            <ProjectFilters active={filter} onChange={setFilter} count={filtered.length} />
          </div>
          <div key={filter}>
            {filtered.map((item, index) => (
              <ProjectShowcase key={item.slug} item={item} alternate={index % 2 === 1} />
            ))}
            {filtered.length === 0 && (
              <p className="py-16 text-center text-[15px] text-steel">
                No applications in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Application"
        title="Working on something comparable?"
        copy="Tell us the structure, the stage and the constraint. We will tell you how we would engineer it."
        secondary={{ label: "View Our Services", to: "/services" }}
      />
    </>
  );
}