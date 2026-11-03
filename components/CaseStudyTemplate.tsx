"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Project, PROJECTS } from "@/data/projects";
import { SectionEyebrow } from "./SectionEyebrow";

interface CaseStudyTemplateProps {
  project: Project;
  interactivePrototype?: React.ReactNode;
}

export function CaseStudyTemplate({
  project,
  interactivePrototype,
}: CaseStudyTemplateProps) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-12 sm:space-y-16">
      {/* ───────────────────────────────────────────────────────────
          1. BREADCRUMBS & RETURN NAVIGATION
      ──────────────────────────────────────────────────────────── */}
      <div className="border-b border-black pb-3 flex flex-wrap items-center justify-between text-xs font-heading font-bold uppercase gap-2">
        <Link
          href="/#work"
          className="text-black hover:text-red no-underline flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Selected Work</span>
        </Link>
        <span className="text-mid-gray">
          Project {project.number} of 05 · {project.organization}
        </span>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. CASE STUDY HERO HEADER
      ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-black pb-10 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-xs text-red uppercase tracking-wider">
              {project.number} — {project.organization}
            </span>
            <span className="text-black/30">|</span>
            <span className="font-heading font-bold text-xs text-mid-gray uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-[1.05] m-0">
            {project.title}
          </h1>
        </div>

        <p className="font-body text-lg sm:text-xl text-black leading-relaxed max-w-3xl m-0">
          {project.headline}
        </p>

        {/* Quantified Research Contributions Grid */}
        <div className="border border-black bg-white p-4 shadow-hard-sm mt-6">
          <div className="font-heading font-black text-[11px] uppercase tracking-wider text-black border-b border-black/20 pb-1.5 mb-3">
            Documented Contributions &amp; Verified Impact Benchmarks:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="border-r last:border-r-0 border-black/20 px-2">
                <span className="font-heading font-black text-2xl text-black block leading-none">
                  {m.value}
                </span>
                <span className="font-heading font-bold text-xs text-black block mt-1">
                  {m.label}
                </span>
                {m.detail && (
                  <span className="font-body text-[11px] text-mid-gray block mt-0.5">
                    {m.detail}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 01: CONTEXT & ENVIRONMENT
      ──────────────────────────────────────────────────────────── */}
      <section>
        <SectionEyebrow
          number="01"
          title="Context &amp; Environment"
          subtitle="Understanding physical constraints, user workflows, and baseline friction."
        />

        <div className="border border-black bg-white p-5 sm:p-6 shadow-hard-sm space-y-4">
          <p className="font-body text-base text-black leading-relaxed m-0">
            {project.narrative.overview}
          </p>

          <div className="border-l-2 border-red pl-4 py-1 bg-light-gray font-body text-sm text-black">
            <strong className="font-heading font-bold text-xs uppercase text-red block mb-0.5">
              The Operational Problem:
            </strong>
            {project.narrative.problem}
          </div>

          {project.narrative.environment && (
            <div className="border border-black/20 bg-white p-3 font-heading text-xs text-black">
              <strong className="font-bold uppercase text-black block mb-0.5">
                Physical Operating Conditions on the Floor:
              </strong>
              <span className="font-body text-sm text-mid-gray">
                {project.narrative.environment}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 02: RESEARCH METHODOLOGY & FIELD INQUIRY
      ──────────────────────────────────────────────────────────── */}
      <section>
        <SectionEyebrow
          number="02"
          title="Research Methodology &amp; Field Inquiry"
          subtitle="Empirical qualitative research, workflow shadowing, and transaction data analysis."
        />

        <div className="border border-black bg-white p-5 sm:p-6 shadow-hard-sm space-y-5">
          <p className="font-body text-base text-black leading-relaxed m-0">
            {project.narrative.researchMethodology.description}
          </p>

          <div className="border border-black/20 bg-light-gray/60 p-4 space-y-2">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-black border-b border-black/20 pb-1">
              Field Protocols &amp; Inquiry Process:
            </div>
            <ul className="space-y-1 font-body text-sm text-black list-disc list-inside m-0">
              {project.narrative.researchMethodology.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Authentic Field Quote */}
          {project.narrative.insights.quote && (
            <div className="border-l-2 border-black pl-4 py-2 font-body text-base italic text-black bg-light-gray">
              &ldquo;{project.narrative.insights.quote}&rdquo;
              {project.narrative.insights.quoteAuthor && (
                <div className="font-heading text-xs font-bold not-italic text-mid-gray mt-1">
                  — {project.narrative.insights.quoteAuthor}
                </div>
              )}
            </div>
          )}

          {/* Core Findings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.narrative.insights.findings.map((f, i) => (
              <div key={i} className="border border-black/30 bg-white p-3.5 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-xs uppercase text-black m-0">
                    {f.title}
                  </h4>
                  {f.stat && (
                    <span className="font-heading font-black text-[10px] bg-black text-white px-1.5 py-0.5">
                      {f.stat}
                    </span>
                  )}
                </div>
                <p className="font-body text-xs text-mid-gray leading-snug m-0">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 03: USER PERSONAS & WORKFLOWS
      ──────────────────────────────────────────────────────────── */}
      <section>
        <SectionEyebrow
          number="03"
          title="User Personas &amp; Workflows"
          subtitle="Mapping real operators, shift leads, and operational management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.narrative.personas.map((persona, i) => (
            <div
              key={i}
              className="border border-black bg-white p-5 shadow-hard-sm space-y-3"
            >
              <div className="border-b border-black/20 pb-2">
                <span className="font-heading font-black text-[10px] text-red uppercase tracking-wider block">
                  Role #{i + 1}: {persona.role}
                </span>
                <h4 className="font-heading font-black text-sm uppercase text-black m-0 mt-0.5">
                  {persona.name}
                </h4>
                <p className="font-body text-xs text-mid-gray m-0 mt-0.5">{persona.context}</p>
              </div>

              <div className="font-body text-xs italic text-black bg-light-gray p-2.5">
                &ldquo;{persona.quote}&rdquo;
              </div>

              <div className="space-y-1">
                <strong className="font-heading font-bold text-[10px] uppercase text-black block tracking-wider">
                  Workflow Friction Points:
                </strong>
                <ul className="font-body text-xs text-mid-gray list-disc list-inside space-y-0.5 m-0">
                  {persona.painPoints.map((pt, idx) => (
                    <li key={idx} className="text-black">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-black/20 pt-2 font-body text-xs text-black">
                <strong className="font-heading font-bold text-[10px] uppercase text-red block tracking-wider">
                  Design Response:
                </strong>
                {persona.designResponse}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 04: INFORMATION ARCHITECTURE & REDESIGN
      ──────────────────────────────────────────────────────────── */}
      <section>
        <SectionEyebrow
          number="04"
          title="Information Architecture &amp; Redesign"
          subtitle="Replacing nested legacy trees with streamlined task architectures."
        />

        <div className="border border-black bg-white p-5 sm:p-6 shadow-hard-sm space-y-4">
          <p className="font-body text-sm text-black leading-relaxed m-0">
            {project.narrative.informationArchitecture.summary}
          </p>

          <div className="space-y-3">
            {project.narrative.informationArchitecture.keyShifts.map((shift, i) => (
              <div key={i} className="border border-black/30 p-3 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-light-gray border border-black/20 p-2.5">
                    <span className="font-heading font-bold text-[10px] text-mid-gray uppercase block mb-1">
                      Legacy System Pain:
                    </span>
                    <span className="font-body text-black">{shift.legacy}</span>
                  </div>

                  <div className="bg-white border border-black p-2.5">
                    <span className="font-heading font-black text-[10px] text-red uppercase block mb-1">
                      Engineered Solution:
                    </span>
                    <span className="font-body text-black font-semibold">{shift.redesigned}</span>
                  </div>
                </div>

                <div className="font-body text-xs text-mid-gray border-t border-black/10 pt-1">
                  <strong className="text-black font-heading font-bold text-[10px] uppercase">
                    Rationale:{" "}
                  </strong>
                  {shift.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 05: INTERACTIVE PROTOTYPE VERIFICATION
      ──────────────────────────────────────────────────────────── */}
      {interactivePrototype && (
        <section>
          <SectionEyebrow
            number="05"
            title="Interactive Verification Simulator"
            subtitle="Simulate real-time application states and ergonomics directly in browser."
          />

          <div className="border border-black bg-white p-4 sm:p-5 shadow-hard-sm">
            <div className="mb-4 pb-2 border-b border-black/20 flex flex-wrap items-center justify-between gap-2">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-black">
                Verification Protocol
              </span>
              <span className="font-heading font-bold text-[10px] bg-black text-white px-2 py-0.5 uppercase tracking-wider">
                Live Prototype
              </span>
            </div>

            {interactivePrototype}
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 06: DESIGN DECISIONS & RATIONALE
      ──────────────────────────────────────────────────────────── */}
      <section>
        <SectionEyebrow
          number="06"
          title="Design Decisions &amp; Rationale"
          subtitle="Evidence-based architectural choices tested against physical operating realities."
        />

        <div className="space-y-3">
          {project.narrative.designDecisions.map((decision, i) => (
            <div
              key={i}
              className="border border-black bg-white p-4 sm:p-5 shadow-hard-sm space-y-2"
            >
              <div className="flex items-center justify-between border-b border-black/20 pb-1.5">
                <h4 className="font-heading font-black text-sm uppercase text-black m-0">
                  Decision #{i + 1}: {decision.title}
                </h4>
                <span className="font-heading font-bold text-[10px] bg-black text-white px-2 py-0.5 uppercase">
                  Verified
                </span>
              </div>

              <p className="font-body text-sm text-black leading-relaxed m-0">
                {decision.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-body text-xs">
                <div className="border border-black/20 bg-light-gray p-2.5">
                  <strong className="font-heading text-[10px] uppercase text-black block mb-0.5">
                    Design Rationale:
                  </strong>
                  {decision.rationale}
                </div>
                <div className="border border-black/20 bg-white p-2.5">
                  <strong className="font-heading text-[10px] uppercase text-red block mb-0.5">
                    Empirical Evidence &amp; Impact:
                  </strong>
                  {decision.evidence}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          CHAPTER 07: CONSTRAINTS & STRATEGIC LEARNINGS
      ──────────────────────────────────────────────────────────── */}
      <section>
        <SectionEyebrow
          number="07"
          title="Constraints &amp; Learnings"
          subtitle="Honest appraisal of technical bottlenecks and key product takeaways."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-black bg-white p-5 shadow-hard-sm space-y-2">
            <h4 className="font-heading font-black text-xs uppercase text-red border-b border-black/20 pb-1.5 m-0">
              Technical &amp; Physical Constraints:
            </h4>
            <ul className="font-body text-xs text-black list-disc list-inside space-y-1 m-0">
              {project.narrative.constraintsAndLearnings.constraints.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="border border-black bg-white p-5 shadow-hard-sm space-y-2">
            <h4 className="font-heading font-black text-xs uppercase text-black border-b border-black/20 pb-1.5 m-0">
              Strategic Product Learnings:
            </h4>
            <ul className="font-body text-xs text-black list-disc list-inside space-y-1 m-0">
              {project.narrative.constraintsAndLearnings.learnings.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          PAGINATION: PREVIOUS / NEXT CASE STUDIES
      ──────────────────────────────────────────────────────────── */}
      <nav className="border-t border-black pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 select-none">
        <Link
          href={`/work/${prevProject.slug}`}
          className="border border-black bg-white hover:bg-light-gray p-3 text-left no-underline shadow-hard-sm flex-1"
        >
          <span className="font-heading text-[10px] text-mid-gray uppercase block">
            &lt;&lt; Previous Project ({prevProject.number}):
          </span>
          <span className="font-heading font-black text-xs text-black uppercase block truncate">
            {prevProject.title}
          </span>
        </Link>

        <Link
          href="/#work"
          className="border border-black bg-white hover:bg-light-gray p-3 text-center no-underline shadow-hard-sm font-heading font-bold text-xs uppercase text-black"
        >
          All 5 Projects
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="border border-black bg-white hover:bg-light-gray p-3 text-right no-underline shadow-hard-sm flex-1"
        >
          <span className="font-heading text-[10px] text-mid-gray uppercase block">
            Next Project ({nextProject.number}) &gt;&gt;:
          </span>
          <span className="font-heading font-black text-xs text-black uppercase block truncate">
            {nextProject.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
