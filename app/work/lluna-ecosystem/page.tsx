import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { LlunaRoleSwitcher } from "@/components/ProjectPrototypes/LlunaRoleSwitcher";

export const metadata: Metadata = {
  title: "Lluna — Simplifying Academic Administration Through Connected Experiences | Raunak Singh",
  description:
    "An AI-powered academic management ecosystem connecting faculty, students, and administrators through interconnected platforms and semantic vector search. Case study by Raunak Singh.",
};

export default function LlunaPage() {
  const project = PROJECTS.find((p) => p.slug === "lluna-ecosystem");
  if (!project) notFound();

  return (
    <CaseStudyTemplate
      project={project}
      interactivePrototype={<LlunaRoleSwitcher />}
    />
  );
}

