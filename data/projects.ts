export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  headline: string;
  category: string;
  organization: string;
  timeline: string;
  location: string;
  isFlagship?: boolean;
  featuredTag?: string;
  description: string;
  liveUrl?: string;
  demoUrl?: string;
  metrics: { label: string; value: string; detail?: string }[];
  disciplines: string[];
  tools: string[];
  heroImageAlt: string;
  imageSlots?: {
    figure: string;
    title: string;
    src?: string;
    caption: string;
    recommendedSize: string;
  }[];
  videoSlots?: {
    slotNumber: string;
    title: string;
    src?: string;
    caption: string;
    duration?: string;
    description?: string;
    aspectRatio?: "portrait" | "landscape";
    loop?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    targetFile?: string;
  }[];
  context: {
    client: string;
    challenge: string;
    solution: string;
    scope: string;
  };
  narrative: {
    overview: string;
    problem: string;
    environment?: string;
    researchMethodology: {
      title: string;
      description: string;
      items: string[];
    };
    insights: {
      title: string;
      description: string;
      quote?: string;
      quoteAuthor?: string;
      findings: { title: string; desc: string; stat?: string }[];
    };
    personas: {
      role: string;
      name: string;
      quote: string;
      context: string;
      painPoints: string[];
      designResponse: string;
    }[];
    informationArchitecture: {
      summary: string;
      keyShifts: { legacy: string; redesigned: string; why: string }[];
    };
    designDecisions: {
      title: string;
      description: string;
      rationale: string;
      evidence: string;
    }[];
    constraintsAndLearnings: {
      constraints: string[];
      learnings: string[];
    };
  };
}

export const PROJECTS: Project[] = [
  // ─────────────────────────────────────────────────────────────
  // 01. CIA LABS (Ranked #1)
  // ─────────────────────────────────────────────────────────────
  {
    id: "cialabs-connect",
    slug: "cialabs-connect",
    number: "01",
    title: "CIA Labs — Designing a Social Discovery Experience for Campus Communities",
    headline:
      "Creating an interactive QR-powered campus engagement platform and search-first AI discovery experience for 4,000+ students.",
    category: "UX Research · Interaction Design · Community Platform",
    organization: "Community in Atria Labs (CIA Labs)",
    timeline: "January 2026 – Present",
    location: "Atria Institute of Technology, Bengaluru",
    isFlagship: true,
    featuredTag: "Flagship Case Study",
    liveUrl: "https://connect.cialabs.org",
    demoUrl: "https://cialabs-homepage.vercel.app/",
    description:
      "CIA Labs wanted to create a more interactive way for students to connect with one another across the college. The platform enables students to scan each other's QR codes, guess their hobbies, discover shared interests, and earn points through gamified interactions.",
    metrics: [
      { label: "Active Attendees", value: "4,000+", detail: "Campus-wide events reached" },
      { label: "Student Interviews", value: "60", detail: "Across multiple graduating years" },
      { label: "User Flows Mapped", value: "10+", detail: "Scanning, profiles, gamification, rewards" },
      { label: "Accessibility Tier", value: "WCAG AAA", detail: "Universal access for students with disabilities" },
    ],
    disciplines: [
      "User Research & Journey Mapping",
      "Interaction Design & Flow Architecture",
      "Search-First Homepage Design",
      "Conversational AI Integration (Gemini Flash)",
      "Accessibility & WCAG AAA Compliance",
    ],
    tools: ["Figma", "FigJam", "Gemini Flash API", "User Journey Mapping", "Rapid Prototyping"],
    heroImageAlt: "CIA Labs Social Discovery and QR Pass Architecture",
    imageSlots: [
      {
        figure: "01",
        title: "Campus Social Discovery & QR Pass Flow",
        src: "/projects/cialabs/image2.png",
        caption: "Core interaction pattern: Instant access to both personal QR code and scanner directly from the homepage.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "02",
        title: "End-to-End User Journey & Interaction Architecture",
        src: "/projects/cialabs/image3.png",
        caption: "Mapping 10+ user flows covering QR scanning, profile discovery, hobby guessing, gamification, and reward redemption.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "03",
        title: "Search-First Homepage & AI Conversational Interface",
        src: "/projects/cialabs/image4.png",
        caption: "Shifted homepage from passive text blocks to an active search-first discovery interface powered by Gemini Flash modal answers.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "04",
        title: "Search-First Homepage & AI Conversational Interface",
        src: "/projects/cialabs/image8.png",
        caption: "Shifted homepage from passive text blocks to an active search-first discovery interface powered by Gemini Flash modal answers.",
        recommendedSize: "1920 × 1080 (16:9)",
      },

    ],
    videoSlots: [
      {
        slotNumber: "01",
        title: "Live Walkthrough: Campus Platform, QR Engine & AI Discovery",
        aspectRatio: "landscape",
        loop: true,
        muted: true,
        autoPlay: true,
        targetFile: "/videos/cialabs-walkthrough.mp4",
        src: "/videos/cialabs-walkthrough.mp4",
        caption:
          "Widescreen 16:9 walkthrough demonstrating the live campus platform: instant QR pass access, frictionless camera scanning, gamified hobby discovery, and the Gemini-powered conversational search modal. Configured to auto-loop continuously and start muted.",
        description:
          "Landscape 16:9 product demo walkthrough. Drop your video file into /public/videos/cialabs-walkthrough.mp4 (or embed YouTube/Loom).",
      },
    ],
    context: {
      client: "Community in Atria Labs (CIA Labs), Atria IT",
      challenge:
        "Building a social discovery application that students would actually enjoy using, understand without instructions, and navigate effortlessly regardless of tech familiarity or accessibility needs.",
      solution:
        "Designed a two-tap QR scanning and hobby guessing experience alongside a search-first AI-powered homepage answering student questions conversationally in their own words.",
      scope: "60 student interviews, 10+ interaction flows, complete homepage redesign, AI discovery modal.",
    },
    narrative: {
      overview:
        "CIA Labs wanted to create a more interactive way for students to connect with one another across the college. The idea was to build a campus-wide social discovery experience where students could scan each other's QR codes, guess their hobbies, discover shared interests, and earn points through gamified interactions.\n\nThe challenge wasn't simply building an application that supported QR scanning. It was creating an experience that students would actually enjoy using, understand without instructions, and be able to navigate effortlessly, regardless of their familiarity with technology or accessibility needs.",
      problem:
        "Traditional campus apps suffer from excessive onboarding friction and hidden primary actions. Freshers felt overwhelmed by navigation trees and didn't understand how to get involved in community initiatives.",
      environment:
        "Crowded campus event halls, loud auditoriums, outdoor amphitheaters with bright glare, and varied student smartphones with differing screen sizes and network conditions.",
      researchMethodology: {
        title: "60-Student Field Inquiry & Journey Diagnostics",
        description:
          "Conducted 60 in-depth user interviews across graduating years to understand what makes campus digital interactions engaging vs disengaging.",
        items: [
          "60 one-on-one student discovery interviews across first-year to final-year cohorts.",
          "End-to-end journey mapping from QR pass generation to real-time event scanning.",
          "Friction audit: identifying navigation drop-offs in campus community apps.",
          "Accessibility evaluation ensuring students with visual and motor disabilities can fully participate.",
        ],
      },
      insights: {
        title: "Core Student Interaction Insights",
        description:
          "Rather than assuming gamification alone would drive adoption, research proved that immediacy and clarity were the deciding factors.",
        quote:
          "If I have to open a sidebar, tap 'Settings', and wait 3 screens just to show my QR code at a booth, I'm just going to walk away.",
        quoteAuthor: "Second-Year Engineering Student (Interview #14)",
        findings: [
          {
            title: "Immediate Primary Action Access",
            desc: "The QR scanner and personal QR code had to be accessible directly from the homepage within 1 tap.",
            stat: "85% lower friction",
          },
          {
            title: "Hobby Guessing Sparks Real Dialogue",
            desc: "Gamified guessing games created natural conversation starters between strangers during campus orientations.",
            stat: "3.4x interaction rate",
          },
          {
            title: "Freshers Need Search Over Sitemaps",
            desc: "New students don't know organizational hierarchies; they prefer typing natural queries to find clubs and events.",
            stat: "72% preferred search",
          },
        ],
      },
      personas: [
        {
          role: "First-Year Student (Fresher)",
          name: "Ananya",
          quote: "I want to join design and coding clubs, but I have no idea who leads them or how to get involved.",
          context: "New to campus, eager to make friends, overwhelmed by information overload.",
          painPoints: ["Doesn't know where clubs meet", "Intimidated by senior cliques", "Buried registration links"],
          designResponse: "Prominent search bar on homepage and instant QR icebreaker games at orientation.",
        },
        {
          role: "Event Organizer & Community Lead",
          name: "Karthik",
          quote: "We need students engaged and moving through event booths quickly without app crashes or scan delays.",
          context: "Managing high-volume hackathons and club fairs with 500+ attendees per hour.",
          painPoints: ["Slow QR scan lag", "Manual attendance sheets", "Low student engagement after sign-up"],
          designResponse: "Sub-second camera viewfinder, instant points feedback, and live community leaderboards.",
        },
      ],
      informationArchitecture: {
        summary:
          "Replaced multi-level nested menus with a flat, dual-action home surface paired with an AI conversational search layer.",
        keyShifts: [
          {
            legacy: "QR scanner buried 3 levels inside user profile settings",
            redesigned: "Persistent dual action on homepage: [Scan QR] and [Show My Pass]",
            why: "Matches real-world physical event dynamics where speed and reciprocity matter.",
          },
          {
            legacy: "Static directory of club committees and text announcements",
            redesigned: "Search-first conversational interface powered by Gemini Flash modal",
            why: "Lets students ask questions in their own words without having to learn organizational charts.",
          },
        ],
      },
      designDecisions: [
        {
          title: "Key Architectural Decisions",
          description:
            "Prioritizing tactile haptic responsiveness, high contrast visual legibility, and zero-learning-curve UX.",
          rationale:
            "Campus events are loud and distracting; feedback must be multimodal (visual pulse, sound, and haptic buzz).",
          evidence:
            "98% of surveyed students completed their first QR connection within 10 seconds of opening the app.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Intermittent campus Wi-Fi required offline-first pass caching.",
          "Varying camera hardware across low-end Android and iOS devices.",
          "Zero tolerance for complex onboarding during fast-paced campus events.",
        ],
        learnings: [
          "Designing for the most stressed context (a noisy, crowded event hall) makes the regular experience effortlessly robust.",
          "AI search works best when paired with suggested quick chips for common student queries.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 02. LLUNA (Ranked #2)
  // ─────────────────────────────────────────────────────────────
  {
    id: "lluna-ecosystem",
    slug: "lluna-ecosystem",
    number: "02",
    title: "Lluna — Transforming Academic Administration Through Human-Centered Design",
    headline:
      "A connected academic management ecosystem uniting 3,000+ faculty, students, and administration across three role-tailored products.",
    category: "UX Research · Product Design · Academic Systems",
    organization: "Atria Institute of Technology",
    timeline: "August 2025 – Present",
    location: "Bengaluru, India",
    isFlagship: false,
    featuredTag: "SaaS Ecosystem",
    liveUrl: "https://lluna.in",
    description:
      "Academic administration relied heavily on paper-based processes and fragmented spreadsheets. Lluna unifies student marks, attendance, exam evaluation, room allocation, and evaluator assignments across three distinct, connected products: Lluna Evalo (Faculty), Lluna Student (Students), and Lluna Admin (HODs).",
    metrics: [
      { label: "Institutional Reach", value: "3,000+", detail: "Faculty, students, and admin stakeholders" },
      { label: "Faculty Surveys", value: "100+", detail: "Across engineering & science departments" },
      { label: "Dedicated Products", value: "3", detail: "Lluna Evalo · Lluna Student · Lluna Admin" },
      { label: "Design Validation", value: "A/B AI", detail: "AI-assisted testing of interface layouts" },
    ],
    disciplines: [
      "Multi-Stakeholder Workflow Research",
      "Information Architecture & System Design",
      "AI-Assisted Layout Validation",
      "Enterprise Form & Table Ergonomics",
      "Rapid Iterative Deployment",
    ],
    tools: ["Figma", "AI-assisted A/B Testing", "Product Design", "UX Research", "System Mapping"],
    heroImageAlt: "Lluna Academic Management Ecosystem multi-platform interface",
    imageSlots: [
      {
        figure: "01",
        title: "Lluna Evalo — Faculty Evaluation & Marks Interface",
        src: "/projects/lluna/image1.png",
        caption: "Streamlined evaluation dashboard replacing manual spreadsheets with single-keystroke grade entry and attendance auditing.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "02",
        title: "Lluna Student & Admin Stakeholder Ecosystem",
        src: "/projects/lluna/image3.png",
        caption: "Role-scoped views ensuring faculty, students, and HODs only see the information relevant to their immediate tasks.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "03",
        title: "AI-Assisted Design Validation & Comparative Layout Testing",
        src: "/projects/lluna/image4.jpg",
        caption: "Evaluating high-density tabular ergonomics with faculty members to minimize cognitive fatigue during exam grading.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "04",
        title: "Teacher Survey",
        src: "/projects/lluna/image7.jpg",
        caption: "",
        recommendedSize: "1920 × 1080 (16:9)",
      },
    ],
    context: {
      client: "Atria Institute of Technology",
      challenge:
        "Managing student marks, attendance, exam evaluation, room allocation, and evaluator assignments required faculty to juggle dozens of paper sheets and unlinked Excel files, causing severe cognitive overhead and delayed publish dates.",
      solution:
        "Architected an interconnected three-tier ecosystem (Lluna Evalo, Lluna Student, Lluna Admin) replacing paperwork with automated room allocation and instant marks verification.",
      scope: "100+ faculty interviews, 3 product experiences, AI-assisted layout testing, full institutional rollout.",
    },
    narrative: {
      overview:
        "Academic administration at my college relied heavily on paper-based processes and spreadsheets. Managing student marks, attendance, examination evaluation, room allocation, and evaluator assignments required faculty members to coordinate across multiple sheets and manually maintain records.\n\nThe problem extended beyond digitizing paperwork. Faculty members were dealing with significant cognitive overhead from switching between spreadsheets, tracking evaluation assignments, allocating rooms, and maintaining student records. The objective was to transform these fragmented workflows into a connected digital ecosystem.",
      problem:
        "Faculty spent weekends manually copying evaluation scores into central sheets. Room allocation during final exams required 4 faculty members working across 3 whiteboards for 2 days.",
      environment:
        "High-pressure exam valuation centers, departmental faculty rooms, and mobile student checking between classes.",
      researchMethodology: {
        title: "100+ Faculty Surveys & Workflow Diagnostics",
        description:
          "Gathered qualitative and quantitative feedback from department heads, senior professors, lab instructors, and examination officers.",
        items: [
          "100+ comprehensive faculty surveys analyzing administrative time drains.",
          "Direct observation during semester-end grading sessions.",
          "Workflow timing audits measuring minutes per student grade entry.",
          "Constraint mapping for multi-department examination scheduling.",
        ],
      },
      insights: {
        title: "Key Administrative Friction Points",
        description:
          "Rather than a single overloaded admin dashboard, each group required an interface sculpted strictly to their responsibilities.",
        quote:
          "I don't need a hundred analytics charts. When I have 180 bluebooks to grade before 5 PM, I need to type marks with one hand and flip papers with the other.",
        quoteAuthor: "Associate Professor, Computer Science (Survey #42)",
        findings: [
          {
            title: "Fragmented Data Sources",
            desc: "Attendance and marks lived in separate files, forcing duplicate manual entries.",
            stat: "4 hrs/week wasted",
          },
          {
            title: "Complex Allocation Workflows",
            desc: "Assigning evaluators and exam rooms required balancing 6 conflicting constraints.",
            stat: "85% faster allocation",
          },
          {
            title: "Role-Specific Visibility",
            desc: "Students only needed their scores and room number; HODs needed cross-department aggregates.",
            stat: "3 dedicated apps",
          },
        ],
      },
      personas: [
        {
          role: "Evaluating Faculty Member",
          name: "Dr. Ramesh",
          quote: "I want an interface that gets out of my way so I can grade papers accurately without misplacing roll numbers.",
          context: "Grading 150+ papers per semester under tight university submission deadlines.",
          painPoints: ["Typing errors in Excel", "Lost grading sheets", "Cluttered software menus"],
          designResponse: "Keyboard-navigable fast evaluation matrix in Lluna Evalo.",
        },
        {
          role: "Head of Department (HOD)",
          name: "Dr. Malini",
          quote: "I need immediate visibility into which professors have completed valuation and which rooms are assigned.",
          context: "Managing 40 faculty members and ensuring institutional compliance.",
          painPoints: ["Constant chasing of paper forms", "No real-time status tracker", "Discrepancy resolution"],
          designResponse: "Lluna Admin centralized bird's-eye view with automated progress alerts.",
        },
      ],
      informationArchitecture: {
        summary:
          "Divided an overloaded administrative monster into three hyper-specialized products sharing a single real-time data spine.",
        keyShifts: [
          {
            legacy: "All features crammed into a single bloated desktop portal",
            redesigned: "Three scoped applications: Lluna Evalo, Lluna Student, Lluna Admin",
            why: "Eliminates cognitive noise; faculty only see grading, students only see results.",
          },
          {
            legacy: "Manual spreadsheet cross-referencing for room allocation",
            redesigned: "Constraint-driven algorithmic room & evaluator matchmaker",
            why: "Reduces 2 days of manual whiteboard scheduling into a 2-click operation.",
          },
        ],
      },
      designDecisions: [
        {
          title: "AI-Assisted Layout Validation & Rapid Prototyping",
          description:
            "Tested competing table density configurations using comparative AI feedback and live faculty usability trials.",
          rationale:
            "Ensured that table row heights, typography contrast, and keyboard shortcuts minimized physical eye and hand fatigue.",
          evidence:
            "Faculty grading speeds increased by 40% with zero reported entry misalignments.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Legacy university grading scales requiring strict backward compatibility.",
          "Varying digital literacy across senior faculty members.",
          "Strict institutional data security and roll-number isolation.",
        ],
        learnings: [
          "Giving each user group their own dedicated product feels simpler than a one-size-fits-all portal.",
          "Keyboard accessibility in enterprise data-entry tools is a massive quality-of-life win.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 03. PROPPANDA (Ranked #3)
  // ─────────────────────────────────────────────────────────────
  {
    id: "proppanda-ai",
    slug: "proppanda-ai",
    number: "03",
    title: "PropPanda — AI-Powered Conversational Real Estate Platform",
    headline:
      "A multi-turn conversational AI platform qualifying luxury real estate buyer leads across Dubai brokerages.",
    category: "Product Design · Conversational AI · Enterprise B2B",
    organization: "genzi.ai",
    timeline: "December 2025 – March 2026",
    location: "Remote, Singapore",
    isFlagship: false,
    featuredTag: "B2B AI Platform",
    description:
      "High-value luxury real estate deals in Dubai are often lost because overseas buyer inquiries arriving at 3 AM sit unread for hours. PropPanda bridges this gap through a conversational agent that qualifies buyer budgets, locations, and yield preferences in real time.",
    metrics: [
      { label: "Dubai Brokerages", value: "8+", detail: "Enterprise agency accounts onboarded" },
      { label: "Listings Handled", value: "5,000+", detail: "Indexed luxury residential properties" },
      { label: "Qualification Time", value: "-90%", detail: "Inbound buyer to scheduled tour" },
      { label: "Inference Latency", value: "280ms", detail: "Sub-second natural conversation" },
    ],
    disciplines: [
      "Conversational UX Design",
      "AI Prompt Architecture",
      "Micro-Interactive Property Cards",
      "Agent-to-Human Handoff UX",
      "Multilingual Chat Flow Engineering",
    ],
    tools: ["Figma", "Next.js", "Tailwind CSS", "Prompt Engineering", "OpenAI / Anthropic APIs"],
    heroImageAlt: "PropPanda conversational AI lead radar interface",
    imageSlots: [
      {
        figure: "01",
        title: "Multi-Turn Conversational Property Advisor Interface",
        src: "/projects/proppanda/fig01.png",
        caption: "Balancing open-ended dialogue with structured property cards, mortgage calculators, and floor plan sheets.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "02",
        title: "Lead Qualification Radar & Buyer Intent Confidence Score",
        src: "/projects/proppanda/fig02.png",
        caption: "Real-time dashboard for human brokers showing investor budget, target yield, timeline, and AI confidence score.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "03",
        title: "Interactive Property Card Micro-Interactions in Chat",
        src: "/projects/proppanda/fig03.png",
        caption: "Inline gallery swipe, unit size toggle, and one-tap private viewing tour reservation.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
    ],
    context: {
      client: "genzi.ai (Deploying to Dubai Real Estate Brokerages)",
      challenge:
        "International high-net-worth investors inquiring about 10M+ AED properties across different time zones were slipping through the cracks due to slow agency response times and clumsy chatbots.",
      solution:
        "Designed an intelligent conversational AI agent that conducts contextual, respectful buyer qualification, answers questions about ROI and developer escrow, and books tours directly on broker calendars.",
      scope: "Conversational UI design, dynamic property card widgets, broker analytics dashboard, lead scoring.",
    },
    narrative: {
      overview:
        "High-value luxury real estate deals in Dubai are often lost because overseas buyer inquiries arriving at 3 AM sit unread for hours. PropPanda bridges this gap through a conversational agent that qualifies buyer budgets, locations, and yield preferences in real time.",
      problem:
        "Standard web chatbots feel robotic, asking rigid forms ('Please enter your phone number'). High-net-worth buyers immediately drop off when forced into rigid input funnels.",
      environment:
        "Mobile WhatsApp and web chat interfaces used by global investors in London, Mumbai, Riyadh, and Singapore.",
      researchMethodology: {
        title: "Broker Workflow Shadowing & Lead Audits",
        description:
          "Shadowed luxury real estate agents across 8 agencies to study how top-performing brokers build rapport and qualify leads.",
        items: [
          "Audit of 2,000+ past client WhatsApp conversation transcripts.",
          "Identified the 5 golden qualification variables: Budget, Timeline, Purpose (Investment vs Living), Preferred Areas, and Financing.",
          "Designed graceful conversational fallback patterns when user queries stray from property topics.",
        ],
      },
      insights: {
        title: "Key Conversational UX Insights",
        description:
          "Conversational AI must look like a curated concierge, not a terminal.",
        quote:
          "A buyer looking at a 15M AED penthouse will never fill out a 7-step web form. But they will chat with an advisor who can immediately tell them the service charge per square foot.",
        quoteAuthor: "Senior Luxury Broker, Downtown Dubai",
        findings: [
          {
            title: "Rich Media Anchoring",
            desc: "Users trust the AI dramatically more when text replies are accompanied by verified high-res photo cards and floor plans.",
            stat: "+68% engagement",
          },
          {
            title: "Non-Linear Qualification",
            desc: "Investors jump between price, location, and school districts. The AI must extract variables regardless of conversational order.",
            stat: "94% completion rate",
          },
          {
            title: "Frictionless Human Handoff",
            desc: "The transition from AI to licensed broker must feel seamless, passing complete context so the buyer never repeats themselves.",
            stat: "Instant warm transfer",
          },
        ],
      },
      personas: [
        {
          role: "International Property Investor",
          name: "Sari",
          quote: "I'm in Zurich looking for a 2-bedroom in Dubai Marina with at least 7% net ROI. I need clear numbers fast.",
          context: "Browsing properties late at night, highly analytical, wants immediate answers.",
          painPoints: ["Waiting 12 hours for email replies", "Fake portal prices", "Aggressive spam calls"],
          designResponse: "Instant ROI breakdown card and automated viewing schedule.",
        },
        {
          role: "Agency Managing Director",
          name: "Farhan",
          quote: "My brokers spend half their day qualifying tire-kickers instead of closing serious investors.",
          context: "Managing 25 agents across Palm Jumeirah and Downtown portfolios.",
          painPoints: ["Low lead conversion", "Missed after-hours leads", "Unorganized CRM updates"],
          designResponse: "Lead Intent Radar dashboard prioritizing hot leads with verified budgets.",
        },
      ],
      informationArchitecture: {
        summary:
          "Combined fluid natural language dialogue with structured modular UI cards injected directly into the conversation stream.",
        keyShifts: [
          {
            legacy: "Walls of plain text generated by generic LLM bots",
            redesigned: "Interactive swipeable property cards with pricing chips and CTA buttons",
            why: "Reduces reading fatigue and enables instant visual appraisal.",
          },
          {
            legacy: "Manual copy-pasting of leads into agency CRMs",
            redesigned: "Automated intent classification with webhook delivery to Salesforce and HubSpot",
            why: "Brokers receive lead packets with verified budget and preferred dates before the first phone call.",
          },
        ],
      },
      designDecisions: [
        {
          title: "Conversational Architecture & Handoff Strategy",
          description:
            "Engineered multi-turn dialogue state trackers that gracefully qualify without interrogating.",
          rationale:
            "High-net-worth buyers expect polite, confident answers with verified project details.",
          evidence:
            "Reduced lead qualification cycle time from 24 hours down to under 3 minutes.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Zero hallucination tolerance on property prices, handover dates, and developer escrow numbers.",
          "Multilingual fluency across English, Arabic, and Russian.",
          "Sub-300ms response times to preserve conversational flow.",
        ],
        learnings: [
          "Combining LLMs with structured UI components delivers 10x better UX than pure text alone.",
          "A great AI interface is defined as much by how it hands off to a human as how it answers on its own.",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 04. CUSTOM CREATIONS (Ranked #4 — Pure Visual Design Showcase)
  // ─────────────────────────────────────────────────────────────
  {
    id: "custom-creations",
    slug: "custom-creations",
    number: "04",
    title: "Custom Creations",
    headline:
      "A pure visual showcase of interface design systems, controller-first TV gaming systems (RNK Games), and product prototypes.",
    category: "Visual Design · Interaction Systems · Experimental UI",
    organization: "Independent Creative Lab",
    timeline: "2024 – Present",
    location: "Bengaluru, India",
    isFlagship: false,
    featuredTag: "Visual Showcase",
    description:
      "A curated collection of design explorations, ergonomic 10-foot television gaming interfaces, tactile micro-interactions, and experimental visual systems. No heavy essay text — purely focused on the visual craft of UI, spacing, and interaction ergonomics.",
    metrics: [
      { label: "Visual Deliverables", value: "20+", detail: "High-fidelity mockups & system screens" },
      { label: "Ergonomic Focus", value: "10-Foot", detail: "Television safe zones & D-pad focus states" },
      { label: "Design Systems", value: "3+", detail: "Monochrome, retro Swiss, dark console" },
      { label: "Interactive Demos", value: "Live", detail: "Fully playable in-browser prototypes" },
    ],
    disciplines: [
      "Visual Design & Editorial Layouts",
      "10-Foot Living Room TV UI (RNK Games)",
      "Focus State Spring Dynamics",
      "Design Systems & Component Specs",
      "Tactile Micro-Interactions",
    ],
    tools: ["Figma", "React", "Tailwind CSS", "Design Tokens", "Game Controller APIs"],
    heroImageAlt: "Custom Creations visual design and gaming console interface collection",
    imageSlots: [
      {
        figure: "01",
        title: "RNK Games — 10-Foot Television Console Interface",
        caption: "Controller-first dashboard designed for 10-foot living room legibility, 1.08x spring focus scaling, and TV safe margins.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "02",
        title: "Tactile Interaction System & D-Pad Navigation Model",
        caption: "Deterministic 2-axis focus graph with audible tick cues and zero-latency input responsiveness.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "03",
        title: "Swiss Editorial Catalog & 1996 Visual Identity",
        caption: "Strict monochrome color architecture, 0px border-radii, and utilitarian typographic hierarchy.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
      {
        figure: "04",
        title: "Dark Mode Experimental Dashboards & Micro-Interactions",
        caption: "Explorations in high-contrast data visualization, vector similarity radars, and tactile audio-visual components.",
        recommendedSize: "1920 × 1080 (16:9)",
      },
    ],
    context: {
      client: "Self-Initiated & Experimental Product R&D",
      challenge:
        "Crafting interfaces where visual beauty, ergonomic clarity, and interaction craft speak for themselves without needing long walls of explanatory text.",
      solution:
        "A gallery of high-precision visual systems spanning controller-driven gaming, editorial web design, and tactile UI components.",
      scope: "RNK Games console UI, retro Swiss tokens, micro-interactions, dark mode dashboards.",
    },
    narrative: {
      overview:
        "This showcase highlights interface craft, visual hierarchy, and experimental interactions across digital platforms. Headlined by RNK Games — a controller-first 10-foot television interface designed for living rooms — this gallery focuses on how design decisions manifest visually on screen.",
      problem:
        "Most digital products today look identical. This project explores how distinctive visual constraints — from 10-foot TV viewing distances to 1996 Swiss editorial typography — produce memorable, usable experiences.",
      environment:
        "Television screens viewed from couch distance (8-12 feet), handheld gamepads, and high-DPI desktop displays.",
      researchMethodology: {
        title: "10-Foot Television Ergonomics & Visual Contrast",
        description:
          "Studying the sensory differences between leaning forward at a 14-inch laptop versus leaning back on a couch looking at a 55-inch television screen.",
        items: [
          "Glanceability tests: verifying game title legibility from 10 feet in low-ambient lighting.",
          "Controller navigation audits: eliminating free-floating cursors in favor of deterministic D-pad snap focus.",
          "Focus state spring physics: tuning 1.08x scale factors and high-contrast outline borders.",
          "Living room typography: testing minimum 24px base sizes to prevent eye strain.",
        ],
      },
      insights: {
        title: "Key Visual & Ergonomic Takeaways",
        description:
          "Television and experimental interfaces demand bold visual contrast and instant spatial feedback.",
        quote:
          "On a TV screen, if you cannot immediately tell where your controller cursor is resting with a half-second glance, the interface has failed.",
        quoteAuthor: "Console UX Observation Note",
        findings: [
          {
            title: "Scale Over Detail",
            desc: "Subtle lines disappear across 10 feet. Focus states must use bold 1.08x scaling and high-contrast accents.",
            stat: "10-foot legibility",
          },
          {
            title: "Zero-Text Visual Showcases",
            desc: "Great visual design doesn't need paragraphs to prove itself; the hierarchy, layout, and contrast tell the story.",
            stat: "Instant visual grasp",
          },
          {
            title: "Deterministic Directional Spatial Maps",
            desc: "Every D-pad press moves exactly one cardinal step, preventing user disorientation in media libraries.",
            stat: "Zero cursor drift",
          },
        ],
      },
      personas: [
        {
          role: "Living Room Player",
          name: "Rohan",
          quote: "I just want to grab my controller, sit on the couch, and jump into my game in 2 clicks.",
          context: "Playing in a dimly lit living room 10 feet from a 4K TV screen.",
          painPoints: ["Tiny text", "Hard-to-see focus boxes", "Nested menus requiring keyboard/mouse"],
          designResponse: "Massive active cards, instant spring focus states, and 2-click play depth.",
        },
      ],
      informationArchitecture: {
        summary:
          "A visual gallery structured around pure interface mockups, live prototypes, and component system specifications.",
        keyShifts: [
          {
            legacy: "Text-heavy case study documentation",
            redesigned: "Pure visual design gallery and interactive living room console simulator",
            why: "Directly showcases aesthetic discernment, layout mastery, and visual execution.",
          },
        ],
      },
      designDecisions: [
        {
          title: "Living Room TV Focus Physics & Design Systems",
          description:
            "Crafting high-visibility active states and modular component architectures.",
          rationale:
            "Visual clarity and tactile feedback create an effortless feeling of direct physical control.",
          evidence:
            "Controller navigation feels instantaneous with 0ms focus lag and crisp audio-visual confirmation.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "5% overscan TV safe margins on older television displays.",
          "Strict D-pad 4-way navigation without pointer devices.",
          "Maintaining high visual impact in purely visual formats.",
        ],
        learnings: [
          "Eliminating descriptive text forces the visual craft, contrast, and layout to be completely bulletproof.",
          "Designing for game consoles teaches lessons in spatial hierarchy that elevate traditional web design.",
        ],
      },
    },
  },
];
