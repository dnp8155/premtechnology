import React from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const SECTIONS = [
  {
    title: "Website content",
    copy: "The information on this website describes the engineering services offered by Prem Technology Inc. and the types of applications we engineer. It is provided for general information and is updated as scopes develop.",
  },
  {
    title: "No engineering advice",
    copy: "Nothing on this website constitutes engineering advice, a design, or a professional opinion on any specific structure or project. Engineering conclusions are only provided under a defined engagement and are based on the information supplied for that engagement.",
  },
  {
    title: "Engagement",
    copy: "Submitting an enquiry does not create a contract or an engineering engagement. Scope, deliverables, responsibilities and fees are agreed in writing before work commences.",
  },
  {
    title: "Project references",
    copy: "Project references, client names and completed project records are provided directly during the engagement process. Application categories shown on this website describe the types of work we engineer.",
  },
  {
    title: "Intellectual property",
    copy: "The content, layout, drawings and documentation on this website remain the property of Prem Technology Inc. and may not be reproduced without written permission.",
  },
];

export default function Terms() {
  return (
    <>
      <PageHero
        index="Legal"
        eyebrow="Terms"
        title="Terms."
        copy="Terms of use for this website and for project enquiries."
        compact
      />

      <section className="border-b border-border bg-background">
        <div className="shell py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-8 lg:col-start-3">
              <ul className="border-t border-border">
                {SECTIONS.map((section) => (
                  <li key={section.title} className="border-b border-border py-7">
                    <h2 className="font-display text-[17px] uppercase tracking-[0.03em] text-ink">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-steel">{section.copy}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}