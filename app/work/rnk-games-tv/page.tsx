import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { RNKTVConsoleSimulator } from "@/components/ProjectPrototypes/RNKTVConsoleSimulator";

export const metadata: Metadata = {
  title: "RNK Games — Gaming, Designed for the Living Room | Raunak Singh",
  description:
    "A minimalist, controller-first gaming dashboard designed specifically for television screens, prioritizing 10-foot viewing distances and effortless navigation. Case study by Raunak Singh.",
};

export default function RNKGamesPage() {
  const project = PROJECTS.find((p) => p.slug === "rnk-games-tv");
  if (!project) notFound();

  return (
    <CaseStudyTemplate
      project={project}
      interactivePrototype={<RNKTVConsoleSimulator />}
    />
  );
}

