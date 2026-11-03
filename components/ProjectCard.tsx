"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <article className="border border-black bg-white mb-6 select-none shadow-hard-sm">
      {/* Title Strip */}
      <div className="bg-light-gray border-b border-black px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-baseline gap-2.5">
          <span className="font-heading font-black text-xs text-red tracking-wider">
            {project.number}
          </span>
          <span className="text-black font-heading font-black text-sm uppercase tracking-tight">
            {project.title}
          </span>
        </div>

        <span className="font-heading font-bold text-[11px] text-mid-gray uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Main Content Grid: Concise One Sentence + Project Visual */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left: One concise sentence & View Case Study Link */}
        <div className="md:col-span-7 space-y-4">
          <p className="font-body text-base text-black leading-relaxed m-0">
            {project.headline}
          </p>

          {project.metricsSummary && (
            <div className="font-heading text-xs font-bold text-mid-gray uppercase tracking-wide border-l-2 border-red pl-3">
              {project.metricsSummary}
            </div>
          )}

          <div className="pt-2">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase text-black hover:text-red no-underline border border-black hover:border-red px-3 py-1.5 bg-white hover:bg-light-gray transition-colors"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray group-hover:text-red" />
            </Link>
          </div>
        </div>

        {/* Right: Project Visual / Schematic */}
        <div className="md:col-span-5">
          <div className="border border-black bg-black p-1 text-white">
            <div className="bg-zinc-900 border border-zinc-700 p-3 font-mono text-xs min-h-[90px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] text-mid-gray">
                <span>SYSTEM #{project.number}</span>
                <span className="text-red uppercase font-bold">ACTIVE</span>
              </div>
              <div className="text-white font-bold text-xs uppercase my-1">
                {project.visualLabel}
              </div>
              <div className="text-[10px] text-zinc-400">
                {project.visualDetail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

