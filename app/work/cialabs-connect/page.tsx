import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { CIALabsQRSimulator } from "@/components/ProjectPrototypes/CIALabsQRSimulator";

export const metadata: Metadata = {
  title: "CIA Labs — Turning a Campus Into an Interactive Social Experience | Raunak Singh",
  description:
    "An interactive QR-powered campus engagement platform enabling 4K+ concurrent students to discover peers, connect through shared hobbies, and participate in gamified challenges. Case study by Raunak Singh.",
};

export default function CIALabsPage() {
  const project = PROJECTS.find((p) => p.slug === "cialabs-connect");
  if (!project) notFound();

  return (
    <CaseStudyTemplate
      project={project}
      interactivePrototype={<CIALabsQRSimulator />}
    />
  );
}

