"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PortfolioIndex() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHash = () => {
      setActiveSection(window.location.hash || "");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    // Scroll spy for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    const sectionIds = [
      "work",
      "about",
      "experience",
      "leadership",
      "skills",
      "achievements",
      "contact",
    ];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, []);

  const directoryItems = [
    { num: "01", label: "Selected Work", href: "/#work", hash: "#work", meta: "4 Case Studies" },
    { num: "02", label: "About Raunak", href: "/#about", hash: "#about", meta: "Editorial Bio" },
    { num: "03", label: "Experience", href: "/#experience", hash: "#experience", meta: "Industry & Roles" },
    { num: "04", label: "Leadership", href: "/#leadership", hash: "#leadership", meta: "Google & GDG" },
    { num: "05", label: "Capabilities", href: "/#skills", hash: "#skills", meta: "UX & Engineering" },
    { num: "06", label: "Achievements", href: "/#achievements", hash: "#achievements", meta: "Awards & Research" },
    { num: "07", label: "Contact Line", href: "/#contact", hash: "#contact", meta: "Direct Inquiry" },
    { num: "08", label: "Curriculum Vitae", href: "/raunak-singh-resume.pdf", meta: "PDF ↗", isPdf: true },
  ];

  return (
    <nav
      aria-label="Portfolio Directory Index"
      className="border border-black bg-white select-none shadow-hard-sm"
    >
      {/* Index Title Header */}
      <div className="bg-black text-white px-3.5 py-2 flex items-center justify-between font-heading font-bold text-xs uppercase tracking-wider">
        <span>Portfolio Index</span>
        <span className="font-mono text-xs text-mid-gray">1996 / 2026</span>
      </div>

      {/* Directory Item List with Consistent Enclosed Rows */}
      <div className="divide-y divide-black/20 font-heading text-xs">
        {directoryItems.map((item) => {
          const isActive = activeSection === item.hash;
          return (
            <div
              key={item.num}
              className={`px-3.5 py-2 flex items-center justify-between transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group ${
                isActive
                  ? "bg-light-gray"
                  : "hover:bg-light-gray"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span
                  className={`font-mono text-xs shrink-0 flex items-center gap-1.5 transition-colors duration-150 ${
                    isActive ? "text-red font-bold" : "text-mid-gray group-hover:text-red"
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 bg-red inline-block shrink-0" />}
                  <span>{item.num}</span>
                </span>

                {item.isPdf ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black group-hover:text-red no-underline uppercase tracking-wide flex items-center gap-1 active:translate-x-[1px] transition-[color,transform] duration-150 truncate"
                  >
                    <span className="truncate">{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray group-hover:text-red shrink-0" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`uppercase tracking-wide no-underline active:translate-x-[1px] transition-[color,transform] duration-150 truncate ${
                      isActive
                        ? "font-black text-red"
                        : "font-bold text-black group-hover:text-red"
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                  </Link>
                )}
              </div>

              <span
                className={`font-body text-xs transition-colors duration-150 shrink-0 hidden min-[360px]:inline ${
                  isActive ? "text-black font-semibold" : "text-mid-gray"
                }`}
              >
                {item.meta}
              </span>
            </div>
          );
        })}
      </div>

      {/* Subtle Credibility Footnote */}
      <div className="p-3.5 bg-light-gray border-t border-black text-xs font-body text-mid-gray leading-relaxed">
        <span className="font-heading font-black text-xs text-black uppercase tracking-wider block mb-1">
          CURRENT VOCATIONAL FOCUS:
        </span>
        Designing human-centered digital experiences, systems architecture, and product interfaces.
      </div>
    </nav>
  );
}
