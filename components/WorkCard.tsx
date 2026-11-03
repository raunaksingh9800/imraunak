import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Building2, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface WorkCardProps {
  project: Project;
  priority?: boolean;
}

export function WorkCard({ project, priority = false }: WorkCardProps) {
  const isFlagship = project.isFlagship;

  return (
    <article
      className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
        isFlagship
          ? "border-accent-vermilion/40 bg-gradient-to-b from-[#17191C] to-[#101214] shadow-2xl p-6 sm:p-8 md:p-10"
          : "border-white/10 bg-[#121417]/80 hover:border-white/25 hover:bg-[#15171A] p-6 sm:p-8"
      }`}
    >
      {/* Top Meta Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-accent-vermilion tracking-widest">
            /{project.number}
          </span>
          <span className="h-4 w-[1px] bg-white/15" />
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {project.featuredTag && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
              isFlagship
                ? "bg-accent-vermilion/20 text-accent-vermilion border border-accent-vermilion/40"
                : "bg-white/5 text-zinc-300 border border-white/10"
            }`}
          >
            {project.featuredTag}
          </span>
        )}
      </div>

      {/* Main Grid: Headline + Editorial Narrative */}
      <div className={`grid grid-cols-1 ${isFlagship ? "lg:grid-cols-12 gap-8" : "gap-6"}`}>
        <div className={isFlagship ? "lg:col-span-7 space-y-4" : "space-y-4"}>
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-400 block tracking-wider uppercase">
              {project.organization} · {project.location}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-accent-vermilion transition-colors leading-[1.2]">
              <Link href={`/work/${project.slug}`} className="focus:outline-none">
                {project.title}
              </Link>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            {project.headline}
          </p>

          {/* Research & Contribution Highlights */}
          <div className="pt-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
              Documented Impact & Contributions:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5"
                >
                  <span className="text-lg sm:text-xl font-bold font-mono text-white block">
                    {metric.value}
                  </span>
                  <span className="text-xs text-zinc-400 block leading-tight font-sans">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Disciplines & Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.disciplines.slice(0, 4).map((d) => (
              <span
                key={d}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-zinc-400"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Right Preview Showcase (Asymmetric layout for flagship and projects) */}
        <div
          className={`${
            isFlagship ? "lg:col-span-5" : ""
          } flex flex-col justify-between p-5 rounded-xl bg-black/40 border border-white/10`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-3 border-b border-white/10">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Layers className="h-3.5 w-3.5 text-accent-vermilion" />
                Case Study Preview
              </span>
              <span className="text-[11px] text-zinc-500">{project.timeline}</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              <strong className="text-white block font-medium mb-1">Challenge & Approach:</strong>
              {project.context.challenge}
            </p>
          </div>

          <div className="pt-6">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all group-hover:bg-accent-vermilion group-hover:text-black shadow-lg"
            >
              <span>Explore Full Case Study</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

