export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  isHighPriority?: boolean;
  badge?: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  metrics: { label: string; value: string }[];
  description: string;
  achievements: string[];
  recognition?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  tag?: string;
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "itc-limited",
    company: "ITC Limited — Foods Division",
    role: "Summer Intern — Technology",
    period: "July 2026 – Present",
    location: "Bengaluru, India",
    isCurrent: true,
    isHighPriority: true,
    badge: "Current · Priority Signal",
    summary:
      "Spearheading on-the-ground UX research and interface design for factory inventory management, partnering across Procurement, Maintenance, Warehouse, and Finance teams to eliminate floor bottlenecks.",
    highlights: [
      "Conducted 30+ contextual interviews with factory workers and 10+ deep-dive sessions with plant management.",
      "Analyzed 30,000+ transactional records (PO, GRN, Equipment Issue) to architect a unified inventory intelligence system.",
      "Designed a low-cognitive-load floor interface tailored specifically for semi-skilled operators in high-noise, glove-worn physical environments.",
      "Cut operational decision-making latency by 15% across procurement planning and dock material stowing.",
    ],
    skills: [
      "Contextual Inquiry",
      "Enterprise Product Design",
      "Ergonomic Touch UX",
      "Industrial Systems",
      "Stakeholder Alignment",
    ],
  },
  {
    id: "genzi-ai",
    company: "genzi.ai",
    role: "Software Development Intern",
    period: "December 2025 – March 2026",
    location: "Remote, Singapore",
    isCurrent: false,
    isHighPriority: false,
    badge: "B2B AI Platform",
    summary:
      "Designed and deployed PropPanda, an enterprise B2B conversational AI platform tailored for luxury real estate brokerages operating in Dubai.",
    highlights: [
      "Supported 8+ Dubai-based brokerage clients handling 5,000+ property listings and incoming investor leads.",
      "Designed multi-turn conversational AI dialog flows and visual property card micro-interactions.",
      "Reduced inbound lead qualification latency by 90% while providing 24/7 multilingual coverage.",
      "Architected data pipelines utilizing client real estate catalogs (yields, pricing structures) to fine-tune context-aware AI models.",
    ],
    skills: ["Conversational UX", "AI Interaction Design", "Next.js", "Lead Qualification", "Systems Strategy"],
  },
];

export const LEADERSHIP_EXPERIENCE: LeadershipItem[] = [
  {
    id: "google-crowdsource",
    organization: "Google Crowdsource Learning Community",
    role: "Student Community Lead",
    period: "July 2025 – Present",
    location: "Atria IT, Bengaluru, India",
    metrics: [
      { label: "Community Members", value: "400+" },
      { label: "Community Scale", value: "Built 0 to 1" },
      { label: "Specialty", value: "LLM Eval & Bias" },
    ],
    description:
      "Built a vibrant 400+ contributor community from the ground up, driving community-led data annotation and LLM evaluation workflows to make AI more culturally nuanced, accessible, and accurate.",
    achievements: [
      "Led high-impact data annotation and LLM evaluation initiatives focused on regional nuances and educational datasets.",
      "Organized 10+ workshops on Responsible AI, Adversarial Testing, and Human-in-the-Loop evaluation.",
      "Recognized by Google as a Global Top Contributor for exceptional community leadership and data impact.",
    ],
    recognition: "Global Top Contributor — Google",
  },
  {
    id: "gdg-campus",
    organization: "Google Developer Group (GDG) on Campus",
    role: "Co-organizer & Technical Lead / Vice President",
    period: "September 2025 – Present",
    location: "Atria IT, Bengaluru, India",
    metrics: [
      { label: "Community Scale", value: "1.5K+" },
      { label: "Growth Trajectory", value: "650%" },
      { label: "Technical Events", value: "20+" },
    ],
    description:
      "Directing technical strategy, speaker alignment, and workshop execution for one of Bengaluru's most active developer student chapters, growing the member base by 650%.",
    achievements: [
      "Scaled developer community from 200 to 1,500+ active student builders across 4 engineering years.",
      "Planned and executed 20+ hands-on technical sessions covering Google Cloud, Generative AI, Web Architecture, and Android.",
      "Mentored a core committee of domain leads across Web, AI/ML, Cloud, and Open-Source ecosystems.",
    ],
    recognition: "650% Community Expansion Award",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "UX Research & Strategy",
    description: "Uncovering latent needs, mapping behavioral systems, and turning ambiguous problems into actionable clarity.",
    skills: [
      "User Interviews",
      "Surveys & Form Analysis",
      "Usability Testing",
      "A/B Testing",
      "User Journey Mapping",
      "Accessibility Research (WCAG AAA)",
      "Contextual Inquiry",
      "Cognitive Workload Auditing",
    ],
  },
  {
    category: "Product & Interaction Design",
    description: "Crafting systematic, high-fidelity interfaces that balance ergonomic efficiency with visual craft.",
    skills: [
      "Figma",
      "FigJam",
      "Wireframing",
      "Interactive Prototyping",
      "User Flows",
      "Interaction Design",
      "Information Architecture",
      "Design Systems",
      "Motion Design",
      "10-Foot Living Room UI",
    ],
  },
  {
    category: "Technology & Engineering",
    description: "Bridging the gap between design vision and production-grade code with modern engineering tools.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git & GitHub",
      "Responsive Design",
      "Framer Motion",
      "Performance Optimization",
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "hackathon-roorkee",
    title: "3rd Place — E-Summit'22 Hackathon",
    institution: "IIT Roorkee",
    date: "E-Summit 2022",
    description: "Awarded podium finish among hundreds of nationwide teams for engineering innovative human-centric software solutions.",
    tag: "National Hackathon",
  },
  {
    id: "best-project-rotaract",
    title: "Best Project Award",
    institution: "Rotaract Club, Atria Institute of Technology",
    date: "2026",
    description: "Recognized for high-impact social and community-first digital project execution.",
    tag: "Excellence in Execution",
  },
  {
    id: "research-methodology",
    title: "Research Methodology Certification",
    institution: "IIT Madras",
    date: "October 2026",
    description: "Formal academic training in rigorous experimental research design, empirical validation, and qualitative user inquiry.",
    tag: "Academic Research",
  },
  {
    id: "google-ux-research",
    title: "Research Participant — Google User Experience Research",
    institution: "Google UX Research Team",
    date: "Verified Participant",
    description: "Selected to contribute qualitative insights and evaluate emergent software tools with Google's core product design researchers.",
    tag: "UX Research",
  },
];

