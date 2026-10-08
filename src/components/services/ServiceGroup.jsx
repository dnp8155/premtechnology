import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export default function ServiceGroup({ group, alternate }) {
  return (
    <article id={group.id} className="scroll-mt-28 border-t border-border py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1"
          )}
        >
          <div className="group relative aspect-[3/2] overflow-hidden">
            <Image
              src={group.image}
              alt={group.alt}
              fittingType="fill"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7"
          )}
        >
          <span className="label-mono text-brand">{group.index} / Service Group</span>
          <h2 className="display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] text-ink">{group.title}</h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-steel">{group.description}</p>

          <ul className="mt-8 grid border-t border-border sm:grid-cols-2 sm:gap-x-8">
            {group.scope.map((item, index) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-border py-3">
                <span className="label-mono text-steel/60">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[15px] text-ink">{item}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-8 border-t border-border">
            {group.details.map(([term, detail]) => (
              <div key={term} className="grid gap-1 border-b border-border py-4 sm:grid-cols-4">
                <dt className="label-mono text-steel">{term}</dt>
                <dd className="text-[15px] leading-relaxed text-ink sm:col-span-3">{detail}</dd>
              </div>
            ))}
          </dl>

          <Link to="/contact" className="btn-outline-dark mt-8">
            Discuss This Scope
          </Link>
        </Reveal>
      </div>
    </article>
  );
}