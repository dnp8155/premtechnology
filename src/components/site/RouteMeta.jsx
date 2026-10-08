import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://prem-structure-systems.base44.app";

const PAGE_META = {
  "/": {
    title: "Prem Technology Inc. — Structural Engineering for Complex Infrastructure",
    description:
      "Specialized structural engineering for transmission structures, temporary works, heavy civil infrastructure and technically demanding construction projects across Canada and the USA.",
  },
  "/about": {
    title: "About — Prem Technology Inc. | Structural Engineering",
    description:
      "Prem Technology Inc. is a specialized structural engineering practice supporting contractors, utilities, engineering firms and infrastructure owners across Canada and the USA.",
  },
  "/services": {
    title: "Services — Structural, Temporary Works & Heavy Civil Engineering",
    description:
      "Engineering services for transmission and power structures, temporary and construction structures, heavy civil infrastructure and supporting technical review, drawings and reporting.",
  },
  "/expertise": {
    title: "Expertise — Structural, Temporary Works & Infrastructure Engineering",
    description:
      "Technical expertise in structural analysis, temporary works, transmission structures, construction engineering, heavy civil infrastructure, water and wastewater, and site engineering support.",
  },
  "/projects": {
    title: "Applications — Transmission, Transit, Bridge & Water Infrastructure",
    description:
      "Application areas supported by Prem Technology Inc.: transmission infrastructure, temporary works, LRT and transit, bridges and overpasses, tunnels and underground, and water infrastructure.",
  },
  "/contact": {
    title: "Contact — Discuss Your Project | Prem Technology Inc.",
    description:
      "Contact Prem Technology Inc. about a structural engineering requirement, temporary works scope or infrastructure project, and our engineering team will review the opportunity.",
  },
  "/privacy": {
    title: "Privacy — Prem Technology Inc.",
    description:
      "How Prem Technology Inc. handles information submitted through this website, including enquiry details and attached project documents.",
  },
  "/terms": {
    title: "Terms — Prem Technology Inc.",
    description: "Terms of use for the Prem Technology Inc. website and its engineering enquiry service.",
  },
};

const FALLBACK = {
  title: "Prem Technology Inc. — Structural Engineering for Complex Infrastructure",
  description:
    "Specialized structural engineering for transmission structures, temporary works and heavy civil infrastructure across Canada and the USA.",
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || FALLBACK;
    const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    document.title = meta.title;

    const setMetaTag = (attribute, key, value) => {
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", meta.title);
    setMetaTag("property", "og:description", meta.description);
    setMetaTag("property", "og:url", url);
    setMetaTag("name", "twitter:title", meta.title);
    setMetaTag("name", "twitter:description", meta.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [pathname]);

  return null;
}