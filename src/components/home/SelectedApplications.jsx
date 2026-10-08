import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import { APPLICATIONS } from "@/lib/content";

export default function SelectedApplications() {
  return (
    <section className="border-b border-border bg-background">
      <div className="shell py-20 lg:py-28">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionMeta index="06">Applications</SectionMeta>
            <h2 className="display mt-7 text-[clamp(2.1rem,5vw,3.9rem)] text-ink">Selected applications.</h2>
          </div>
          <p className="max-w-md self-end text-[15px] leading-relaxed text-steel lg:col-span-5 lg:col-start-8">
            The categories below describe the types of work we engineer. Specific project references are
            provided directly on request.
          </p>
        </Reveal>

        <div className="mt-14">
          {APPLICATIONS.map((item) => (
            <Reveal key={item.index}>
              <Link
                to={`/projects#${item.slug}`}
                className="group grid grid-cols-1 items-baseline gap-3 border-t border-border py-7 transition-colors duration-300 hover:bg-secondary/60 md:grid-cols-12 md:gap-6"
              >
                <span className="label-mono text-steel/70 md:col-span-1">{item.index}</span>
                <span className="display text-[clamp(1.35rem,2.5vw,2rem)] text-ink md:col-span-4">
                  {item.title}
                </span>
                <span className="label-mono text-brand md:col-span-3 md:col-start-6">{item.category}</span>
                <span className="text-[15px] leading-relaxed text-steel md:col-span-3">{item.copy}</span>
                <span className="md:col-span-1 md:justify-self-end">
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="text-steel transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}