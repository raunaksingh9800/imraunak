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
    <div className="min-h-screen bg-[#E5E5E5] py-0 sm:py-3 md:py-6 px-0 sm:px-3 md:px-6 relative">
      <FrameIntroAnimation />

      {/* 
        Literal Page Frame:
        Desktop: 8px black frame
        Tablet: 4px black frame
        Mobile: 2px black frame
      */}
      <div className="max-w-[1080px] w-full mx-auto bg-black p-[2px] sm:p-[4px] md:p-[8px] shadow-hard">
        {/* Pure White Interior Canvas */}
        <div className="bg-white min-h-[94vh] text-black flex flex-col justify-between">
          <Navigation />
          <main className="flex-1 w-full bg-white">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
