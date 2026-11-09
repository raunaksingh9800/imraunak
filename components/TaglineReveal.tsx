"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isAccent?: boolean;
}

function Word({ children, progress, range, isAccent = false }: WordProps) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const color = useTransform(
    progress,
    range,
    isAccent ? ["#777777", "#E91D2A"] : ["#777777", "#000000"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-[0.28em] transition-colors duration-150 ${
        isAccent ? "font-black" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

export function TaglineReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const statement =
    "Good design is not decorative — it is structural clarity. When interfaces eliminate cognitive friction, complex systems become effortlessly human.";

  const words = statement.split(" ");
  const accentWords = new Set(["clarity.", "human.", "eliminate"]);

  if (shouldReduceMotion) {
    return (
      <section className="border border-black bg-white p-6 sm:p-10 shadow-hard select-none my-12">
        <div className="flex items-center justify-between font-mono text-xs text-mid-gray uppercase tracking-widest border-b border-black/20 pb-3 mb-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red inline-block" />
            <span>DESIGN PHILOSOPHY // MANIFESTO</span>
          </span>
          <span>1996 · 2026</span>
        </div>
        <p className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.1] text-black m-0 [text-wrap:balance]">
          {statement}
        </p>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="border border-black bg-white p-6 sm:p-10 shadow-hard select-none my-12 relative overflow-hidden"
    >
      {/* Swiss Editorial Corner Registration Marks */}
      <span className="absolute top-2 left-2 font-mono text-xs text-black/30 pointer-events-none select-none">
        +
      </span>
      <span className="absolute top-2 right-2 font-mono text-xs text-black/30 pointer-events-none select-none">
        +
      </span>
      <span className="absolute bottom-2 left-2 font-mono text-xs text-black/30 pointer-events-none select-none">
        +
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-xs text-black/30 pointer-events-none select-none">
        +
      </span>

      {/* Header Metadata Ribbon */}
      <div className="flex items-center justify-between font-mono text-xs text-mid-gray uppercase tracking-widest border-b border-black/20 pb-3 mb-6">
        <div className="flex items-center gap-2 text-black font-bold">
          <span className="w-2 h-2 bg-red inline-block animate-pulse" />
          <span>CORE VOCATIONAL POSITION // EDITORIAL STATEMENT</span>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-mid-gray">
          BENGALURU · 12.9716° N
        </span>
      </div>

      {/* Word-by-Word Scroll Highlight Statement */}
      <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.1] m-0 [text-wrap:balance]">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const isAccent = accentWords.has(word);
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              isAccent={isAccent}
            >
              {word}
            </Word>
          );
        })}
      </h2>

      {/* Footnote Context */}
      <div className="mt-6 pt-4 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-body text-mid-gray">
        <span>Grounded in field observation, user research, and production code.</span>
        <span className="font-heading font-bold text-black uppercase tracking-wider">
          Raunak Singh · UX Research &amp; Systems Architecture
        </span>
      </div>
    </section>
  );
}
