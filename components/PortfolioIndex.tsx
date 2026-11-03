"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PortfolioIndex() {
  const directoryItems = [
    { num: "01", label: "Selected Work", href: "/#work", meta: "5 Case Studies" },
    { num: "02", label: "About Raunak", href: "/#about", meta: "Editorial Bio" },
    { num: "03", label: "Experience & ITC", href: "/#experience", meta: "July 2026 – Present" },
    { num: "04", label: "Leadership", href: "/#leadership", meta: "Google & GDG" },
    { num: "05", label: "Capabilities", href: "/#skills", meta: "UX & Engineering" },
    { num: "06", label: "Achievements", href: "/#achievements", meta: "Awards & Research" },
    { num: "07", label: "Contact Line", href: "/#contact", meta: "Direct Inquiry" },
    { num: "08", label: "Curriculum Vitae", href: "/raunak-singh-resume.pdf", meta: "PDF ↗", isPdf: true },
  ];

  return (
    <div className="border border-black bg-white select-none shadow-hard-sm">
      <div className="bg-black text-white px-3 py-1.5 flex items-center justify-between font-heading font-bold text-xs uppercase tracking-wider">
        <span>Portfolio Index</span>
        <span className="text-[10px] text-mid-gray">1996 / 2026</span>
      </div>

      <div className="divide-y divide-black/20 font-heading text-xs">
        {directoryItems.map((item) => (
          <div
            key={item.num}
            className="px-3 py-2 hover:bg-light-gray flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[10px] text-mid-gray group-hover:text-red">
                {item.num}
              </span>
              {item.isPdf ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-black group-hover:text-red no-underline uppercase tracking-wide flex items-center gap-1"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-mid-gray" />
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="font-bold text-black group-hover:text-red no-underline uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              )}
            </div>

            <span className="font-body text-[11px] text-mid-gray">
              {item.meta}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle Credibility Footnote */}
      <div className="p-3 bg-light-gray border-t border-black text-xs font-body text-mid-gray leading-tight">
        <span className="font-heading font-black text-[10px] text-black uppercase tracking-wider block mb-1">
          CURRENT VOCATIONAL FOCUS:
        </span>
        Shaping digital experiences at <strong>ITC Limited</strong> · Technology Intern, Bengaluru.
      </div>
    </div>
  );
}

