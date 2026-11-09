"use client";

import React from "react";
import Link from "next/link";
import { Search, Home, Folder, FileText } from "lucide-react";

export function Footer() {
  const quickNav = [
    { label: "Find", href: "/#work", icon: Search },
    { label: "Home", href: "/", icon: Home },
    { label: "Work", href: "/#work", icon: Folder },
    { label: "Resume", href: "/raunak-singh-resume.pdf", icon: FileText, isExternal: true },
  ];

  return (
    <footer className="border-t border-black bg-white mt-16 pt-8 pb-12 select-none">
      {/* ───────────────────────────────────────────────────────────
          1. 4-UP TACTILE ACTION BUTTONS WITH VECTOR ICONS
      ──────────────────────────────────────────────────────────── */}
      <div className="relative max-w-md mx-auto px-4 mb-8">
        {/* Subtle horizontal connecting line */}
        <div className="absolute top-[20px] left-8 right-8 h-[1px] bg-black/20 z-0" />

        <div className="relative z-10 grid grid-cols-4 text-center">
          {quickNav.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="w-10 h-10 bg-white border border-black flex items-center justify-center text-black mb-1.5 shadow-hard-sm group-hover:border-red group-hover:bg-light-gray group-hover:text-red active:translate-y-[1px] active:shadow-none transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <Icon className="w-4 h-4 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110" />
                </div>
                <span className="font-heading font-bold text-xs text-black group-hover:text-red uppercase tracking-wider transition-colors duration-150">
                  {item.label}
                </span>
              </>
            );

            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col items-center no-underline"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group inline-flex flex-col items-center no-underline"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. RESTRAINED EDITORIAL FOOTNOTE & VINTAGE STAMPS
      ──────────────────────────────────────────────────────────── */}
      <div className="text-center font-body text-xs text-mid-gray space-y-3 border-t border-black/15 pt-6 px-4 max-w-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-1 font-heading text-xs font-bold uppercase text-black">
          <span className="px-2.5 py-1 border border-black bg-white hover:bg-light-gray transition-colors">
            Netscape 3.x
          </span>
          <span className="px-2.5 py-1 border border-black bg-white hover:bg-light-gray transition-colors">
            MS Explorer 3.0
          </span>
          <span className="px-2.5 py-1 border border-black bg-white hover:bg-light-gray transition-colors">
            1996 Swiss Editorial
          </span>
        </div>

        <div>
          <span className="text-black font-semibold">
            Copyright © 1996–2026 Raunak Singh.
          </span>{" "}
          All rights reserved.{" "}
          <Link
            href="/#contact"
            className="text-black underline underline-offset-2 hover:text-red transition-colors"
          >
            (Contact &amp; Inquiries)
          </Link>
        </div>

        <p className="text-xs leading-relaxed text-mid-gray m-0">
          Computer Science &amp; Design · Atria Institute of Technology, Bengaluru.
          Designing human-centered digital experiences and interface systems.
        </p>
      </div>
    </footer>
  );
}
