import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { PropPandaSimulator } from "@/components/ProjectPrototypes/PropPandaSimulator";

export const metadata: Metadata = {
  title: "PropPanda — Making Real Estate Conversations More Intelligent | Raunak Singh",
  description:
    "An AI-powered real estate platform designed for 8+ Dubai-based clients, supporting 5K+ property listings and leads through conversational AI. Case study by Raunak Singh.",
};

export default function PropPandaPage() {
  const project = PROJECTS.find((p) => p.slug === "proppanda-ai");
  if (!project) notFound();

  return (
    <CaseStudyTemplate
      project={project}
      interactivePrototype={<PropPandaSimulator />}
    />
  );
}

