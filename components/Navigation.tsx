"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleHash = () => {
      setActiveHash(window.location.hash || "");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navLinks = [
    { label: "Work", href: "/#work", hash: "#work" },
    { label: "About", href: "/#about", hash: "#about" },
    { label: "Experience", href: "/#experience", hash: "#experience" },
    { label: "Skills", href: "/#skills", hash: "#skills" },
    { label: "Achievements", href: "/#achievements", hash: "#achievements" },
    { label: "Contact", href: "/#contact", hash: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-black">
      <div className="w-full px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* ───────────────────────────────────────────────────────────
            LEFT: Small RAUNAK SINGH Wordmark
        ──────────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="font-heading font-black text-sm tracking-widest text-black uppercase no-underline hover:text-red transition-colors flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-red" />
            <span>RAUNAK SINGH</span>
          </Link>
        </div>

        {/* ───────────────────────────────────────────────────────────
            CENTER: Desktop Links (Work, About, Experience, Skills, Achievements, Contact)
        ──────────────────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center shrink-0">
          {navLinks.map((link) => {
            const isActive = activeHash === link.hash;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-heading text-xs uppercase tracking-wider no-underline transition-colors py-1 relative whitespace-nowrap ${
                  isActive
                    ? "font-black text-red"
                    : "font-bold text-black hover:text-red"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-red" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ───────────────────────────────────────────────────────────
            RIGHT: Resume + Get in Touch
        ──────────────────────────────────────────────────────────── */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/raunak-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-xs uppercase tracking-wide text-black hover:text-red no-underline flex items-center gap-1.5 px-2.5 py-1.5 border border-black/30 hover:border-black transition-colors whitespace-nowrap"
            title="Download verified curriculum vitae PDF"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray" />
          </a>

          <Link
            href="/#contact"
            className="font-heading font-bold text-xs uppercase tracking-wide bg-black hover:bg-zinc-800 text-white px-3.5 py-1.5 border border-black no-underline whitespace-nowrap shadow-hard-sm transition-none"
          >
            Get in Touch
          </Link>
        </div>

        {/* ───────────────────────────────────────────────────────────
            MOBILE MENU BUTTON
        ──────────────────────────────────────────────────────────── */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <a
            href="/raunak-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-[11px] uppercase tracking-wide text-black px-2 py-1 border border-black no-underline"
          >
            CV ↗
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 border border-black bg-white text-black hover:bg-light-gray"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          MOBILE DROPDOWN PANEL
      ──────────────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black px-5 py-4 space-y-3 font-heading text-xs uppercase font-bold border-b-2 border-black">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="p-2 border border-black/20 hover:border-black text-black no-underline block"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-black/20 flex flex-col gap-2">
            <a
              href="/raunak-singh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2 border border-black bg-light-gray text-black no-underline block"
            >
              Download Resume (PDF) ↗
            </a>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2 bg-black text-white border border-black no-underline block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
