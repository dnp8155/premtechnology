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

export const SERVICE_CARD = {
  specializations: [
    "Residential, Commercial & Parking Garages",
    "Heavy Civil Infrastructure Projects",
    "Overpasses, Bridges",
    "LRT / Metro Tunnels",
    "Wastewater & Water Treatment Plants",
  ],
  technicalServices: [
    "Restoration, Refurbishment, and Reshoring",
    "Mechanical & Structural Engineering Drawings",
    "Site Inspection & Structural Diagnostics",
    "Material Testing & Certified Test Reports",
    "Project Planning & Management",
  ],
};

export const INSIGHTS = [
  {
    index: "01",
    slug: "early-temporary-works-involvement",
    category: "Temporary Works",
    title: "The engineering case for early temporary works involvement",
    excerpt:
      "When temporary works are treated as a construction-phase afterthought, the structural conditions that govern the permanent design are often missed. Early involvement changes the outcome.",
    readTime: "6 min read",
    body: [
      "Temporary works — shoring, formwork, falsework, excavation support — are structural systems in their own right. They carry real loads, they're subject to real failure modes, and the conditions they create during construction often govern the permanent structure's design.",
      "The most common problem we see is timing. Temporary works engineering is brought in after the permanent design is fixed, after the construction sequence is set, and after the critical decisions have already been made. At that point, the engineer is working within constraints that may not be structurally optimal.",
      "Early involvement means the temporary conditions are evaluated alongside the permanent design. The shoring loads are known before the excavation depth is fixed. The falsework loads are checked before the span configuration is finalised. The erection sequence is reviewed before the member sizes are set.",
      "The result is fewer surprises during construction, fewer change orders, and a structure that works in both its temporary and permanent conditions.",
    ],
  },
  {
    index: "02",
    slug: "loading-conditions-lattice-towers",
    category: "Transmission",
    title: "Loading conditions that govern lattice tower design",
    excerpt:
      "Lattice towers are governed by a combination of wind, ice, wire tension and broken-wire conditions. Understanding which load case controls each member is where the engineering begins.",
    readTime: "7 min read",
    body: [
      "A lattice transmission tower is a structure where the governing load case is rarely obvious. Wind on the structure, wind on the conductors, ice on the structure, ice on the conductors, broken-wire conditions, and construction and maintenance loads all produce different force paths through the members.",
      "The engineering work is determining which combination controls each member — and there isn't one answer. A leg member may be governed by a different load case than a cross-arm diagonal, and the foundation interface may be governed by yet another.",
      "This is why load calculations matter as much as the structural analysis. The analysis tells you the forces for a given load case. The load calculations tell you which load cases to analyse, how to combine them, and what factors to apply.",
      "When the load definitions are right, the structural analysis follows. When they're wrong, the analysis is precise about the wrong answer.",
    ],
  },
  {
    index: "03",
    slug: "temporary-condition-governs-bridge-construction",
    category: "Heavy Civil",
    title: "Why the temporary condition often governs bridge construction",
    excerpt:
      "In bridge construction, the structure passes through configurations that are more demanding than the finished state. The erection condition, not the service condition, frequently controls.",
    readTime: "6 min read",
    body: [
      "A completed bridge is designed to carry traffic loads, wind loads, and seismic loads in its final configuration. But during construction, the bridge passes through a series of intermediate states where the structural system is incomplete and the load paths are different.",
      "A steel girder being lifted is supported at different points than it will be in service. A deck being cast on falsework carries wet concrete loads that the finished deck won't see. A precast segment being erected is held by temporary supports that will be removed.",
      "Each of these is a structural condition that needs to be engineered. The stresses, the stability, and the support reactions in these temporary states can exceed anything the finished structure experiences.",
      "This is why construction-phase engineering isn't an add-on — it's a structural design task that runs parallel to the permanent design and often governs the member sizing, the erection sequence, and the temporary support requirements.",
    ],
  },
  {
    index: "04",
    slug: "constructability-review-before-site",
    category: "Construction",
    title: "Constructability review: catching problems before they reach site",
    excerpt:
      "A constructability review is a structured pass through the design and the construction plan to identify conflicts, sequencing issues, and structural conditions that will cause problems during construction.",
    readTime: "5 min read",
    body: [
      "A constructability review asks a simple question: can this be built, in this sequence, with these constraints, without creating a structural problem? The answer is sometimes no, and finding that out on paper is far less expensive than finding it out on site.",
      "The review looks at the design drawings against the construction sequence. Are there members that can't be erected because of access? Are there connections that can't be made because of the staging? Are there temporary conditions that haven't been checked?",
      "It also looks at the interfaces — between the permanent structure and the temporary works, between different trades, between the design assumptions and the site conditions. Most construction problems live at these interfaces.",
      "The output is a set of comments, questions, and recommended changes that resolve the issues before they become change orders, delays, or structural problems during construction.",
    ],
  },
  {
    index: "05",
    slug: "shoring-design-excavation-support",
    category: "Temporary Works",
    title: "Shoring design: the structural engineering behind excavation support",
    excerpt:
      "Shoring systems hold back soil and water during excavation. The engineering is a balance between soil-structure interaction, construction sequencing, and the temporary nature of the system.",
    readTime: "8 min read",
    body: [
      "Shoring is a temporary structure that carries permanent loads. The soil it retains doesn't know the wall is temporary, and the water pressure doesn't care that the excavation will be backfilled in three months.",
      "The design starts with the soil conditions — the active and passive earth pressures, the water table, the surcharge loads from adjacent structures and construction equipment. These define the loads on the shoring system.",
      "Then comes the structural design of the wall itself — sheet pile, soldier pile and lagging, secant pile, or diaphragm wall — along with the supports: struts, tiebacks, or rakers. Each support type changes the wall's load path and the deflection profile.",
      "The construction sequence matters as much as the final condition. The excavation is done in stages, supports are installed at each stage, and the wall's behaviour changes with each step. Each stage is a structural condition that needs to be checked.",
      "Get it right and the excavation is stable, the adjacent structures are protected, and the permanent work proceeds without interference. Get it wrong and the consequences are immediate and visible.",
    ],
  },
  {
    index: "06",
    slug: "documentation-that-can-be-built-from",
    category: "Construction",
    title: "Engineering documentation that can actually be built from",
    excerpt:
      "Engineering drawings and calculations are not just records of the design — they are instructions for construction. Clarity, completeness, and constructability are engineering deliverables.",
    readTime: "5 min read",
    body: [
      "The best engineering is only as good as the documentation that communicates it. A calculation that's technically correct but unclear is a problem waiting to happen. A drawing that's complete but doesn't reflect the construction sequence creates conflicts on site.",
      "Good engineering documentation has three properties: it's clear, it's complete, and it's constructable. Clear means the reader can understand the intent and the requirements. Complete means nothing critical is left to interpretation. Constructable means the information is organised around how the work will actually be done.",
      "This is an engineering skill, not a drafting task. The engineer who understands the construction sequence is the one who can produce documentation that supports it.",
      "When the documentation is right, the site team can build with confidence, the fabricator can proceed without questions, and the review process is straightforward. When it's not, every step costs more time than it should.",
    ],
  },
];

export const CONTACT_INFO = {
  phone: "942-880-4032",
  email: "premtechinc@yahoo.ca",
};