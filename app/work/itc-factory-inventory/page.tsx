import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { ITCFactoryScanner } from "@/components/ProjectPrototypes/ITCFactoryScanner";

export const metadata: Metadata = {
  title: "ITC Limited — Rethinking Inventory Management on the Factory Floor | Raunak Singh",
  description:
    "An inventory management experience designed around the real workflows of factory workers, material handling, and operational management. Flagship case study by Raunak Singh.",
};

export default function ITCPage() {
  const project = PROJECTS.find((p) => p.slug === "itc-factory-inventory");
  if (!project) notFound();

  return (
    <CaseStudyTemplate
      project={project}
      interactivePrototype={<ITCFactoryScanner />}
    />
  );
}

