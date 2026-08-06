export interface Profile {
  name: string;
  tagline: string;
  headlineLines: string[];
  supportingCopy: string;
  statusNotice: string;
  links: {
    email: string;
    linkedin: string;
    github: string;
    resume: string;
  };
}

export interface PhilosophyIntro {
  largeHeadline: string[];
  storyText: string[];
}

export interface ProjectLinks {
  live?: string;
  demo?: string;
  github?: string;
}

export interface ProductCaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  status: string;
  tagline: string;
  problem: string;
  users: string;
  productThinking: string[];
  productDecisions: string[];
  systemTechnology: string[];
  tags: string[];
  links?: ProjectLinks;
}

export interface ClientProject {
  id: string;
  title: string;
  subtitle: string;
  clientType: string;
  status: 'SHIPPED' | 'DELIVERED' | 'FINAL DEPLOYMENT' | 'CLIENT REVIEW' | 'IN DEVELOPMENT';
  businessProblem: string;
  existingWorkflow: string;
  clientRequirements: string;
  solutionDesigned: string;
  productBuilt: string;
  contribution: string;
  tags: string[];
  links?: ProjectLinks;
}

export interface AIExperiment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  workflowSteps: string[];
  technology: string[];
  selectionBadge?: string;
  tags: string[];
  links?: ProjectLinks;
}

export interface ProcessStage {
  number: string;
  stage: string;
  tagline: string;
  description: string;
  proofPoint?: {
    projectTitle: string;
    annotation: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  contributions: string[];
  learnings: string[];
  tags: string[];
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  impact: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

export const PORTFOLIO_PROFILE: Profile = {
  name: "PRAJWAL H P",
  tagline: "AI × PRODUCT × BUILDING",
  headlineLines: [
    "I BUILD AT THE",
    "INTERSECTION OF",
    "AI, PRODUCT &",
    "REAL-WORLD",
    "PROBLEMS."
  ],
  supportingCopy: "Engineer by background. Curious about why people use things — not just how they're built.",
  statusNotice: "Open to opportunities in AI & Product",
  links: {
    email: "prajwalhp15@gmail.com",
    linkedin: "https://www.linkedin.com/in/prajwal-hp/",
    github: "https://github.com/prajwalhp15",
    resume: "https://drive.google.com/file/d/1Y6K5HgDdbpcZxBkrlcnSar67WIuvGPez/view?usp=sharing",
  },
};

export const PHILOSOPHY_INTRO: PhilosophyIntro = {
  largeHeadline: [
    "I LIKE BUILDING THINGS.",
    "BUT MORE IMPORTANTLY,",
    "I LIKE FIGURING OUT",
    "WHAT'S WORTH BUILDING."
  ],
  storyText: [
    "I started out fascinated by artificial intelligence and machine learning — building models, training neural networks, and experimenting with emerging technology.",
    "Working on real products and client problems gradually shifted my perspective: engineering is essential, but understanding user workflows, trade-offs, and why something should exist in the first place is what makes a product actually matter."
  ]
};

export const FEATURED_CASE_STUDIES: ProductCaseStudy[] = [
  {
    id: "careerpilot-ai",
    number: "01",
    category: "PRODUCT · AI",
    title: "CAREERPILOT AI",
    subtitle: "AI-Powered Career Guidance & Skill Roadmapping Platform",
    status: "PROTOTYPE",
    tagline: "Students and early-career builders don't have an information problem. They have a DIRECTION problem.",
    problem: "Engineering graduates and early-career developers have access to countless tutorials, courses, and certifications, yet constantly ask: 'What should I personally learn next?' Information overload leads to execution paralysis.",
    users: "Engineering graduates and early-career developers navigating fragmented learning paths across web dev, AI, cloud, and software engineering.",
    productThinking: [
      "Prioritized personalized career assessment over generic static roadmaps.",
      "Integrated skill-gap analysis comparing current user projects with market job requirements.",
      "Designed AI assistance as an interactive mentor rather than a generic text prompt."
    ],
    productDecisions: [
      "MVP Focus: Focused initial prototype on Computer Science & AI tracks rather than covering all engineering fields.",
      "Trade-off: Prioritized step-by-step actionable micro-tasks over long multi-year static advice.",
      "User Safety: Explicitly highlighted AI limitations to prevent hallucinated career guidance."
    ],
    systemTechnology: [
      "Frontend: React 18, TypeScript, Tailwind CSS.",
      "AI Engine: LLM prompt orchestration for contextual learning path generation.",
      "Backend & Indexing: Node.js / FastAPI microservice for skill-gap mapping."
    ],
    tags: ["Product Strategy", "LLM Systems", "Career Roadmapping", "EdTech"],
    links: {} // No fake URLs
  },
  {
    id: "real-estate-platform",
    number: "02",
    category: "REAL CLIENT · REAL REQUIREMENTS",
    title: "REAL ESTATE MANAGEMENT PLATFORM",
    subtitle: "Interactive Plot Visualizer & Customer CRM",
    status: "FINAL DEPLOYMENT",
    tagline: "Turning plots, people & paperwork into one unified digital system.",
    problem: "Sales representatives struggled to present available land plots to buyers visually, relying on outdated static paper maps and manual highlighter marks.",
    users: "Real estate sales managers, field representatives, and land plot buyers.",
    productThinking: [
      "Transformed physical manual plot layouts into an interactive visual grid map.",
      "Connected live layout status directly with customer CRM and booking history.",
      "Streamlined plot reservation workflows to prevent double-booking issues."
    ],
    productDecisions: [
      "Prioritized instant color-coded visual feedback (Sold, Reserved, Available).",
      "Designed mobile-friendly interfaces so sales reps could demo on tablets during site visits.",
      "Automated installment payment reminders and customer ledger records."
    ],
    systemTechnology: [
      "Interactive SVG Layout Renderer",
      "React + TypeScript Frontend",
      "Customer CRM & Booking Database"
    ],
    tags: ["Interactive Mapping", "Real Estate CRM", "Client Delivery"],
    links: {} // No fake URLs
  }
];

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: "aqua-deep-clean",
    title: "AQUA DEEP CLEAN",
    subtitle: "Helping a Professional Cleaning Business Build Trust & Generate More Customer Inquiries.",
    clientType: "CLIENT PRODUCT / BUSINESS WEBSITE",
    status: "SHIPPED",
    businessProblem: "A professional cleaning services company lacked a modern digital presence to effectively showcase its residential, commercial, industrial, and water tank cleaning services. Potential customers had limited information about the business, making it difficult to build trust and generate quality service inquiries.",
    existingWorkflow: "Potential customers relied on word-of-mouth or offline channels, leading to limited service discovery and manual inquiry tracking.",
    clientRequirements: "A modern, responsive online presence highlighting complete service portfolios, building professional brand credibility, and generating customer inquiries.",
    solutionDesigned: "Designed and delivered a modern, responsive business website that highlights the company's complete service portfolio, strengthens brand credibility, and provides an intuitive inquiry experience optimized for desktop and mobile users.",
    productBuilt: "A conversion-focused client website highlighting cleaning portfolios with clear service discovery and optimized lead generation funnels.",
    contribution: "Designed user flow and service portfolio hierarchy, built responsive frontend interfaces, optimized lead capture, and managed deployment on Vercel.",
    tags: ["Business Website", "Service Portfolio", "Lead Generation"],
    links: {
      live: "https://aquadeepclean.vercel.app/"
    }
  },
  {
    id: "manasa-vet-pharma",
    title: "MANASA VET PHARMA",
    subtitle: "Unified Digital Home for a Veterinary Business Ecosystem",
    clientType: "CLIENT PRODUCT / BUSINESS WEBSITE",
    status: "SHIPPED",
    businessProblem: "A growing veterinary business operating multiple distinct services (Multiple Shops/Locations, Pet Mart, and Veterinary Hospital) lacked a unified digital home for customers.",
    existingWorkflow: "Customers were confused by fragmented social pages and phone calls for different location services.",
    clientRequirements: "Bring all veterinary business/service units together under one cohesive digital presence, making services, locations, and appointments easily discoverable.",
    solutionDesigned: "Structured multi-service digital web platform presenting location branches, pet care products, and hospital consultation schedules under one roof.",
    productBuilt: "Unified client business website with clear information architecture and service discovery.",
    contribution: "Client requirement gathering, service discovery architecture, UI design, and production deployment.",
    tags: ["Business Ecosystem", "Information Architecture", "Client Product"],
    links: {
      live: "https://www.manasavetpharma.com/"
    }
  },
  {
    id: "komala-scented-supari",
    title: "KOMALA SCENTED SUPARI",
    subtitle: "Taking a Traditional Product Business Online",
    clientType: "CLIENT PRODUCT / COMMERCE",
    status: "DELIVERED",
    businessProblem: "A traditional product manufacturing business needed to establish an online presence to capture retail orders and wholesale business inquiries.",
    existingWorkflow: "Manual phone calls and physical distributor inquiries with limited product showcase.",
    clientRequirements: "Product catalog showcase, direct customer order entry, separate retail & wholesale contact channels, and lightweight customer management.",
    solutionDesigned: "Modern commercial product web portal enabling product discovery, order requests, and distinct retail/wholesale inquiry workflows.",
    productBuilt: "Digital commerce & customer communication platform tailored for traditional business workflows.",
    contribution: "E-commerce workflow analysis, product showcase design, inquiry routing, and web deployment.",
    tags: ["Digital Commerce", "Product Showcase", "Wholesale & Retail"],
    links: {
      live: "https://komalashop.vercel.app/"
    }
  }
];

export const AI_EXPERIMENTS: AIExperiment[] = [
  {
    id: "luminacxr",
    number: "01",
    title: "LUMINACXR",
    subtitle: "Chest X-Ray Disease Detection with Explainability (Grad-CAM)",
    status: "AICTE YUKTI 2025 WINNER",
    description: "Deep learning chest X-ray multi-disease classification using DenseNet, ResNet, and EfficientNet architectures paired with Grad-CAM heatmap visualization to explain model decisions.",
    workflowSteps: [
      "DICOM / PNG X-Ray Upload",
      "Model Inference across Pathology Classes",
      "Grad-CAM Heatmap Generation showing activation regions",
      "Radiology Assistant Report Formatting"
    ],
    technology: ["DenseNet", "ResNet", "EfficientNet", "Grad-CAM", "PyTorch", "OpenCV"],
    selectionBadge: "Selected for AICTE YUKTI Innovation Challenge 2025 (2nd Stage)",
    tags: ["Deep Learning", "Grad-CAM", "Computer Vision", "Healthcare AI"],
    links: {
      live: "https://huggingface.co/spaces/pavan034/lumina",
      github: "https://github.com/prajwalhp15"
    }
  },
  {
    id: "local-rag",
    number: "02",
    title: "LOCAL RAG DOCUMENT QA",
    subtitle: "Privacy-Grounded Offline Question Answering",
    status: "PROTOTYPE",
    description: "Offline local document assistant built using FastAPI, FAISS vector index, and Phi-3 via Ollama for confidential document search without cloud API dependencies.",
    workflowSteps: [
      "PDF Document Chunking & Text Extraction",
      "FAISS Vector Embedding Storage",
      "User Query Vector Similarity Retrieval",
      "Ollama Local LLM Response Generation with Citations"
    ],
    technology: ["FastAPI", "FAISS", "Ollama", "Phi-3", "Python", "Local RAG"],
    tags: ["Local RAG", "FAISS", "Ollama", "FastAPI"],
    links: {
      github: "https://github.com/prajwalhp15/document-qa"
    }
  },
  {
    id: "holographic-cv",
    number: "03",
    title: "HOLOGRAPHIC DISPLAY / HOLOGRAM ARCADE 3D",
    subtitle: "Touchless Spatial Gesture Control",
    status: "EXPERIMENT",
    description: "OpenCV and MediaPipe hand tracking pipeline translating 3D hand gesture coordinates into touchless interface controls and holographic projection manipulation.",
    workflowSteps: [
      "Webcam Video Frame Capture",
      "MediaPipe 21-Point Hand Landmark Detection",
      "Gesture Recognition & Velocity Vector Calculation",
      "Virtual Object Manipulation Signal Dispatch"
    ],
    technology: ["OpenCV", "MediaPipe", "Python", "Spatial HCI"],
    tags: ["Computer Vision", "MediaPipe", "Gesture Control", "HCI"],
    links: {
      github: "https://github.com/prajwalhp15/Hologramarcade3D"
    }
  },
  {
    id: "police-tracking",
    number: "04",
    title: "POLICE PERSONNEL TRACKING SYSTEM",
    subtitle: "Real-Time GPS Security Dashboard",
    status: "DEPLOYED",
    description: "Real-time personnel tracking and security dashboard successfully deployed for Karnataka Police and Smart City Control Room during large public events.",
    workflowSteps: [
      "Mobile GPS Coordinates Dispatch",
      "Real-time Websocket Stream Processing",
      "Control Room Live Map Interface",
      "Geofence Alerting & Squad Dispatch"
    ],
    technology: ["Real-time GPS", "Websockets", "React", "Map Integration"],
    tags: ["Real-time Tracking", "Karnataka Police", "Deployed System"],
    links: {} // Explicitly NO button
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    stage: "OBSERVE",
    tagline: "Look closely at the actual workflow before suggesting any solution.",
    description: "Identify how people currently solve their problem using manual workarounds, spreadsheets, or phone calls.",
    proofPoint: {
      projectTitle: "REAL ESTATE PLATFORM",
      annotation: "Noticed sales reps marking plot paper maps with highlighters during buyer visits."
    }
  },
  {
    number: "02",
    stage: "UNDERSTAND",
    tagline: "Identify why the problem exists and who experiences the pain.",
    description: "Differentiate between what users ask for and what they actually need to accomplish their goals.",
    proofPoint: {
      projectTitle: "MANASA VET PHARMA",
      annotation: "Discovered business had multiple services (Shops, Pet Mart, Hospital) needing one unified home."
    }
  },
  {
    number: "03",
    stage: "QUESTION",
    tagline: "Is this an information problem or a direction problem?",
    description: "Challenge assumptions: Does building more features actually help the user, or will it create overload?",
    proofPoint: {
      projectTitle: "CAREERPILOT AI",
      annotation: "Realized users don't need more tutorial links — they need clear, personalized direction."
    }
  },
  {
    number: "04",
    stage: "PRIORITIZE",
    tagline: "Define the core MVP that delivers value immediately.",
    description: "Decide what MUST be built first and what should be explicitly left out of the initial release.",
  },
  {
    number: "05",
    stage: "BUILD & TEST",
    tagline: "Engineer robust, low-friction software tailored to the workflow.",
    description: "Translate requirements into intuitive interfaces, robust backend architecture, and functional products.",
  },
  {
    number: "06",
    stage: "ITERATE",
    tagline: "Gather real stakeholder feedback and refine continuous releases.",
    description: "Use direct user observation and client feedback loops to continuously polish usability and stability.",
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "exp-formaculture",
    company: "FORMACULTURE",
    role: "AI Engineering Intern",
    period: "2024 - PRESENT",
    location: "Remote / Hybrid",
    summary: "Working on practical AI-driven solutions for industrial automation and CAD-based spatial design analysis in an early-stage team environment.",
    contributions: [
      "Engineered automated spatial pattern extraction pipelines for CAD structural files.",
      "Developed internal tools for workflow automation and data processing.",
      "Collaborated with founding team on rapid product iteration cycles."
    ],
    learnings: [
      "Early startup speed demands clear product scoping over premature perfection.",
      "AI features are only as valuable as the manual friction they remove from the user."
    ],
    tags: ["AI Engineering", "Spatial CAD Processing", "Startup Workflows"],
  }
];

export const LEADERSHIP_ROLES: LeadershipItem[] = [
  {
    id: "ieee-chair",
    organization: "IEEE PESITM",
    role: "Student Chair",
    period: "2024 - PRESENT",
    description: "Directing student technical workshops, hackathons, guest speaker series, and technical community initiatives.",
    impact: [
      "Organized student coding bootcamps and AI hands-on sessions.",
      "Fostered collaborative student project teams across engineering departments."
    ]
  },
  {
    id: "aiml-forum",
    organization: "AIML Forum PESITM",
    role: "Forum Coordinator",
    period: "2023 - 2024",
    description: "Coordinated machine learning study circles, open-source code reviews, and project showcases.",
    impact: [
      "Guided junior students through foundational PyTorch and computer vision workshops."
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "aicte-yukti",
    title: "AICTE YUKTI Innovation Challenge 2025",
    subtitle: "Selected for 2nd Stage Evaluation",
    date: "2025",
    description: "LuminaCXR chest X-ray explainable AI system selected for national-level innovation recognition."
  },
  {
    id: "hack-yugma",
    title: "Hack Yugma Tech Fest",
    subtitle: "2nd Place (State Level)",
    date: "2025",
    description: "Awarded 2nd place at state-level technical hackathon competition."
  },
  {
    id: "sih-rainwise",
    title: "Smart India Hackathon — RainWise",
    subtitle: "Hackathon Finalist Project",
    date: "2024",
    description: "Developed RainWise, an automated rainwater harvesting feasibility calculator."
  },
  {
    id: "nitk-bootcamp",
    title: "NITK Surathkal Cyber Knowledge Project",
    subtitle: "Supported by Honeywell",
    date: "2025",
    description: "Participated in technical learning and project development supported by Honeywell."
  }
];
