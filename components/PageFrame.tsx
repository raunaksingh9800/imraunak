"use client";

import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FrameIntroAnimation } from "./FrameIntroAnimation";

interface PageFrameProps {
  children: React.ReactNode;
}

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="min-h-screen bg-[#E5E5E5] py-0 sm:py-3 md:py-6 px-0 sm:px-3 md:px-6 relative overflow-x-hidden w-full max-w-full">
      {/* Keyboard Accessibility: Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:border-2 focus:border-red font-heading font-bold text-xs uppercase tracking-wider shadow-hard"
      >
        Skip to content
      </a>

      {/* Homepage First-load Frame Entrance Animation */}
      <FrameIntroAnimation />

      {/* 
        Literal Dell 1996 / Swiss Frame:
        Desktop: 8px solid black border (Spacing-75)
        Tablet: 4px solid black border (Spacing-50)
        Mobile: 2px solid black border (Spacing-25)
      */}
      <div className="max-w-[1080px] w-full mx-auto bg-black p-[2px] sm:p-[4px] md:p-[8px] shadow-hard overflow-x-hidden">
        {/* Pure White Interior Canvas */}
        <div className="bg-white min-h-[94vh] text-black flex flex-col justify-between overflow-x-hidden">
          <Navigation />
          <main id="main-content" className="flex-1 w-full bg-white outline-none overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
