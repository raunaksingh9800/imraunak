"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function FrameIntroAnimation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isDone, setIsDone] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setIsDone(true);
      return;
    }

    // Runs once on homepage entry
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, [isHome]);

  if (!isHome || isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="homepage-frame-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      >
        {/* Desk background layer */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="absolute inset-0 bg-[#E5E5E5]"
        />

        {/* 
          The Black Frame:
          Starts all over the page (fixed inset-0, solid black with 16px border),
          then animates inward into its exact bounded position around the homepage.
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
            duration: 0.85,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1], // Swiss editorial cubic-bezier
          }}
          className="absolute border-black shadow-hard"
        />
      </motion.div>
    </AnimatePresence>
  );
}

