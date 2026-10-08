import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

function Field({ term, children }) {
  return (
    <div className="grid gap-2 border-b border-border py-4 sm:grid-cols-4">
      <dt className="label-mono pt-1 text-steel">{term}</dt>
      <dd className="text-[15px] leading-relaxed text-ink sm:col-span-3">{children}</dd>
    </div>
  );
}

export default function ProjectShowcase({ item, alternate }) {
  return (
    <article id={item.slug} className="scroll-mt-28 border-t border-border py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6 lg:col-start-1"
          )}
        >
          <div className="group relative aspect-[3/2] overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fittingType="fill"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <p className="label-mono mt-4 text-steel/70">
            Fig. {item.index} — {item.title}
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className={cn(
            "lg:row-start-1",
            alternate ? "lg:col-span-5 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"
          )}
        >
          <span className="label-mono text-brand">
            {item.index} / {item.category}
          </span>
          <h2 className="display mt-5 text-[clamp(1.65rem,3vw,2.35rem)] text-ink">{item.title}</h2>
          <p className="mt-5 text-[16px] leading-relaxed text-steel">{item.challenge}</p>

          <dl className="mt-8 border-t border-border">
            <Field term="Project Type">{item.category}</Field>
            <Field term="Engineering Scope">
              <ul className="space-y-1.5">
                {item.scope.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden="true" className="text-steel/50">
                      —
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Field>
            <Field term="Application">{item.application.join(" · ")}</Field>
          </dl>

          <Link to="/contact" className="btn-outline-dark mt-8">
            Discuss a Similar Scope
          </Link>
        </Reveal>
      </div>
    </article>
  );
}