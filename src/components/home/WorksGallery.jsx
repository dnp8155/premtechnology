import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import SectionHeading from "@/components/site/SectionHeading";
import { APPLICATIONS } from "@/lib/content";

export default function WorksGallery() {
  return (
    <section className="relative border-y border-border bg-background">
      <div className="shell py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <SectionMeta index="06" tone="dark">
              Selected Works
            </SectionMeta>
            <SectionHeading className="mt-7 max-w-[16ch]" size="t-h1">
              Engineering across infrastructure.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col justify-end lg:col-span-5">
            <p className="t-body max-w-md leading-relaxed text-steel">
              A selection of project applications — from transmission structures and temporary works to
              heavy civil and underground infrastructure across Canada and the USA.
            </p>
            <Link
              to="/projects"
              className="label-text mt-7 inline-flex items-center gap-2 text-brand transition-colors hover:text-ink"
            >
              View all projects
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {APPLICATIONS.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <Link
                to={`/projects#${item.slug}`}
                className="group relative block overflow-hidden border border-border bg-ink"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fittingType="fill"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/35"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-white/70">{item.index}</span>
                    <span className="text-white/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <div>
                    <p className="label-text text-white/70">{item.category}</p>
                    <h3 className="display t-h3 mt-2 text-white">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}