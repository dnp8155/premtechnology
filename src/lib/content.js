import { IMG } from "./images";

export const APPLICATIONS = [
  {
    index: "01",
    slug: "transmission",
    title: "Transmission Infrastructure",
    category: "Transmission & Power Structures",
    copy: "Tower and lattice structure engineering, loading review and structural documentation for power infrastructure.",
    challenge:
      "Tower and lattice structures where loading conditions, tower geometry and foundation interface govern the structural response.",
    scope: [
      "Structural analysis and load calculations",
      "Member and connection review",
      "Engineering documentation",
      "Certification support",
    ],
    application: ["Transmission lines", "Lattice towers and girders", "Substation structures", "Power infrastructure"],
    image: IMG.appTransmission,
    alt: "Steel lattice transmission tower with conductor arms",
  },
  {
    index: "02",
    slug: "temporary-works",
    title: "Temporary Works",
    category: "Temporary & Construction Structures",
    copy: "Shoring, formwork, falsework and excavation support engineered around the construction sequence.",
    challenge:
      "Temporary structures that must carry construction loads safely while allowing the permanent work to proceed as planned.",
    scope: [
      "Shoring and excavation support design",
      "Formwork and falsework engineering",
      "Scaffold and access structures",
      "Site inspection and review",
    ],
    application: ["Excavations and deep basements", "Bridge and structure erection", "Heavy construction access", "Temporary support systems"],
    image: IMG.appTemporary,
    alt: "Steel formwork and falsework erected on a heavy construction site",
  },
  {
    index: "03",
    slug: "transit",
    title: "LRT & Transit",
    category: "Heavy Civil & Infrastructure",
    copy: "Structural engineering for light rail and transit infrastructure, guideways and station structures.",
    challenge:
      "Transit infrastructure delivered within operating corridors, under strict geometry, staging and access constraints.",
    scope: [
      "Structural design support",
      "Guideway and station structure review",
      "Constructability assessment",
      "Technical reporting",
    ],
    application: ["LRT and metro corridors", "Guideways and viaducts", "Station and platform structures", "Transit facilities"],
    image: IMG.appTransit,
    alt: "Light rail transit guideway and platform structures under construction",
  },
  {
    index: "04",
    slug: "bridges",
    title: "Bridges & Overpasses",
    category: "Heavy Civil & Infrastructure",
    copy: "Structural review and construction-phase engineering for bridge and overpass structures.",
    challenge:
      "Erection, staging and support conditions for bridge structures, where the temporary condition often governs the design.",
    scope: [
      "Structural review",
      "Erection and temporary support engineering",
      "Falsework design",
      "Construction-phase documentation",
    ],
    application: ["Highway overpasses", "River crossings", "Grade separations", "Structural rehabilitation"],
    image: IMG.appBridge,
    alt: "Steel plate girder bridge span under construction over a river",
  },
  {
    index: "05",
    slug: "tunnel",
    title: "Tunnel & Underground",
    category: "Heavy Civil & Infrastructure",
    copy: "Engineering support for underground works, temporary support and the structures that interface with them.",
    challenge:
      "Underground construction where ground conditions, support systems and staged excavation control the sequence.",
    scope: [
      "Temporary works engineering",
      "Excavation support review",
      "Structural interfaces",
      "Site engineering support",
    ],
    application: ["Transit tunnels", "Shafts and portals", "Underground stations", "Underground civil structures"],
    image: IMG.appTunnel,
    alt: "Interior of a concrete transit tunnel under construction",
  },
  {
    index: "06",
    slug: "water",
    title: "Water & Wastewater",
    category: "Heavy Civil & Infrastructure",
    copy: "Structural engineering for treatment, storage and conveyance structures in water and wastewater infrastructure.",
    challenge:
      "Liquid-retaining and process structures with demanding durability, serviceability and construction requirements.",
    scope: [
      "Structural design support",
      "Formwork and construction engineering",
      "Review and documentation",
      "Technical reporting",
    ],
    application: ["Treatment plants", "Clarifiers and process basins", "Storage structures", "Conveyance infrastructure"],
    image: IMG.appWater,
    alt: "Circular clarifier tanks at a water treatment plant under construction",
  },
];

export const SERVICE_GROUPS = [
  {
    index: "01",
    id: "transmission",
    title: "Transmission & Power Structures",
    description:
      "Engineering for transmission and power structures — from structural analysis through fabrication review and supporting documentation.",
    scope: [
      "Transmission towers",
      "Lattice structures and lattice girders",
      "Structural analysis",
      "Load calculations",
      "Engineering review",
      "Certification support",
    ],
    details: [
      ["Applications", "Transmission lines and corridor structures · lattice towers and lattice girders · substation and switchyard structures"],
      ["Deliverables", "Design calculations · structural drawings · review comments · technical reports"],
      ["Interface", "Utilities, EPC teams, fabricators and engineering firms"],
      ["Stage", "Concept through fabrication and construction support"],
    ],
    image: IMG.transmissionHardware,
    alt: "Insulator strings and conductor hardware on a steel transmission tower crossarm",
  },
  {
    index: "02",
    id: "temporary",
    title: "Temporary & Construction Structures",
    description:
      "Engineering for shoring, formwork, falsework, scaffolding and excavation support, developed around the construction sequence and site conditions.",
    scope: [
      "Shoring",
      "Formwork",
      "Falsework",
      "Scaffolding",
      "Excavation support",
      "Temporary structures",
      "Construction engineering",
      "Site inspection",
    ],
    details: [
      ["Applications", "Deep excavations and shoring · bridge and structure erection · formwork and falsework systems · construction access and support"],
      ["Deliverables", "Temporary works calculations · drawings · method review · inspection reporting"],
      ["Interface", "General contractors, heavy civil contractors and site teams"],
      ["Stage", "Pre-construction planning through execution"],
    ],
    image: IMG.falsework,
    alt: "Steel falsework supporting a concrete bridge deck soffit",
  },
  {
    index: "03",
    id: "civil",
    title: "Heavy Civil & Infrastructure",
    description:
      "Structural engineering for major infrastructure, coordinated with the demands, staging and access constraints of large construction environments.",
    scope: [
      "LRT and metro structures",
      "Tunnels and underground works",
      "Bridges and overpasses",
      "Heavy civil works",
      "Water treatment structures",
      "Wastewater infrastructure",
    ],
    details: [
      ["Applications", "LRT, metro and transit structures · tunnels, shafts and portals · bridges and overpasses · water and wastewater facilities"],
      ["Deliverables", "Design support · construction-phase engineering · review and documentation"],
      ["Interface", "Contractors, public infrastructure owners and engineering teams"],
      ["Stage", "Design development through construction"],
    ],
    image: IMG.civilStructures,
    alt: "Reinforced concrete wastewater treatment basin under construction",
  },
  {
    index: "04",
    id: "supporting",
    title: "Supporting Engineering Services",
    description:
      "Technical review, documentation and coordination services that support design teams, contractors and project delivery.",
    scope: [
      "Structural design support",
      "Engineering drawings",
      "Engineering review",
      "Technical reporting",
      "Site inspection",
      "Project coordination",
      "Material and technical evaluation",
    ],
    details: [
      ["Applications", "Independent design review · peer review and checking · site and fabrication inspection · project engineering support"],
      ["Deliverables", "Review comments · marked-up drawings · technical reports · inspection records"],
      ["Interface", "Design teams, contractors, fabricators and owners"],
      ["Stage", "Targeted review or ongoing project support"],
    ],
    image: IMG.technicalReview,
    alt: "Structural drawings marked up during an engineering review",
  },
];

export const APPROACH = [
  {
    index: "01",
    title: "Understand",
    copy: "Understand project constraints, loads, geometry, sequence and site conditions.",
  },
  {
    index: "02",
    title: "Analyze",
    copy: "Evaluate structural behaviour, loading conditions and engineering requirements.",
  },
  {
    index: "03",
    title: "Engineer",
    copy: "Develop practical, technically sound engineering solutions.",
  },
  {
    index: "04",
    title: "Review",
    copy: "Support design review, technical documentation and engineering coordination.",
  },
  {
    index: "05",
    title: "Deliver",
    copy: "Provide clear engineering information that can move the project forward.",
  },
];

export const CAPABILITIES = [
  "Structural Analysis",
  "Load Calculations",
  "Engineering Review",
  "Temporary Works Engineering",
  "Structural Design Support",
  "Engineering Drawings",
  "Site Inspection",
  "Technical Reporting",
  "Construction Engineering",
  "Project Coordination",
  "Material & Technical Evaluation",
];

export const CLIENTS = [
  "General Contractors",
  "Heavy Civil Contractors",
  "EPC Companies",
  "Engineering Firms",
  "Utilities",
  "Infrastructure Owners",
  "Municipal & Public Infrastructure Teams",
  "Fabricators",
  "Developers",
];

export const EXPERTISE_PAGE = [
  {
    index: "01",
    title: "Structural Engineering",
    copy: "Structural analysis, member and connection review, and documentation for demanding structures.",
  },
  {
    index: "02",
    title: "Temporary Works",
    copy: "Shoring, formwork, falsework, scaffolding and excavation support engineered for construction conditions.",
  },
  {
    index: "03",
    title: "Transmission Structures",
    copy: "Towers, lattice structures and lattice girders, with loading review and certification support.",
  },
  {
    index: "04",
    title: "Construction Engineering",
    copy: "Engineering aligned with the construction sequence, access, staging and site constraints.",
  },
  {
    index: "05",
    title: "Heavy Civil",
    copy: "Structural engineering support for large civil works and their temporary and permanent structures.",
  },
  {
    index: "06",
    title: "Infrastructure",
    copy: "LRT, metro, bridge, overpass and transit structures engineered for public infrastructure delivery.",
  },
  {
    index: "07",
    title: "Water & Wastewater",
    copy: "Treatment, storage and process structures where durability and serviceability govern the design.",
  },
  {
    index: "08",
    title: "Technical Review",
    copy: "Independent review of structural design, drawings and technical documentation.",
  },
  {
    index: "09",
    title: "Site Engineering Support",
    copy: "Site inspection, technical evaluation and engineering coordination during construction.",
  },
];

export const PROJECT_TYPES = [
  "Transmission / Power Structures",
  "Temporary Works",
  "Shoring / Formwork",
  "Heavy Civil",
  "LRT / Metro",
  "Bridge / Overpass",
  "Tunnel / Underground",
  "Water / Wastewater",
  "Other",
];