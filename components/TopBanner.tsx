"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HireSticker } from "./Stickers";

export function TopBanner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 py-3 border-b-2 border-black select-none">
      {/* Top Identity & Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Brand & Supporting Tagline */}
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <Link
              href="/"
              className="text-white hover:text-white no-underline font-heading font-black text-lg sm:text-xl tracking-tight uppercase"
            >
              RAUNAK SINGH.
            </Link>
            <span className="text-[#fcc20f] font-heading font-bold text-xs uppercase tracking-wide">
              BUILD YOUR OWN SYSTEMS. ONLINE.
            </span>
          </div>

          <div className="text-[11px] font-heading text-zinc-300 uppercase tracking-tight mt-0.5">
            CURRENTLY AT ITC LIMITED · COMPUTER SCIENCE &amp; DESIGN · BENGALURU, INDIA · CLASS OF 2028
          </div>
        </div>

        {/* Right Chrome: "HIRE RAUNAK" Yellow Sticker + Red Phone Callout */}
        <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
          <a
            href="mailto:raunaksingh9800@gmail.com"
            className="no-underline inline-block"
            title="Hire Raunak / Request Interview"
          >
            <HireSticker action="HIRE" target="RAUNAK" />
          </a>

          {/* Screaming Red Phone Callout (Actual verified phone & email) */}
          <div className="bg-black px-2.5 py-1 border border-zinc-800 text-right">
            <a
              href="tel:+917483901655"
              className="font-heading font-black text-xs sm:text-sm text-[#e91d2a] tracking-wider uppercase block no-underline hover:text-red-400"
            >
              +91 7483901655
            </a>
            <a
              href="mailto:raunaksingh9800@gmail.com"
              className="font-mono text-[9px] text-[#fcc20f] uppercase block no-underline hover:underline"
            >
              RAUNAKSINGH9800@GMAIL.COM
            </a>
          </div>
        </div>
      </div>

      {/* 1996 Sub-Banner Section Menu */}
      <div className="mt-3 pt-2 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs font-heading font-bold uppercase">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white">
          <Link href="/#work" className="text-white hover:text-[#fcc20f] no-underline">
            [1. SELECTED WORK]
          </Link>
          <Link href="/#about" className="text-white hover:text-[#fcc20f] no-underline">
            [2. ABOUT]
          </Link>
          <Link href="/#experience" className="text-white hover:text-[#fcc20f] no-underline">
            [3. EXPERIENCE &amp; ITC]
          </Link>
          <Link href="/#leadership" className="text-white hover:text-[#fcc20f] no-underline">
            [4. LEADERSHIP]
          </Link>
          <Link href="/#skills" className="text-white hover:text-[#fcc20f] no-underline">
            [5. SKILLS]
          </Link>
          <Link href="/#achievements" className="text-white hover:text-[#fcc20f] no-underline">
            [6. ACHIEVEMENTS]
          </Link>
          <Link href="/#contact" className="text-white hover:text-[#fcc20f] no-underline">
            [7. CONTACT]
          </Link>
        </nav>

        <div className="shrink-0">
          <a
            href="/raunak-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fcc20f] hover:underline"
          >
            ORDER RESUME (PDF) ↗
          </a>
        </div>
      </div>
    </header>
  );
}

