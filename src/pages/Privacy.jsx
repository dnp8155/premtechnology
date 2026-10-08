import React from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const SECTIONS = [
  {
    title: "Information we collect",
    copy: "When you submit a project enquiry we collect the details you provide: your name, company, email address, phone number, project type, project location, requirements, message and any file you choose to attach.",
  },
  {
    title: "How the information is used",
    copy: "Enquiry information is used solely to review your project requirement, respond to your enquiry and, where relevant, prepare a scope of engineering services. We do not sell enquiry information or share it for advertising purposes.",
  },
  {
    title: "Attachments",
    copy: "Any file attached to an enquiry is stored privately and is accessible only to the engineering team reviewing the enquiry. It is not published and no public link is created.",
  },
  {
    title: "Retention",
    copy: "Enquiry records are retained for as long as required to respond to the enquiry and to maintain a record of project correspondence, after which they are removed.",
  },
  {
    title: "Your requests",
    copy: "You may request access to, correction of, or removal of the enquiry information you have submitted by contacting us through the project enquiry form.",
  },
  {
    title: "Website analytics",
    copy: "Aggregate, non-identifying usage information is used to understand how the website is used. No individual visitor profile is created or sold.",
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        index="Legal"
        eyebrow="Privacy"
        title="Privacy."
        copy="How enquiry information submitted through this website is handled."
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