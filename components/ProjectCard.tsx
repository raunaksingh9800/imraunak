"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Activity, Eye, Cpu } from "lucide-react";

export interface ProjectCardData {
  number: string;
  title: string;
  category: string;
  headline: string;
  slug: string;
  visualLabel: string;
  visualDetail: string;
  metricsSummary?: string;
}

export function ProjectCard({ project }: { project: ProjectCardData }) {
  // Mini interactive state for each card schematic
  const [activeTab, setActiveTab] = useState<number>(0);

  // Dynamic schematic modes based on project
  const tabsBySlug: Record<string, { label: string; readout: string; metric: string }[]> = {
    "cialabs-connect": [
      { label: "QR PASS", readout: "SCAN PROTOCOL // 120ms verification at campus gates", metric: "4,000+ PASSES" },
      { label: "AI DISCOVERY", readout: "GEMINI FLASH ENGINE // Natural language student search", metric: "60 INTERVIEWS" },
    ],
    "lluna-ecosystem": [
      { label: "EVALO", readout: "FACULTY PORTAL // Exam grading matrix & compliance logging", metric: "100+ FACULTY" },
      { label: "STUDENT", readout: "STUDENT DASHBOARD // Attendance alerts & unified records", metric: "3,000+ USERS" },
      { label: "ADMIN", readout: "INSTITUTIONAL CORE // Role permissions & academic audits", metric: "3 CONNECTED APPS" },
    ],
    "proppanda-ai": [
      { label: "RADAR", readout: "MULTI-TURN DIALOGUE // Lead intent extraction engine", metric: "90% TIME SAVED" },
      { label: "BROKERAGE", readout: "DUBAI CRM // Automated luxury inventory distribution", metric: "280ms LATENCY" },
    ],
    "custom-creations": [
      { label: "GALLERY", readout: "MASONRY SYSTEM // High-density visual artifact showcase", metric: "14 ARTIFACTS" },
      { label: "LIGHTBOX", readout: "FULLSCREEN ZOOM // Raw pixel inspection with keyboard nav", metric: "100% UNFILTERED" },
    ],
  };

  const tabs = tabsBySlug[project.slug] || [
    { label: "PRIMARY", readout: project.visualDetail, metric: "SYSTEM VERIFIED" },
    { label: "METRICS", readout: project.metricsSummary || "Production System", metric: "ACTIVE" },
  ];

  const currentTab = tabs[activeTab % tabs.length];

  return (
    <article className="border border-black bg-white mb-6 select-none shadow-hard-sm transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-hard overflow-hidden group">
      {/* Title Strip */}
      <div className="bg-light-gray border-b border-black px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-baseline gap-2.5 min-w-0">
          <span className="font-heading font-black text-xs text-red tracking-wider shrink-0">
            {project.number}
          </span>
          <h3 className="text-black font-heading font-black text-xs sm:text-sm uppercase tracking-tight break-words m-0 [text-wrap:balance]">
            {project.title}
          </h3>
        </div>

        <span className="font-heading font-bold text-xs text-mid-gray uppercase tracking-wider shrink-0">
          {project.category}
        </span>
      </div>

      {/* Main Content Grid: Concise Headline + Live Interactive Schematic */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left: Headline & Actions */}
        <div className="md:col-span-7 space-y-4">
          <p className="font-body text-base text-black leading-relaxed m-0 [text-wrap:pretty]">
            {project.headline}
          </p>

          {project.metricsSummary && (
            <div className="font-heading text-xs font-bold text-black uppercase tracking-wide px-2.5 py-1 bg-light-gray border border-black/30 inline-flex items-center gap-2 shadow-hard-sm">
              <span className="w-1.5 h-1.5 bg-red inline-block" />
              <span>{project.metricsSummary}</span>
            </div>
          )}

          <div className="pt-2">
            <Link
              href={`/work/${project.slug}`}
              className="group/btn inline-flex items-center gap-2 font-heading font-bold text-xs uppercase text-black hover:text-white hover:bg-black no-underline border border-black px-3.5 py-2 bg-white shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            </Link>
          </div>
        </div>

        {/* Right: Live Interactive Schematic Terminal */}
        <div className="md:col-span-5">
          <div className="border border-black bg-black p-1 text-white shadow-hard-sm">
            <div className="bg-zinc-950 border border-zinc-800 p-3 font-mono text-xs min-h-[115px] flex flex-col justify-between overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between text-xs text-mid-gray border-b border-zinc-800/80 pb-1.5 mb-2">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-red" />
                  <span className="text-zinc-400 font-bold">SYS_0{project.number}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-red animate-pulse inline-block" />
                  <span className="text-red font-bold uppercase">{currentTab.metric}</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 mb-2">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-2 py-0.5 text-[10px] sm:text-xs font-mono uppercase border transition-colors duration-150 ${
                      activeTab === idx
                        ? "bg-white text-black border-white font-bold"
                        : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Live Readout */}
              <div className="text-zinc-300 font-mono text-xs leading-snug">
                <div className="text-white font-bold text-xs uppercase mb-0.5">
                  {project.visualLabel}
                </div>
                <div className="text-zinc-400 text-[11px]">
                  &gt; {currentTab.readout}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
