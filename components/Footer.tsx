"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black bg-white mt-16 pt-8 pb-10 select-none">
      {/* ───────────────────────────────────────────────────────────
          1. 4-UP ICON-LABEL NAVIGATION WITH RESTRAINED MONOCHROME RULE
      ──────────────────────────────────────────────────────────── */}
      <div className="relative max-w-md mx-auto px-4 mb-8">
        {/* Subtle horizontal connecting line */}
        <div className="absolute top-[20px] left-6 right-6 h-[1px] bg-black/30 z-0" />

        <div className="relative z-10 grid grid-cols-4 text-center">
          {/* FIND */}
          <Link href="/#work" className="group inline-flex flex-col items-center no-underline">
            <div className="w-10 h-10 bg-white border border-black flex items-center justify-center text-sm mb-1 group-hover:border-red group-hover:text-red transition-colors shadow-hard-sm">
              🔍
            </div>
            <span className="font-heading font-bold text-[11px] text-black group-hover:text-red uppercase tracking-wider">
              Find
            </span>
          </Link>

          {/* HOME */}
          <Link href="/" className="group inline-flex flex-col items-center no-underline">
            <div className="w-10 h-10 bg-white border border-black flex items-center justify-center text-sm mb-1 group-hover:border-red group-hover:text-red transition-colors shadow-hard-sm">
              🏠
            </div>
            <span className="font-heading font-bold text-[11px] text-black group-hover:text-red uppercase tracking-wider">
              Home
            </span>
          </Link>

          {/* WORK */}
          <Link href="/#work" className="group inline-flex flex-col items-center no-underline">
            <div className="w-10 h-10 bg-light-gray border border-black flex items-center justify-center text-sm mb-1 group-hover:border-red group-hover:text-red transition-colors shadow-hard-sm">
              📁
            </div>
            <span className="font-heading font-bold text-[11px] text-black group-hover:text-red uppercase tracking-wider">
              Work
            </span>
          </Link>

          {/* RESUME / SERVICE */}
          <a
            href="/raunak-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center no-underline"
          >
            <div className="w-10 h-10 bg-white border border-black flex items-center justify-center text-sm mb-1 group-hover:border-red group-hover:text-red transition-colors shadow-hard-sm">
              📄
            </div>
            <span className="font-heading font-bold text-[11px] text-black group-hover:text-red uppercase tracking-wider">
              Resume
            </span>
          </a>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. RESTRAINED EDITORIAL FOOTNOTE & VINTAGE STAMPS
      ──────────────────────────────────────────────────────────── */}
      <div className="text-center font-body text-xs text-mid-gray space-y-2 border-t border-black/10 pt-5 px-4 max-w-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-1 font-heading text-[10px] font-bold uppercase text-black">
          <span className="px-2 py-0.5 border border-black bg-white">
            Netscape 3.x
          </span>
          <span className="px-2 py-0.5 border border-black bg-white">
            MS Explorer 3.0
          </span>
          <span className="px-2 py-0.5 border border-black bg-white">
            1996 Swiss Editorial
          </span>
        </div>

        <div>
          <span className="text-black font-semibold">
            Copyright © 1996–2026 Raunak Singh.
          </span>{" "}
          All rights reserved.{" "}
          <Link href="/#contact" className="text-black underline hover:text-red">
            (Contact &amp; Terms)
          </Link>
        </div>

        <p className="text-[11px] leading-relaxed text-mid-gray">
          Computer Science &amp; Design · Atria Institute of Technology, Bengaluru.
          Currently shaping factory inventory platforms at ITC Limited.
        </p>
      </div>
    </footer>
  );
}
