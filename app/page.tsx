"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Copy, Check, Mail, Phone, ExternalLink } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ProjectCard, ProjectCardData } from "@/components/ProjectCard";
import { PortfolioIndex } from "@/components/PortfolioIndex";
import {
  WORK_EXPERIENCE,
  LEADERSHIP_EXPERIENCE,
  SKILL_CATEGORIES,
  ACHIEVEMENTS,
} from "@/data/experience";

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raunaksingh9800@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects: ProjectCardData[] = [
    {
      number: "01",
      title: "ITC Limited — Rethinking Inventory Management",
      category: "UX Research · Product Design · Enterprise",
      headline:
        "An inventory management experience designed around the physical workflows of factory floor workers, material handlers, and plant managers.",
      slug: "itc-factory-inventory",
      visualLabel: "ITC Rugged Handheld Terminal",
      visualDetail: "64px glove targets · 30K+ transaction records analyzed · 15% latency reduction",
      metricsSummary: "30+ worker interviews · 10+ mgmt sessions · 30K+ inventory logs",
    },
    {
      number: "02",
      title: "PropPanda — AI-Powered Real Estate",
      category: "Product Design · Conversational AI · B2B",
      headline:
        "A conversational AI platform designed for 8+ Dubai brokerages to qualify international investor leads and automate private viewing tours.",
      slug: "proppanda-ai",
      visualLabel: "PropPanda AI Lead Radar",
      visualDetail: "90% lead qualification reduction · 5K+ listings · 24/7 capture",
      metricsSummary: "8+ Dubai clients · 5,000+ listings · 280ms inference latency",
    },
    {
      number: "03",
      title: "CIA Labs — Campus Social Discovery",
      category: "UX Research · Interaction Design · Gamification",
      headline:
        "An interactive QR-powered campus engagement platform enabling students to discover peers through shared hobbies and gamified challenges.",
      slug: "cialabs-connect",
      visualLabel: "Cialabs QR Campus Pass",
      visualDetail: "1.2s handshake · WCAG AAA accessibility · 4K+ concurrent users",
      metricsSummary: "4,000+ active event attendees · 60 user interviews · 10+ flows",
    },
    {
      number: "04",
      title: "Lluna — Academic Management Ecosystem",
      category: "SaaS · Systems Design · AI Search",
      headline:
        "A multi-role academic platform connecting faculty, students, and administration, powered by semantic vector search to eliminate redundant research.",
      slug: "lluna-ecosystem",
      visualLabel: "Lluna Vector Similarity Radar",
      visualDetail: "100+ faculty surveys · 6 depts unified · 99% lead time cut",
      metricsSummary: "3,000+ active campus users · 400+ capstones indexed",
    },
    {
      number: "05",
      title: "RNK Games — TV Gaming Interface",
      category: "Interaction Design · 10-Foot Living Room UI",
      headline:
        "A minimalist, controller-first gaming dashboard designed for television screens, prioritizing 10-foot distance legibility and instant play.",
      slug: "rnk-games-tv",
      visualLabel: "RNK 10-Foot Living Room Console",
      visualDetail: "1.08x spring focus scale · 5% TV safe margins · D-pad controls",
      metricsSummary: "10-foot couch ergonomics · <16ms input response · 2-click depth",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-12 sm:space-y-16">
      {/* ───────────────────────────────────────────────────────────
          1. SIMPLIFIED, DECLUTTERED HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-black pb-10 sm:pb-14">
        <div className="space-y-6 max-w-4xl">
          {/* Subtle Credibility & Context Line */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 sm:gap-x-4 font-heading text-xs uppercase tracking-wider text-mid-gray">
            <div className="flex items-center gap-1.5 text-black font-bold shrink-0">
              <span className="w-2 h-2 bg-red inline-block" />
              <span>Currently at ITC Limited · Technology Intern</span>
            </div>
            <span className="hidden sm:inline text-black/30">|</span>
            <div className="text-mid-gray break-words">
              <span>Bengaluru, India · Computer Science &amp; Design · Class of 2028</span>
            </div>
          </div>

          {/* Primary Visual Anchor: RAUNAK SINGH */}
          <h1 className="font-display text-3xl min-[380px]:text-4xl min-[480px]:text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black text-black tracking-tight leading-[0.92] uppercase m-0 select-none break-words">
            Raunak Singh.
          </h1>

          {/* Supporting Statement */}
          <p className="font-body text-xl sm:text-2xl md:text-3xl text-black leading-snug font-normal max-w-3xl m-0">
            I design, research, and build digital experiences that{" "}
            <span className="italic font-serif">make complex things feel simple.</span>
          </p>

          {/* Only Three Primary Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="font-heading font-bold text-xs uppercase tracking-wider bg-black hover:bg-zinc-800 text-white px-5 py-3 border border-black no-underline shadow-hard-sm inline-flex items-center gap-2"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-3.5 h-3.5 text-white" />
            </a>

            <a
              href="/raunak-singh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold text-xs uppercase tracking-wider bg-white hover:bg-light-gray text-black px-5 py-3 border border-black no-underline shadow-hard-sm inline-flex items-center gap-2"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray" />
            </a>

            <a
              href="#contact"
              className="font-heading font-bold text-xs uppercase tracking-wider text-black hover:text-red px-3 py-3 no-underline transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. TWO-COLUMN LAYOUT: Compact Left Rail + Right Column
      ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ─────────────────────────────────────────────────────────
            LEFT RAIL (~28% / 4 Cols on Desktop)
        ─────────────────────────────────────────────────────────── */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
          {/* Compact Monochrome Directory */}
          <PortfolioIndex />

          {/* Single Red Callout (Restrained single accent usage) */}
          <div className="border border-black bg-red text-white p-4 shadow-hard-sm">
            <span className="font-heading font-black text-xs uppercase tracking-wider block mb-1.5">
              Available For 2026/2027:
            </span>
            <p className="font-body text-xs text-white/95 leading-relaxed m-0">
              I collaborate with design leaders and engineering teams to research user friction, architect intuitive systems, and deliver production frontend code.
            </p>
            <div className="pt-3">
              <a
                href="mailto:raunaksingh9800@gmail.com"
                className="font-heading font-bold text-[11px] uppercase tracking-wider text-black bg-white hover:bg-light-gray px-3 py-1.5 border border-black no-underline inline-block"
              >
                Request Dialogue ↗
              </a>
            </div>
          </div>
        </aside>

        {/* ─────────────────────────────────────────────────────────
            RIGHT COLUMN (~72% / 8 Cols on Desktop)
        ─────────────────────────────────────────────────────────── */}
        <section className="lg:col-span-8 space-y-14 sm:space-y-18">
          {/* ───────────────────────────────────────────────────────
              SECTION 01: SELECTED WORK
          ───────────────────────────────────────────────────────── */}
          <section id="work" className="scroll-mt-20">
            <SectionEyebrow
              number="01"
              title="Selected Work"
              subtitle="5 production case studies spanning enterprise, AI, and systems."
            />

            <div className="space-y-4">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────
              SECTION 02: ABOUT RAUNAK SINGH
          ───────────────────────────────────────────────────────── */}
          <section id="about" className="scroll-mt-20">
            <SectionEyebrow
              number="02"
              title="About Raunak Singh"
              subtitle="Computer Science & Design Undergraduate · Bengaluru, India"
            />

            <div className="border border-black bg-white p-5 sm:p-6 shadow-hard-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Photo Frame */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="border border-black bg-black p-1 w-full max-w-[200px]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src="/raunak-singh.png"
                        alt="Raunak Singh"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 200px"
                        priority
                      />
                    </div>
                  </div>
                  <span className="font-heading text-[11px] text-mid-gray uppercase tracking-wider mt-2 text-center block">
                    Raunak Singh · Class of 2028
                  </span>
                </div>

                {/* Exact Requested Bio */}
                <div className="md:col-span-8 space-y-3 font-body text-base text-black leading-relaxed">
                  <p className="font-heading font-bold text-base text-black m-0">
                    I&apos;m Raunak, a Computer Science &amp; Design undergraduate based in Bengaluru.
                  </p>

                  <p className="m-0">
                    I enjoy understanding how people interact with technology, identifying friction in complex workflows, and designing experiences that feel intuitive.
                  </p>

                  <p className="m-0">
                    My work spans UX research, interaction design, product development, and engineering. I enjoy getting involved beyond the interface — from interviewing users and mapping journeys to understanding the systems that power the experience.
                  </p>

                  <div className="border-l-2 border-red pl-3 py-1 font-body text-sm font-semibold text-black bg-light-gray/60">
                    &ldquo;Currently, I&apos;m working with ITC Limited, exploring how technology can simplify real-world factory operations.&rdquo;
                  </div>
                </div>
              </div>

              {/* 3 Core Operating Principles */}
              <div className="border-t border-black/20 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 font-body text-xs">
                <div className="space-y-1">
                  <strong className="font-heading font-bold uppercase text-black block tracking-wider">
                    01 · Empirical Inquiry
                  </strong>
                  <p className="text-mid-gray m-0 leading-normal">
                    Field interviews with factory workers in gloves, observation on docks, and quantitative analysis of 30K+ transaction records.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="font-heading font-bold uppercase text-black block tracking-wider">
                    02 · Systemic Architecture
                  </strong>
                  <p className="text-mid-gray m-0 leading-normal">
                    Designing structured information models, intuitive workflows, and low-cognitive-load states that prevent user error.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="font-heading font-bold uppercase text-black block tracking-wider">
                    03 · Technical Feasibility
                  </strong>
                  <p className="text-mid-gray m-0 leading-normal">
                    Building in production Next.js and TypeScript ensures designs balance UX craft with real engineering constraints.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────
              SECTION 03: PROFESSIONAL EXPERIENCE
          ───────────────────────────────────────────────────────── */}
          <section id="experience" className="scroll-mt-20">
            <SectionEyebrow
              number="03"
              title="Professional Experience"
              subtitle="Documented industry roles with visual priority on ITC Limited."
            />

            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className={`border border-black p-5 shadow-hard-sm ${
                    exp.isHighPriority ? "bg-white border-l-4 border-l-red" : "bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-black/20 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-black text-base uppercase text-black m-0">
                        {exp.company}
                      </h3>
                      {exp.isHighPriority && (
                        <span className="font-heading font-black text-[10px] bg-red text-white px-2 py-0.5 uppercase tracking-wider">
                          Current Focus
                        </span>
                      )}
                    </div>
                    <span className="font-heading text-xs text-mid-gray uppercase tracking-wider">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <div className="font-heading font-bold text-xs uppercase text-black mb-2">
                    Role: {exp.role}
                  </div>

                  <p className="font-body text-sm text-black leading-relaxed mb-3 m-0">
                    {exp.summary}
                  </p>

                  <ul className="font-body text-xs text-mid-gray list-disc list-inside space-y-1 m-0">
                    {exp.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="text-black">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────
              SECTION 04: LEADERSHIP & COMMUNITY
          ───────────────────────────────────────────────────────── */}
          <section id="leadership" className="scroll-mt-20">
            <SectionEyebrow
              number="04"
              title="Leadership &amp; Community"
              subtitle="Scaling technical communities recognized by Google."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEADERSHIP_EXPERIENCE.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-black bg-white p-4 shadow-hard-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between border-b border-black/20 pb-1 mb-2 font-heading text-xs">
                      <span className="font-black text-red uppercase">{lead.role}</span>
                      <span className="text-mid-gray">{lead.period}</span>
                    </div>

                    <h4 className="font-heading font-black text-sm uppercase text-black mb-1 m-0">
                      {lead.organization}
                    </h4>

                    <p className="font-body text-xs text-mid-gray leading-relaxed mb-3">
                      {lead.description}
                    </p>

                    <div className="grid grid-cols-3 gap-1 border border-black/20 bg-light-gray p-1.5 text-center font-heading text-[10px] mb-3">
                      {lead.metrics.map((m, idx) => (
                        <div key={idx} className="border-r last:border-r-0 border-black/20">
                          <span className="font-black text-xs text-black block">{m.value}</span>
                          <span className="text-mid-gray uppercase block leading-none">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {lead.recognition && (
                    <div className="border border-black bg-light-gray p-1.5 font-heading font-bold text-[10px] text-black uppercase tracking-wider text-center">
                      ★ {lead.recognition}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────
              SECTION 05: CAPABILITIES MATRIX
          ───────────────────────────────────────────────────────── */}
          <section id="skills" className="scroll-mt-20">
            <SectionEyebrow
              number="05"
              title="Capabilities Matrix"
              subtitle="Applied domain skills. Zero percentage bars."
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div
                  key={cat.category}
                  className="border border-black bg-white p-4 shadow-hard-sm space-y-2"
                >
                  <div className="border-b border-black/20 pb-1">
                    <span className="font-heading font-black text-[10px] text-red uppercase block">
                      0{i + 1}
                    </span>
                    <h4 className="font-heading font-black text-xs uppercase text-black m-0">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="space-y-1 font-heading text-xs">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="py-0.5 border-b border-black/10 last:border-b-0 text-black font-semibold"
                      >
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────
              SECTION 06: ACHIEVEMENTS & MILESTONES
          ───────────────────────────────────────────────────────── */}
          <section id="achievements" className="scroll-mt-20">
            <SectionEyebrow
              number="06"
              title="Achievements"
              subtitle="Verifiable hackathons, academic research, and certifications."
            />

            <div className="border border-black bg-white divide-y divide-black/20 shadow-hard-sm">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="p-3 sm:p-3.5 hover:bg-light-gray flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 transition-colors"
                >
                  <div>
                    <span className="font-heading font-black text-[10px] text-red uppercase tracking-wider mr-2">
                      [{ach.tag}]
                    </span>
                    <span className="font-heading font-bold text-xs uppercase text-black">
                      {ach.title}
                    </span>
                    <span className="font-body text-xs text-mid-gray ml-2">
                      · {ach.institution}
                    </span>
                  </div>
                  <span className="font-heading text-xs text-mid-gray whitespace-nowrap">
                    {ach.date}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────
              SECTION 07: CONTACT SECTION
          ───────────────────────────────────────────────────────── */}
          <section id="contact" className="scroll-mt-20">
            <SectionEyebrow
              number="07"
              title="Have Something Interesting in Mind?"
              subtitle="Direct channels for inquiries, collaborations, and opportunities."
            />

            <div className="border border-black bg-white p-5 sm:p-6 shadow-hard-sm space-y-5">
              <p className="font-body text-base text-black leading-relaxed max-w-2xl m-0">
                I&apos;m always interested in thoughtful conversations, challenging problems, and opportunities to build better digital experiences.
              </p>

              {/* Direct channels grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-heading">
                <div className="border border-black/30 p-2.5 bg-light-gray/40">
                  <span className="text-[10px] text-mid-gray uppercase tracking-wider block mb-0.5">
                    Direct Email:
                  </span>
                  <a
                    href="mailto:raunaksingh9800@gmail.com"
                    className="font-bold text-black hover:text-red underline block truncate"
                  >
                    raunaksingh9800@gmail.com
                  </a>
                </div>

                <div className="border border-black/30 p-2.5 bg-light-gray/40">
                  <span className="text-[10px] text-mid-gray uppercase tracking-wider block mb-0.5">
                    Telephone Line:
                  </span>
                  <a
                    href="tel:+917483901655"
                    className="font-bold text-black hover:text-red block"
                  >
                    +91 7483901655
                  </a>
                </div>

                <div className="border border-black/30 p-2.5 bg-light-gray/40">
                  <span className="text-[10px] text-mid-gray uppercase tracking-wider block mb-0.5">
                    LinkedIn:
                  </span>
                  <a
                    href="https://www.linkedin.com/in/raunak-singh-2525592ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black hover:text-red underline block truncate"
                  >
                    in/raunak-singh-2525592ab ↗
                  </a>
                </div>

                <div className="border border-black/30 p-2.5 bg-light-gray/40">
                  <span className="text-[10px] text-mid-gray uppercase tracking-wider block mb-0.5">
                    GitHub:
                  </span>
                  <a
                    href="https://github.com/raunaksingh9800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black hover:text-red underline block truncate"
                  >
                    github.com/raunaksingh9800 ↗
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="mailto:raunaksingh9800@gmail.com"
                  className="font-heading font-bold text-xs uppercase tracking-wider bg-black hover:bg-zinc-800 text-white px-5 py-3 border border-black no-underline shadow-hard-sm"
                >
                  Send Email Directly
                </a>

                <a
                  href="/raunak-singh-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-bold text-xs uppercase tracking-wider bg-white hover:bg-light-gray text-black px-5 py-3 border border-black no-underline shadow-hard-sm inline-flex items-center gap-1.5"
                >
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="font-heading font-bold text-xs uppercase px-4 py-3 border border-black bg-white hover:bg-light-gray text-black cursor-pointer shadow-hard-sm"
                >
                  {copied ? "Copied Email!" : "Copy Email"}
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
