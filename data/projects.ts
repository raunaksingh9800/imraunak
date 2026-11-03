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
  metrics: { label: string; value: string; detail?: string }[];
  disciplines: string[];
  tools: string[];
  heroImageAlt: string;
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
  {
    id: "itc-factory",
    slug: "itc-factory-inventory",
    number: "01",
    title: "Rethinking Inventory Management on the Factory Floor",
    headline: "Translating 30K+ inventory transactions and 40+ stakeholder interviews into an error-resilient, low-cognitive-load floor platform.",
    category: "UX Research · Product Design · Enterprise Technology",
    organization: "ITC Limited — Foods Division",
    timeline: "July 2026 – Present",
    location: "Bengaluru, India",
    isFlagship: true,
    featuredTag: "Flagship Case Study",
    description:
      "An inventory management experience designed around the real physical workflows of factory floor workers, material handling operators, and operational leaders.",
    metrics: [
      { label: "Floor Worker Interviews", value: "30+", detail: "Across loaders, operators, and shift leads" },
      { label: "Management Deep Dives", value: "10+", detail: "Procurement, warehouse, and finance heads" },
      { label: "Inventory Records Analyzed", value: "30K+", detail: "PO, GRN, and equipment issue logs" },
      { label: "Decision Latency Reduced", value: "15%", detail: "In operational procurement & floor allocation" },
    ],
    disciplines: [
      "Contextual Inquiry",
      "Field Research",
      "Ergonomic Interface Design",
      "Low-Cognitive-Load UX",
      "Enterprise Systems",
    ],
    tools: ["Figma", "FigJam", "Data Analytics", "Workflow Mapping", "Interactive Prototyping"],
    heroImageAlt: "ITC Factory Inventory Intelligence System interface concept",
    context: {
      client: "ITC Limited (Foods Division)",
      challenge:
        "Factory floor operators were grappling with dense, legacy desktop ERP software running on dusty bay terminals. High cognitive load, small click targets, industrial glove interference, and inconsistent barcode scans caused shipping delays and logging mismatches.",
      solution:
        "Engineered an ergonomic, high-contrast, task-isolated floor interface built for rugged handhelds and floor tablets with one-touch scanning, instant batch verification, and zero manual data reentry.",
      scope: "End-to-end UX research, stakeholder alignment, design system tokens for industrial lighting, and floor-tested prototype architecture.",
    },
    narrative: {
      overview:
        "At ITC Limited's Foods Division in Bengaluru, inventory tracking isn't an abstract digital record — it is tons of raw ingredients, packaging foils, pallet stacks, and strict batch-expiration deadlines moving continuously across noisy manufacturing floors. Despite powerful enterprise ERP backends, the frontline floor interface was creating severe operational friction.",
      problem:
        "Workers handling 50kg bags and pallet jacks had to remove heavy safety gloves to interact with cramped 12-column desktop spreadsheets on communal floor kiosks. In busy morning dispatches, this led to handwritten paper notes, delayed system updates by up to 6 hours, and phantom stock discrepancies across 30,000+ monthly items.",
      environment:
        "High acoustic noise (75-85 dB), harsh overhead fluorescent glare alternating with dim storage bays, workers wearing rubberized safety gloves, fast forklift transit, and semi-skilled operators speaking varied vernacular languages.",
      researchMethodology: {
        title: "Field Research & Operational Shadowing",
        description:
          "Rather than relying on conference-room surveys, we conducted extensive contextual inquiry directly on the active plant floor across morning, evening, and overnight shifts.",
        items: [
          "30+ one-on-one contextual inquiry sessions with material handlers, warehouse loaders, and bay supervisors.",
          "10+ semi-structured interviews with senior plant managers, procurement leads, and finance controllers.",
          "Analysis of 30,000+ historical transactional records (Purchase Orders, Goods Receipt Notes, Store Issue Vouchers).",
          "Ergonomic analysis of physical floor obstacles: glove touch latency, barcode scanner reach, and glare angles.",
          "Workflow timing audits: measuring every second elapsed from pallet arrival at dock to system reconciliation.",
        ],
      },
      insights: {
        title: "Core Field Insights",
        description:
          "The research invalidated the assumption that workers needed 'more features.' What they desperately needed was cognitive relief and physical forgiveness.",
        quote:
          "I have to take off my safety gloves 40 times a day just to tap a tiny 'Submit' button on a screen that doesn't register through greasy screen protectors. It's faster to write it on my palm.",
        quoteAuthor: "Ramu, Senior Material Handler (11 years on floor)",
        findings: [
          {
            title: "The Glove Friction Penalty",
            desc: "Standard 32px buttons failed 68% of the time with industrial nitrile gloves. Operators defaulted to using pens or keys to poke screens, cracking touch displays.",
            stat: "68% fail rate",
          },
          {
            title: "Cognitive Overload in Bay Lighting",
            desc: "Low-contrast grey-on-white tables were unreadable from 2 meters away in dim warehouse aisles, forcing workers to walk back and forth between pallets and terminals.",
            stat: "2.4 km wasted walking/shift",
          },
          {
            title: "Fear of Irreversible Errors",
            desc: "Legacy screens lacked clear confirmation states. Workers feared entering wrong batch codes would halt production, leading to hesitation and workflow hoarding.",
            stat: "4.2 min average delay per receipt",
          },
          {
            title: "Disparate Heavy vs Lightweight Workflows",
            desc: "Bulk raw materials (grain, sugar) require gross tare-weight verification, whereas printed cartons require serialized batch scanning. Forcing both into one generic form caused chronic validation failure.",
            stat: "30K+ records analyzed",
          },
        ],
      },
      personas: [
        {
          role: "Material Handler & Loader",
          name: "Ramu (Floor Operator)",
          quote: "I just need to know which bay this pallet belongs to and tap 'Done'. I can't read tiny tables while driving a forklift.",
          context: "Works 8-hour shifts on active dock bays. Operates barcode scanner while wearing PPE.",
          painPoints: [
            "Removing gloves repeatedly causes safety infractions.",
            "Can't read small font sizes under dim bay lights.",
            "Complex error dialogs require supervisor intervention.",
          ],
          designResponse: "64px touch targets, massive high-contrast typography, single-step camera/laser scanner triggers, and green/amber auditory confirmation beeps.",
        },
        {
          role: "Shift Supervisor",
          name: "Suresh (Floor Operations Lead)",
          quote: "My phone rings all shift because bay workers don't know if a batch was accepted or rejected by quality inspection.",
          context: "Oversees 14 bays. Needs instant visibility into pallet throughput, dock queues, and unresolved discrepancies.",
          painPoints: [
            "Spends 2 hours per shift reconciling paper notes with ERP records.",
            "Lacks real-time floor status when dock bottlenecks form.",
            "Manual overrides take 8 clicks through nested submenus.",
          ],
          designResponse: "Glanceable bay-status radar, one-tap supervisor approvals, and automated mismatch flagging with photo capture.",
        },
      ],
      informationArchitecture: {
        summary:
          "We discarded the legacy 5-level nested ERP tree in favor of a 2-tier role-scoped task architecture organized around physical actions: Receive, Verify, Stow, and Issue.",
        keyShifts: [
          {
            legacy: "14-field multi-tab form with 8 mandatory text inputs",
            redesigned: "Zero-text primary flow: Camera scan auto-populates PO & Item Details",
            why: "Eliminates typo-induced inventory loss and speeds cycle time from 3.5 minutes to 18 seconds.",
          },
          {
            legacy: "Low-contrast subtle grey UI designed for 1080p office monitors",
            redesigned: "High-contrast industrial theme with oversized status pills (800+ nit visibility)",
            why: "Guarantees readability in direct sunlight on loading docks and dark warehouse mezzanine floors.",
          },
          {
            legacy: "Silent error alerts hidden in tiny top-right toast banners",
            redesigned: "Full-width haptic + auditory + colored banner validation with clear recovery paths",
            why: "Overcomes 80dB plant ambient noise so operators never miss an invalid batch rejection.",
          },
        ],
      },
      designDecisions: [
        {
          title: "64px Ergonomic Minimum Touch Targets",
          description:
            "Every interactive touch area was expanded to a minimum of 64×64 physical pixels with 16px safety padding, tested specifically with standard industrial work gloves.",
          rationale: "Zero missed taps during field tests; removed the need for workers to remove safety gear.",
          evidence: "Observed tap accuracy increased from 32% to 99.4% in live testing.",
        },
        {
          title: "Dual Mode: High-Contrast Industrial & Dock Sunlight",
          description:
            "Designed a dedicated ultra-contrast dark theme for dim storage racks and a high-luminance light mode for open loading bays subject to direct Bangalore sunlight.",
          rationale: "Prevents screen wash-out and eye fatigue across fluctuating industrial environments.",
          evidence: "Legibility distance increased from 0.8 meters to 2.6 meters on wall-mounted and forklift tablets.",
        },
        {
          title: "Single-Action Focus Mode",
          description:
            "Stripped all peripheral navigation during an active scanning task. The screen displays only the active pallet, expected quantity, scanned count, and a giant confirm button.",
          rationale: "Reduces cognitive load to near zero for temporary and semi-skilled contract workers.",
          evidence: "Onboarding time for new operators decreased from 3 days to under 25 minutes.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Legacy SAP backend with rigid API response structures and occasional connection drops.",
          "Varying tablet hardware across bays ranging from ruggedized Zebra Android units to iPad kiosks.",
          "Strict manufacturing compliance and hygiene protocols forbidding paper clipboards in certain food zones.",
        ],
        learnings: [
          "Enterprise UX is ergonomic UX: software on a factory floor is as much a physical tool as a wrench or forklift.",
          "Designing for the most constrained user (tired operator at 3 AM in gloves) makes the system exponentially better for everyone.",
          "Real data analytics (30K+ transaction analysis) was essential to prove to senior leadership why workers bypassed legacy screens.",
        ],
      },
    },
  },
  {
    id: "proppanda-ai",
    slug: "proppanda-ai",
    number: "02",
    title: "Making Real Estate Conversations More Intelligent",
    headline: "Designing conversational AI workflows and agent intelligence tools across 5,000+ luxury Dubai listings.",
    category: "Product Design · AI · UX Strategy",
    organization: "genzi.ai",
    timeline: "December 2025 – March 2026",
    location: "Remote, Singapore (Dubai Market)",
    isFlagship: false,
    featuredTag: "AI & Conversational UX",
    description:
      "An AI-powered real estate platform designed for 8+ Dubai-based brokerage clients, supporting 5K+ property listings and incoming international leads.",
    metrics: [
      { label: "Dubai Brokerage Clients", value: "8+", detail: "Leading UAE agencies & broker networks" },
      { label: "Property Listings & Leads", value: "5K+", detail: "Curated luxury & commercial listings" },
      { label: "Lead Qualification Latency", value: "-90%", detail: "From hours down to real-time conversation" },
      { label: "International Capture", value: "24/7", detail: "Multilingual coverage across timezone gaps" },
    ],
    disciplines: [
      "Conversational UI Design",
      "Lead Qualification Systems",
      "Agent Dashboard UX",
      "Multi-turn AI Flows",
      "Information Architecture",
    ],
    tools: ["Figma", "React", "AI Prompt UX", "Journey Mapping", "Design Systems"],
    heroImageAlt: "PropPanda AI real estate assistant and agent intelligence interface",
    context: {
      client: "genzi.ai (Deploying for Dubai Real Estate Clients)",
      challenge:
        "High-net-worth real estate buyers in Dubai enquire across varying timezones (Europe, Asia, Americas). Human agents were overwhelmed by repetitive qualification questions, while buyers abandoned generic static forms and clunky WhatsApp bots.",
      solution:
        "Designed an intelligent conversational AI layer that dynamically presents visual property cards, qualifies buyer budgets and visa intentions in natural language, and seamlessly books calendar tours for top agents.",
      scope: "Conversational dialog flows, interactive property preview cards, agent prioritization dashboard, and appointment scheduling interactions.",
    },
    narrative: {
      overview:
        "Dubai's real estate market operates 24/7 with global investors spanning multiple languages and financial profiles. At genzi.ai, we set out to build PropPanda: a high-trust conversational experience that bridges the gap between cold web portals and warm human broker relationships.",
      problem:
        "Traditional real estate chatbots felt robotic and irritating — forcing buyers into endless dropdown loops. Meanwhile, human brokers were drowning in unqualified leads, wasting 70% of their workday answering basic queries on service charges and payment plans.",
      researchMethodology: {
        title: "Broker Workflow Shadowing & Lead Audits",
        description:
          "Mapped over 500 historical chat logs between brokers and luxury property investors to understand natural dialogue rhythms, qualification milestones, and trust triggers.",
        items: [
          "Audited 500+ anonymized buyer-agent WhatsApp and portal conversations.",
          "Interviewed 12 active Dubai real estate agents and team principals.",
          "Evaluated drop-off points in static lead forms versus conversational chat interfaces.",
          "Identified the 4 critical buyer qualification variables: budget bracket, timeline, residency intent (Golden Visa), and payment plan preference.",
        ],
      },
      insights: {
        title: "Key Conversational UX Insights",
        description:
          "Luxury buyers don't want a questionnaire; they want an informed advisor that displays rich visual proof in real time.",
        findings: [
          {
            title: "Rich Media Anchoring",
            desc: "Text-only bot responses felt like a robot. Embedding responsive interactive property mini-cards inside the conversation maintained buyer interest 3.8x longer.",
            stat: "3.8x session duration",
          },
          {
            title: "Non-Linear Qualification",
            desc: "Buyers frequently pivot (e.g., asking about school districts before disclosing budget). Rigid sequential forms broke down; conversational AI had to infer parameters gracefully.",
            stat: "90% faster qualification",
          },
          {
            title: "Agent Handoff Anxiety",
            desc: "Brokers feared losing control of client relationships. The agent dashboard had to provide complete conversational transcripts and lead heat scores before any call.",
            stat: "100% agent adoption",
          },
        ],
      },
      personas: [
        {
          role: "International Property Investor",
          name: "Marc (London / Dubai Buyer)",
          quote: "I'm browsing at 2 AM UK time. I don't want to wait 12 hours for an agent to email me a PDF brochure that doesn't answer my questions about ROI.",
          context: "Looking for tax-free yield and Golden Visa eligibility in Downtown Dubai.",
          painPoints: ["Static PDF brochures", "Timezone delays", "Aggressive spam calls"],
          designResponse: "Instant contextual ROI calculator cards, interactive floorplans, and friction-free calendar visit slot selection.",
        },
        {
          role: "Luxury Real Estate Broker",
          name: "Laila (Dubai Marina Agency)",
          quote: "If a lead isn't qualified within 15 minutes, they've already contacted two other agencies.",
          context: "Manages 40+ active client pipelines across luxury off-plan developments.",
          painPoints: ["Unqualified window shoppers", "Scattered chat logs across WhatsApp and CRM", "Manual follow-up scheduling"],
          designResponse: "Lead Intelligence Radar card highlighting buyer intent score, pre-qualified budget, and suggested next steps.",
        },
      ],
      informationArchitecture: {
        summary:
          "A unified dual-sided architecture: on the buyer side, an intelligent conversational viewport with inline generative widgets; on the agent side, a prioritized Kanban pipeline with instant AI-summarized insights.",
        keyShifts: [
          {
            legacy: "Static 8-page lead capture form",
            redesigned: "Adaptive conversational dialog with contextual visual recommendations",
            why: "Reduces initial friction while capturing richer intent data.",
          },
          {
            legacy: "Cold CRM email alert with bare name and phone number",
            redesigned: "AI Executive Briefing card with investor intent score and suggested talking points",
            why: "Empowers agents to close deals in their very first touchpoint.",
          },
        ],
      },
      designDecisions: [
        {
          title: "Micro-Interactive Property Cards in Chat",
          description:
            "Engineered inline card components inside chat bubbles featuring swipeable high-res galleries, key ROI metrics, and one-tap tour requests.",
          rationale: "Allows buyers to evaluate properties without navigating away from the conversational flow.",
          evidence: "Click-through rate to schedule private viewings increased by 42%.",
        },
        {
          title: "Buyer Intent Radar & Confidence Scoring",
          description:
            "Designed a visual intent scoring system (Budget, Timeline, Seriousness, Readiness) calculated continuously from conversational markers.",
          rationale: "Helps brokers instantly triage inbound volume and prioritize high-value investors.",
          evidence: "Brokers reported a 60% reduction in wasted call hours on non-serious leads.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "LLM hallucination risks regarding dynamic property pricing and regulatory Golden Visa rules.",
          "Multilingual nuances in Arabic, English, and Russian real estate terminology.",
        ],
        learnings: [
          "Conversational UX requires strict visual guardrails — text alone cannot replace well-designed UI components.",
          "Speed of qualification must be balanced with perceived luxury and bespoke personal service.",
        ],
      },
    },
  },
  {
    id: "cialabs-connect",
    slug: "cialabs-connect",
    number: "03",
    title: "Turning a Campus Into an Interactive Social Experience",
    headline: "Architecting a real-time QR peer discovery platform supporting 4,000+ concurrent users with deep accessibility considerations.",
    category: "UX Research · Interaction Design · Gamification",
    organization: "CIA Labs",
    timeline: "May 2025 – June 2025",
    location: "Bengaluru, India",
    isFlagship: false,
    featuredTag: "Campus Scale & Interaction",
    description:
      "An interactive QR-powered campus engagement platform that enables students to discover peers, connect through shared hobbies, and participate in gamified challenges.",
    metrics: [
      { label: "Concurrent Event Day Users", value: "4K+", detail: "Peak real-time student participation" },
      { label: "User Interviews Conducted", value: "60", detail: "Across all graduating batches & branches" },
      { label: "End-to-End User Flows", value: "10+", detail: "Onboarding, QR handshakes, challenges" },
      { label: "Onboarding Activation", value: "85%", detail: "Faster completion compared to standard portals" },
    ],
    disciplines: [
      "Campus Field Research",
      "QR Interaction Ergonomics",
      "Inclusive & Accessible Design",
      "Gamification Loops",
      "High-Concurrency UX",
    ],
    tools: ["Next.js", "Supabase", "Figma", "User Journey Mapping", "Accessibility Audits"],
    heroImageAlt: "Cialabs Connect real-time campus gamified social platform interface",
    context: {
      client: "CIA Labs (Campus Community Day)",
      challenge:
        "College campus events often suffer from social cliques, social anxiety, and passive bystander participation. Introverted students and students with disabilities felt alienated from conventional stage-centric events.",
      solution:
        "Created an interactive QR-powered social exploration web app where students scan each other's personalized badges, guess shared interests to earn points, and unlock collaborative quests.",
      scope: "Research, interaction design, accessibility guidelines (WCAG AAA contrast, screen reader semantics, vibration feedback), and real-time leaderboard UX.",
    },
    narrative: {
      overview:
        "Campus festivals are meant to build lifelong camaraderie, but for thousands of students, large crowds induce social fatigue. Cialabs Connect flipped the script: turning the entire physical campus into a collaborative social canvas where an introverted first-year could comfortably break the ice with senior project mentors.",
      problem:
        "Prior community events relied on loud announcements and crowded registration desks. 74% of surveyed first-year students reported feeling intimidated to approach peers outside their branch, while students with visual impairments had zero way to participate in visual exhibition scavenger hunts.",
      researchMethodology: {
        title: "60-Student Empathy & Accessibility Study",
        description:
          "Interviewed 60 students spanning freshmen to final years, including members of campus accessibility support groups.",
        items: [
          "60 one-on-one structured interviews across Computer Science, Design, Electronics, and Mechanical branches.",
          "Accessibility focus groups identifying navigational barriers for students with visual and mobility challenges.",
          "Field testing of QR camera latency on varied student Android devices under bright outdoor daylight.",
          "Rapid paper prototype simulation of interest-guessing game mechanics to prevent competitive toxicity.",
        ],
      },
      insights: {
        title: "Key Interaction Findings",
        description:
          "Icebreaking requires an excuse to converse. The interaction mechanism must be brief, playful, and mutually rewarding.",
        findings: [
          {
            title: "The Friction of Manual Typing",
            desc: "Typing handles or phone numbers in a loud hallway created awkward pauses. A 1-second camera QR handshake eliminated all social friction.",
            stat: "1.2s average connect time",
          },
          {
            title: "Interest Guessing Sparks Dialogue",
            desc: "Instead of just trading contacts, showing 3 blurred hobbies and guessing one sparked immediate laughter: 'Wait, you compose modular synth music too?'",
            stat: "89% conversation follow-up",
          },
          {
            title: "Inclusive by First Principle",
            desc: "Adding audio chime cues on successful scan, high-contrast dark mode, and screen-reader accessibility labels allowed students with low vision to fully engage without assistance.",
            stat: "100% WCAG compliance",
          },
        ],
      },
      personas: [
        {
          role: "Introverted Freshman",
          name: "Aarav (1st Year Student)",
          quote: "I don't like going up to strangers and starting small talk. But when scanning someone's QR badge gives me points, it's just fun.",
          context: "Attending their first college festival; hesitant around large groups.",
          painPoints: ["Social hesitation", "Fear of rejection", "Crowded hallways"],
          designResponse: "Game-backed quest loops that normalize spontaneous brief peer interactions.",
        },
        {
          role: "Event Organizer & Stall Lead",
          name: "Pooja (Project Exhibition Lead)",
          quote: "We spent months building our hardware project, but normally people just walk past without asking questions.",
          context: "Hosting an interactive IoT demo stall at the campus tech pavilion.",
          painPoints: ["Low stall engagement", "Crowd bottlenecks", "Difficulty collecting visitor feedback"],
          designResponse: "Stall check-in QR codes with interactive mini-quizzes that rewarded curious visitors.",
        },
      ],
      informationArchitecture: {
        summary:
          "A bottom-anchored mobile layout designed for single-thumb ergonomics while walking between campus pavilions.",
        keyShifts: [
          {
            legacy: "Static social media handle sharing",
            redesigned: "Dynamic live QR passport with real-time peer interest guessing",
            why: "Turns contact exchange into a 30-second cooperative game.",
          },
          {
            legacy: "Dense leaderboard showing only top 5 overachievers",
            redesigned: "Tier-based milestone rewards (Bronze, Silver, Gold, Platinum) with personal progress",
            why: "Prevents discouragement and keeps casual participants engaged throughout the festival.",
          },
        ],
      },
      designDecisions: [
        {
          title: "Thumb-Zone QR Scanner & Instant Haptic Feedback",
          description:
            "Placed the camera scanner in the natural thumb reach zone with subtle vibration and audio confirmations upon successful peer handshake.",
          rationale: "Guarantees rapid scanning while navigating dense physical crowds.",
          evidence: "Average time to complete peer handshake dropped from 14s to under 2s.",
        },
        {
          title: "Accessible High-Contrast Design System",
          description:
            "Crafted a high-contrast visual system adhering to WCAG AAA standards with large touch zones and full screen-reader semantic trees.",
          rationale: "Ensured every student, regardless of visual or physical ability, enjoyed equal festival participation.",
          evidence: "Commended by campus student council for the most inclusive event app in campus history.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Spotty campus Wi-Fi infrastructure with sudden packet drops across 4,000 simultaneous users.",
          "Varying budget smartphone camera sensors and scratched lens covers.",
        ],
        learnings: [
          "Gamification should facilitate real human connection, not trap users in a screen.",
          "Optimistic UI updates and local caching are essential for live event platforms under heavy network congestion.",
        ],
      },
    },
  },
  {
    id: "lluna-ecosystem",
    slug: "lluna-ecosystem",
    number: "04",
    title: "Simplifying Academic Administration Through Connected Experiences",
    headline: "Unifying faculty, students, and department leadership across 6 engineering departments into a coherent SaaS platform.",
    category: "UX Research · Product Design · SaaS",
    organization: "Lluna Ecosystem",
    timeline: "May 2026 – Present",
    location: "Bengaluru, India",
    isFlagship: false,
    featuredTag: "SaaS & Systems Design",
    description:
      "An AI-powered academic management ecosystem connecting faculty, students, and administrators through interconnected platforms.",
    metrics: [
      { label: "Active Campus Users", value: "3K+", detail: "Students, professors, and department heads" },
      { label: "Faculty Surveys & Interviews", value: "100+", detail: "Deep-dive workflow friction discovery" },
      { label: "Processing Lead Time", value: "-99%", detail: "From weeks of paper approvals to instant digital routing" },
      { label: "Departments Unified", value: "6", detail: "CSE, ISE, ECE, Mech, Civil, Innovation Cell" },
    ],
    disciplines: [
      "Cross-Functional Stakeholder Research",
      "SaaS Design Systems",
      "Multi-Role Permission Architectures",
      "Vector Search Discovery",
      "Cognitive Workload Auditing",
    ],
    tools: ["Next.js", "Figma", "Supabase", "Vector Embeddings", "Design Tokens"],
    heroImageAlt: "Lluna academic management ecosystem cross-role dashboards",
    context: {
      client: "Lluna Ecosystem (Engineering College Deployment)",
      challenge:
        "Colleges run on fragmented silos: project evaluations on paper clipboards, capstone proposals in email threads, thesis documents on scattered drives. Faculty suffered chronic cognitive fatigue, while students faced weeks of bureaucratic delay.",
      solution:
        "Designed an integrated, multi-role SaaS platform with distinct tailored dashboards for Faculty, Students, and HODs, powered by semantic vector search to instantly eliminate duplicate capstone research and streamline mentor matching.",
      scope: "User interviews, workflow mapping, design system creation, role-based authorization UI, and semantic search interface design.",
    },
    narrative: {
      overview:
        "Higher education administration is notoriously tangled. A single capstone project submission requires 7 stages of approval across guide professors, ethics committees, department heads, and external examiners. Lluna replaced the chaos of paper folders with a coherent, transparent digital operating system.",
      problem:
        "Over 100 faculty interviews revealed that professors spent 12+ hours per week chasing paper signatures and reviewing project proposals that duplicated work done two years prior. Students had zero visibility into proposal review states, creating anxiety and missed academic deadlines.",
      researchMethodology: {
        title: "100+ Faculty Surveys & Workflow Diagnostics",
        description:
          "Conducted comprehensive mixed-method research across senior professors, adjunct instructors, and student representatives.",
        items: [
          "100+ survey responses analyzing time spent per week on administrative paperwork vs teaching.",
          "20 in-depth contextual interviews with Department Heads (HODs) on evaluation bottlenecks.",
          "Cognitive workload mapping of the 7-stage capstone submission lifecycle.",
          "AI-assisted A/B testing of information density across faculty grading tables.",
        ],
      },
      insights: {
        title: "Core Workflow Diagnostics",
        description:
          "Different roles require fundamentally different information density and interaction paradigms.",
        findings: [
          {
            title: "Faculty Need High Density, Zero Jargon",
            desc: "Professors evaluating 60 projects in an afternoon hated decorative whitespace. They needed keyboard-navigable grading matrices with inline PDF previews.",
            stat: "3.2x faster evaluation",
          },
          {
            title: "Students Need Transparent Progress",
            desc: "Students feared the 'black hole' of submissions. A clear visual pipeline tracker reduced repetitive inquiries by 94%.",
            stat: "94% fewer support tickets",
          },
          {
            title: "Semantic Duplicate Detection",
            desc: "Every year, students unknowingly submitted identical projects. Introducing semantic vector search flagged thematic overlaps in real time before submission.",
            stat: "400+ capstones indexed",
          },
        ],
      },
      personas: [
        {
          role: "Professor & Capstone Guide",
          name: "Dr. Revathi (Associate Professor, CSE)",
          quote: "I love mentoring research, but I hate spending half my day checking whether a student has cleared prerequisite forms.",
          context: "Guides 8 project teams while lecturing 3 courses.",
          painPoints: ["Scattered email attachments", "Losing track of version revisions", "Repetitive manual rubrics"],
          designResponse: "Inline side-by-side paper annotation, 1-click rubric scoring, and automated revision changelogs.",
        },
        {
          role: "Department Head (HOD)",
          name: "Dr. Nataraj (Head of Department)",
          quote: "I need high-level accreditation compliance metrics, not 50 individual emails requesting signature authorizations.",
          context: "Responsible for department NBA/NAAC accreditation and curriculum compliance.",
          painPoints: ["Lack of macro visibility", "Chasing missing student scores", "Audit panic"],
          designResponse: "Accreditation-ready export tables, cohort performance distributions, and batch sign-offs.",
        },
      ],
      informationArchitecture: {
        summary:
          "Role-tailored interfaces built upon a shared design system core: Faculty focus on speed and annotation; Students on milestone clarity; HODs on macro analytics.",
        keyShifts: [
          {
            legacy: "Fragmented physical binders and email threads",
            redesigned: "Unified digital project dossier with real-time audit trails",
            why: "Ensures institutional memory and seamless accreditation audits.",
          },
          {
            legacy: "Keyword-based project archive search that failed on synonyms",
            redesigned: "Semantic vector similarity engine visualizing research clusters",
            why: "Connects cross-disciplinary research and prevents redundant student work.",
          },
        ],
      },
      designDecisions: [
        {
          title: "Split-Screen Fast Evaluation Matrix",
          description:
            "Created a split-pane interface: document preview on the left, rubric evaluation with keyboard shortcuts (1-5 score, Tab, Next) on the right.",
          rationale: "Allows faculty to grade capstone submissions without downloading files or opening new browser tabs.",
          evidence: "Grading time per project decreased from 14 minutes to 3.8 minutes.",
        },
        {
          title: "Semantic Similarity Pre-Flight Check",
          description:
            "Implemented an instant vector-similarity radar as students draft project abstracts, showing thematic closeness to previous years' archives.",
          rationale: "Encourages originality and collaboration before proposals are locked in.",
          evidence: "Duplicate proposal resubmissions dropped by 82% across all 6 departments.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Wide generational spectrum in faculty tech-literacy, requiring radical clarity over trendy UI conventions.",
          "Strict statutory privacy regulations regarding student academic performance records.",
        ],
        learnings: [
          "In enterprise SaaS, respect the user's muscle memory: dense tabular layouts beat spacious cards when evaluating volume.",
          "System adoption hinges on solving the busiest user's pain point (the faculty member).",
        ],
      },
    },
  },
  {
    id: "rnk-games",
    slug: "rnk-games-tv",
    number: "05",
    title: "Gaming, Designed for the Living Room",
    headline: "Pioneering a minimalist, controller-first TV dashboard engineered for 10-foot viewing distances and instant immersion.",
    category: "Interaction Design · Interface Design",
    organization: "RNK Games",
    timeline: "2025",
    location: "Bengaluru, India",
    isFlagship: false,
    featuredTag: "10-Foot UI & TV Ergonomics",
    description:
      "A minimalist, controller-first gaming dashboard designed specifically for television screens, prioritizing distance legibility and effortless navigation.",
    metrics: [
      { label: "Optimal Viewing Distance", value: "10-Ft", detail: "Designed for living room couch ergonomics" },
      { label: "D-Pad Input Latency", value: "<16ms", detail: "Instant directional feedback loop" },
      { label: "Interface Clutter Reduction", value: "-60%", detail: "Compared to modern cluttered console stores" },
      { label: "Navigation Depth", value: "2 Clicks", detail: "From boot to launching any library title" },
    ],
    disciplines: [
      "10-Foot Ergonomics",
      "Controller-First Navigation",
      "Overscan & Safe Zone Design",
      "Focus State Physics",
      "Dark Room Atmosphere",
    ],
    tools: ["Figma", "Interaction Prototyping", "Gamepad API", "CSS Focus Physics", "Living Room Field Testing"],
    heroImageAlt: "RNK Games controller-first 10-foot living room TV dashboard",
    context: {
      client: "RNK Games (Concept & Production Prototype)",
      challenge:
        "Modern console and smart TV gaming dashboards are overrun with advertisements, microscopic text, slow animations, and 5-row deep nested menus. Players just want to turn on the screen, pick up a controller, and play.",
      solution:
        "Engineered an art-directed, ultra-minimalist living room TV interface centered on smooth D-pad focus states, cinematic cover art, glanceable status, and zero ad pollution.",
      scope: "D-pad focus engine, 10-foot typographic hierarchy, TV overscan compliance, audio-visual feedback choreography, and quick-resume flows.",
    },
    narrative: {
      overview:
        "The living room television is a unique design canvas. Unlike smartphones (12 inches away) or laptops (20 inches away), a TV is viewed from 8 to 12 feet away in varied ambient lighting. RNK Games is a study in spatial interaction: proving that television interfaces can be quiet, respectful, and breathtakingly fast.",
      problem:
        "Current mainstream console dashboards treat the television like an ad-supported desktop web page — tiny text, auto-playing video noise, cluttered notifications, and complex store traps. The cognitive fatigue before even launching a game was palpable.",
      researchMethodology: {
        title: "10-Foot Ergonomic Testing & Focus Dynamics",
        description:
          "Tested interaction patterns from 10 feet away across multiple TV screen sizes (43\", 55\", 65\") and ambient lighting conditions.",
        items: [
          "Ergonomic measurement of text legibility at 10 feet: minimum font sizes, letter spacing, and line heights.",
          "D-pad navigation audits: measuring click-depth required to resume the last played game.",
          "Overscan and safe-zone compliance across varied television manufacturer display borders.",
          "Gamepad focus state physics: tuning spring damping and scale animations for instantaneous spatial orientation.",
        ],
      },
      insights: {
        title: "TV Ergonomic Principles",
        description:
          "Designing for the living room requires unlearning desktop and mobile UI instincts.",
        findings: [
          {
            title: "The 10-Foot Glance Rule",
            desc: "Text below 24px is nearly unreadable from a couch. Headlines must be 48-72px bold with high contrast against cinematic background artwork.",
            stat: "72px primary scale",
          },
          {
            title: "Deterministic D-Pad Geometry",
            desc: "If a user presses 'Right', the focus ring must move strictly horizontally. Diagonal ambiguity causes disorientation.",
            stat: "100% predictable focus",
          },
          {
            title: "Auditory Feedback is Half the UI",
            desc: "In the absence of touch haptics, subtle, soft audio blips upon selection anchor spatial awareness without annoying room occupants.",
            stat: "4 custom acoustic cues",
          },
        ],
      },
      personas: [
        {
          role: "Casual Living Room Gamer",
          name: "Vikram (Couch Player)",
          quote: "I only have 45 minutes to relax after work. I don't want to spend 10 minutes navigating updates and store banners just to continue my game.",
          context: "Plays on a 55-inch 4K TV in a dimly lit living room.",
          painPoints: ["Ad banners on home screen", "Tiny text unreadable from couch", "Slow unresponsive menus"],
          designResponse: "Instant boot to last played title with a 1-button 'Press A to Resume' action.",
        },
      ],
      informationArchitecture: {
        summary:
          "A single horizontal ribbon axis: Recent Games, Full Library, System Settings. Secondary details slide up smoothly without replacing the visual anchor.",
        keyShifts: [
          {
            legacy: "Multi-row grid with 20 tiny game tiles and sponsored banners",
            redesigned: "Cinematic spotlight carousel with ambient background tinting",
            why: "Creates an immersive, theater-quality atmosphere.",
          },
          {
            legacy: "Deep modal dialogs for basic storage and battery checks",
            redesigned: "Glanceable top-right ambient indicators (Controller battery, audio status, local time)",
            why: "Keeps essential status visible without interrupting game selection.",
          },
        ],
      },
      designDecisions: [
        {
          title: "1.08x Scale Spring Focus States",
          description:
            "Active items elevate with a subtle 1.08x scale, a crisp 2px luminous border, and a gentle ambient glow that shifts with the game's key art color palette.",
          rationale: "Ensures the player's eye never loses the active cursor position, even when looking away.",
          evidence: "Zero navigational confusion across living room user tests.",
        },
        {
          title: "Contextual Quick-Action Tray",
          description:
            "Pressing 'Y' or 'Down' on any game opens a minimal tray showing achievements, friends playing, and cloud save sync status.",
          rationale: "Keeps the primary view clean while making power-user features accessible within one click.",
          evidence: "Navigation depth reduced by 3 levels compared to standard console home screens.",
        },
      ],
      constraintsAndLearnings: {
        constraints: [
          "Strict TV safe zones (5% border buffer) to prevent edge clipping on legacy displays.",
          "Controller-only input constraint: absolutely no mouse cursor or touch gestures.",
        ],
        learnings: [
          "Restraint is the ultimate luxury in entertainment UI: what you leave out matters more than what you put in.",
          "10-foot design forces absolute typographic discipline.",
        ],
      },
    },
  },
];

