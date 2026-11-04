"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

    const sectionIds = ["work", "about", "experience", "leadership", "skills", "achievements", "contact"];
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
    <div className="border border-black bg-white select-none shadow-hard-sm">
      <div className="bg-black text-white px-3 py-1.5 flex items-center justify-between font-heading font-bold text-xs uppercase tracking-wider">
        <span>Portfolio Index</span>
        <span className="text-[10px] text-mid-gray">1996 / 2026</span>
      </div>

      <div className="divide-y divide-black/20 font-heading text-xs">
        {directoryItems.map((item) => {
          const isActive = activeSection === item.hash;
          return (
            <div
              key={item.num}
              className={`px-3 py-2 flex items-center justify-between transition-colors group ${
                isActive ? "bg-light-gray border-l-4 border-l-red" : "hover:bg-light-gray"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-red font-bold" : "text-mid-gray group-hover:text-red"
                  }`}
                >
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
                    className={`uppercase tracking-wide no-underline ${
                      isActive ? "font-black text-red" : "font-bold text-black group-hover:text-red"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>

              <span className={`font-body text-[11px] ${isActive ? "text-black font-semibold" : "text-mid-gray"}`}>
                {item.meta}
              </span>
            </div>
          );
        })}
      </div>

      {/* Subtle Credibility Footnote */}
      <div className="p-3 bg-light-gray border-t border-black text-xs font-body text-mid-gray leading-tight">
        <span className="font-heading font-black text-[10px] text-black uppercase tracking-wider block mb-1">
          CURRENT VOCATIONAL FOCUS:
        </span>
        Designing human-centered digital experiences, systems architecture, and product interfaces.
      </div>
    </div>
  );
}

