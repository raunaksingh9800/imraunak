"use client";

import React from "react";

/**
 * Reusable BUY A DELL-inspired yellow sticker
 * Background: Dell Yellow #fcc20f
 * Accent: Dell Purple #6a26a4 behind "a"
 * 1px black border, 0px radius
 */
export function HireSticker({
  action = "HIRE",
  target = "RAUNAK",
}: {
  action?: string;
  target?: string;
}) {
  return (
    <div className="inline-flex items-center bg-[#fcc20f] text-black border border-black px-2.5 py-1 font-heading text-xs font-black tracking-tight shadow-[2px_2px_0px_#000000] select-none">
      <span className="uppercase">{action}</span>
      <span className="mx-1 bg-[#6a26a4] text-white px-1 py-0.2 text-[10px] font-normal leading-none">
        a
      </span>
      <span className="uppercase tracking-wider">{target}</span>
    </div>
  );
}

/**
 * Angled yellow "NEW!" burst sticker
 * Approximately 15-degree rotation, giving it a pinned-on-with-tape catalog feel
 */
export function NewBurstSticker({
  text = "NEW!",
  rotation = "-12deg",
}: {
  text?: string;
  rotation?: string;
}) {
  return (
    <div
      className="inline-block bg-[#fcc20f] text-black border border-black px-2 py-0.5 font-heading text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#000000] select-none"
      style={{ transform: `rotate(${rotation})` }}
    >
      {text}
    </div>
  );
}

/**
 * Circular Award Seal (Only element permitted to have rounded.full)
 * Background: Dell Red #e91d2a
 * Text: White
 * 64px - 76px size
 */
export function AwardSeal({
  title = "GOOGLE AI",
  subtitle = "GLOBAL TOP CONTRIBUTOR",
  award = "VERIFIED LEAD '26",
}: {
  title?: string;
  subtitle?: string;
  award?: string;
}) {
  return (
    <div className="w-20 h-20 rounded-seal bg-[#e91d2a] p-1 border-2 border-black flex items-center justify-center text-center shadow-[2px_2px_0px_#000000] select-none mx-auto">
      <div className="w-full h-full rounded-seal border border-dashed border-white/80 p-1 flex flex-col items-center justify-center text-white font-heading">
        <span className="text-[7px] uppercase tracking-tighter block leading-none font-bold">
          {subtitle}
        </span>
        <span className="text-[10px] font-black uppercase tracking-tight block my-0.5 bg-white text-[#e91d2a] px-1 leading-tight">
          {title}
        </span>
        <span className="text-[7px] uppercase tracking-tighter block leading-none font-bold">
          {award}
        </span>
      </div>
    </div>
  );
}

