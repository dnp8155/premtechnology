import React from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionMeta from "@/components/site/SectionMeta";
import ContactForm from "@/components/contact/ContactForm";

const STEPS = [
  ["01", "Scope review", "We review your enquiry together with any drawings, specifications or brief provided."],
  ["02", "Engineering response", "An engineering team member responds to discuss the requirement and the technical approach."],
  ["03", "Next stage", "Where there is a fit, we agree the scope, deliverables and programme."],
];

export default function Contact() {
  return (
    <>
      <PageHero
        index="Contact"
        eyebrow="Project Enquiry"
        title={
          <>
            Let's engineer
            <br />
            the next stage.
          </>
        }
        copy="Have a complex structural or infrastructure requirement? Tell us about your project and our engineering team will review the opportunity."
        compact
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <SectionMeta index="01">Enquiries</SectionMeta>
              <h2 className="display mt-7 text-[clamp(1.7rem,3.2vw,2.4rem)] text-ink">
                Prem Technology Inc.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-steel">
                Specialized structural engineering for transmission structures, temporary works, heavy civil
                infrastructure and complex construction.
              </p>

              <dl className="mt-10 border-t border-border">
                <div className="flex items-baseline justify-between gap-6 border-b border-border py-4">
                  <dt className="label-mono text-steel">Markets</dt>
                  <dd className="text-[15px] text-ink">Canada / USA</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-border py-4">
                  <dt className="label-mono text-steel">Discipline</dt>
                  <dd className="text-[15px] text-ink">Structural &amp; construction engineering</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-border py-4">
                  <dt className="label-mono text-steel">Response</dt>
                  <dd className="text-[15px] text-ink">Engineering team review</dd>
                </div>
              </dl>

              <h3 className="label-mono mt-12 text-steel">What Happens Next</h3>
              <ol className="mt-5 border-t border-border">
                {STEPS.map(([index, title, copy]) => (
                  <li key={index} className="border-b border-border py-4">
                    <div className="flex items-baseline gap-5">
                      <span className="label-mono text-brand">{index}</span>
                      <span className="font-display text-[15px] uppercase tracking-[0.03em] text-ink">
                        {title}
                      </span>
                    </div>
                    <p className="mt-2 pl-10 text-[15px] leading-relaxed text-steel">{copy}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}