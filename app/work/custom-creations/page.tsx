"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface CreationImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CREATIONS: CreationImage[] = [
  { id: "c-01", src: "/projects/custom-creations/creation-01.png", alt: "RNK TV Home Interface", width: 1920, height: 1080 },
  { id: "c-02", src: "/projects/custom-creations/creation-02.png", alt: "Interface Slide Exploration 01", width: 1920, height: 1080 },
  { id: "c-03", src: "/projects/custom-creations/creation-03.png", alt: "Mobile UI System — iPhone 16 01", width: 393, height: 1033 },
  { id: "c-04", src: "/projects/custom-creations/creation-04.png", alt: "ASCII Interface & Typographic System", width: 1920, height: 1080 },
  { id: "c-05", src: "/projects/custom-creations/creation-05.png", alt: "Editorial Layout & Poster System", width: 1080, height: 1510 },
  { id: "c-06", src: "/projects/custom-creations/creation-06.png", alt: "Desktop Application — MacBook Air 01", width: 1280, height: 832 },
  { id: "c-07", src: "/projects/custom-creations/creation-07.png", alt: "Interface Slide Exploration 02", width: 1920, height: 1080 },
  { id: "c-08", src: "/projects/custom-creations/creation-08.png", alt: "TV Console View — 10-Foot Ergonomics", width: 1280, height: 720 },
  { id: "c-09", src: "/projects/custom-creations/creation-09.png", alt: "Mobile Screen Flow 01", width: 502, height: 941 },
  { id: "c-10", src: "/projects/custom-creations/creation-10.png", alt: "Desktop Application — MacBook Air 02", width: 1280, height: 832 },
  { id: "c-11", src: "/projects/custom-creations/creation-11.png", alt: "Mobile UI System — iPhone 16 02", width: 393, height: 975 },
  { id: "c-12", src: "/projects/custom-creations/creation-12.png", alt: "Widescreen Design Presentation", width: 1920, height: 1053 },
  { id: "c-13", src: "/projects/custom-creations/creation-13.png", alt: "Mobile Screen Flow 02", width: 402, height: 874 },
  { id: "c-14", src: "/projects/custom-creations/creation-14.png", alt: "Visual Reference & Research Board", width: 3026, height: 1861 },
];

export default function CustomCreationsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? CREATIONS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : prev === CREATIONS.length - 1 ? 0 : prev + 1));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <div className="w-full bg-white text-black font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Return Navigation */}
        <div className="mb-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-black hover:text-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Single Heading — No other text */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-black my-4 sm:my-6 border-b-2 border-black pb-4">
          CUSTOM CREATIONS
        </h1>

        {/* Pinterest-Style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 pt-2 pb-12">
          {CREATIONS.map((creation, idx) => (
            <div
              key={creation.id}
              onClick={() => setSelectedIndex(idx)}
              className="break-inside-avoid border border-black bg-white group cursor-zoom-in relative overflow-hidden shadow-hard-sm hover:shadow-hard hover:-translate-y-0.5 transition-all"
            >
              <Image
                src={creation.src}
                alt={creation.alt}
                width={creation.width || 1200}
                height={creation.height || 800}
                unoptimized
                className="w-full h-auto block object-cover group-hover:scale-[1.015] transition-transform duration-200"
              />

              {/* Hover Indicator Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-end justify-between p-2.5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white font-mono text-[9px] uppercase px-2 py-0.5 border border-white flex items-center gap-1">
                  <Maximize2 className="w-2.5 h-2.5" />
                  EXPAND
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Expanded Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-fadeIn"
        >
          {/* Lightbox Header Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl flex items-center justify-between text-white font-heading text-xs py-2 border-b border-zinc-800"
          >
            <div className="font-mono text-[10px] uppercase text-zinc-400">
              <span className="text-white font-bold">CREATION #{selectedIndex + 1}</span>
              <span className="mx-2 text-zinc-600">/</span>
              <span>{CREATIONS.length}</span>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="px-3 py-1 bg-white text-black hover:bg-red hover:text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>CLOSE [ESC]</span>
            </button>
          </div>

          {/* Main Full-Size Expanded Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-2 overflow-hidden"
          >
            <div className="relative max-w-full max-h-[82vh] border-2 border-black bg-black shadow-hard-lg">
              <Image
                src={CREATIONS[selectedIndex].src}
                alt={CREATIONS[selectedIndex].alt}
                width={CREATIONS[selectedIndex].width || 2048}
                height={CREATIONS[selectedIndex].height || 1280}
                unoptimized
                className="max-w-full max-h-[82vh] w-auto h-auto object-contain block"
                priority
              />
            </div>

            {/* Left / Right Arrow Buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous creation"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/80 hover:bg-white hover:text-black text-white border border-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next creation"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/80 hover:bg-white hover:text-black text-white border border-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Lightbox Footer Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl flex items-center justify-between text-zinc-400 font-mono text-[10px] py-2 border-t border-zinc-800"
          >
            <span>USE ARROW KEYS OR CLICK SIDES TO NAVIGATE</span>
            <span className="text-zinc-500">PRESS ESC TO EXIT</span>
          </div>
        </div>
      )}
    </div>
  );
}
