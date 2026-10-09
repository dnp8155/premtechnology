import React from "react";
import Hero from "@/components/home/Hero";
import ComplexityIntro from "@/components/home/ComplexityIntro";
import CoreExpertise from "@/components/home/CoreExpertise";
import TransmissionFeature from "@/components/home/TransmissionFeature";
import TemporaryWorks from "@/components/home/TemporaryWorks";
import HeavyCivil from "@/components/home/HeavyCivil";
import WorksGallery from "@/components/home/WorksGallery";
import SelectedApplications from "@/components/home/SelectedApplications";
import ApproachTimeline from "@/components/home/ApproachTimeline";
import TechnicalCapabilities from "@/components/home/TechnicalCapabilities";
import WhyPrem from "@/components/home/WhyPrem";
import WhoWeSupport from "@/components/home/WhoWeSupport";
import ServicesCard from "@/components/home/ServicesCard";
import CtaBand from "@/components/site/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ComplexityIntro />
      <CoreExpertise />
      <TransmissionFeature />
      <TemporaryWorks />
      <HeavyCivil />
      <WorksGallery />
      <SelectedApplications />
      <ApproachTimeline />
      <TechnicalCapabilities />
      <WhyPrem />
      <WhoWeSupport />
      <ServicesCard />
      <CtaBand
        eyebrow="Engagement"
        title="Let's engineer the next stage."
        secondary={{ label: "Explore Our Expertise", to: "/expertise" }}
      />
    </>
  );
}