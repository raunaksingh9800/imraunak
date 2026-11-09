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
    <article className="border border-black bg-white mb-6 select-none shadow-hard-sm transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 overflow-hidden">
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

      {/* Main Content Grid: Concise One Sentence + Project Visual */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left: One concise sentence & View Case Study Link */}
        <div className="md:col-span-7 space-y-4">
          <p className="font-body text-base text-black leading-relaxed m-0 [text-wrap:pretty]">
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
              className="group inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase text-black hover:text-red no-underline border border-black hover:border-red px-3.5 py-2 bg-white hover:bg-light-gray shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            </Link>
          </div>
        </div>

        {/* Right: Project Visual / Schematic */}
        <div className="md:col-span-5">
          <div className="border border-black bg-black p-1 text-white">
            <div className="bg-zinc-900 border border-zinc-700 p-3 font-mono text-xs min-h-[90px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-mid-gray">
                <span>SYSTEM #{project.number}</span>
                <span className="text-red uppercase font-bold">ACTIVE</span>
              </div>
              <div className="text-white font-bold text-xs uppercase my-1">
                {project.visualLabel}
              </div>
              <div className="text-xs text-zinc-400">
                {project.visualDetail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
