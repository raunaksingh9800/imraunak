"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function FrameIntroAnimation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const shouldReduceMotion = useReducedMotion();
  const [isDone, setIsDone] = useState(!isHome || Boolean(shouldReduceMotion));

  useEffect(() => {
    if (!isHome || shouldReduceMotion) {
      setIsDone(true);
      return;
    }

    // Runs once on initial homepage entry
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isHome, shouldReduceMotion]);

  if (!isHome || isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="homepage-frame-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      >
        {/* Desk background layer */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 bg-[#E5E5E5]"
        />

        {/* 
          The Black Frame:
          Starts all over the page (fixed inset-0, solid black with 16px border),
          then contracts inward into its exact bounded position around the homepage.
        */}
        <motion.div
          initial={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderWidth: "16px",
            backgroundColor: "#000000",
          }}
          animate={{
            top: "var(--intro-top, 24px)",
            bottom: "var(--intro-bottom, 24px)",
            left: "var(--intro-side, max(0px, calc((100vw - 1080px) / 2)))",
            right: "var(--intro-side, max(0px, calc((100vw - 1080px) / 2)))",
            borderWidth: "var(--intro-border, 8px)",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.23, 1, 0.32, 1], // Emil Kowalski / Swiss editorial cubic-bezier
          }}
          className="absolute border-black shadow-hard"
        />
      </motion.div>
    </AnimatePresence>
  );
}
