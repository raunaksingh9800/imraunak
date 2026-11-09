"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Work", href: "/#work", hash: "#work" },
    { label: "About", href: "/#about", hash: "#about" },
    { label: "Experience", href: "/#experience", hash: "#experience" },
    { label: "Skills", href: "/#skills", hash: "#skills" },
    { label: "Achievements", href: "/#achievements", hash: "#achievements" },
    { label: "Contact", href: "/#contact", hash: "#contact" },
  ];

  const isLinkActive = (link: { href: string; hash: string }) => {
    if (activeHash) {
      return activeHash === link.hash;
    }
    if (pathname.startsWith("/work") && link.hash === "#work") {
      return true;
    }
    return false;
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-black select-none">
      <div className="w-full px-3 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* ───────────────────────────────────────────────────────────
            LEFT: Wordmark with Micro-interaction
        ──────────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/"
            className="group font-heading font-black text-xs sm:text-sm tracking-widest text-black uppercase no-underline flex items-center gap-2 py-1 active:translate-y-[1px] transition-[transform,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="inline-block w-2.5 h-2.5 bg-red transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110" />
            <span className="group-hover:text-red transition-colors duration-150">
              RAUNAK SINGH
            </span>
          </Link>
        </div>

        {/* ───────────────────────────────────────────────────────────
            CENTER: Desktop Nav Links with Tactile Feedback
        ──────────────────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center shrink-0 h-full">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-heading text-xs uppercase tracking-wider no-underline py-4 relative whitespace-nowrap transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:translate-y-[1px] ${
                  active
                    ? "font-black text-red"
                    : "font-semibold text-black hover:text-red"
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ───────────────────────────────────────────────────────────
            RIGHT: Resume + Primary CTA
        ──────────────────────────────────────────────────────────── */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/raunak-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-heading font-bold text-xs uppercase tracking-wide text-black hover:text-red bg-white hover:bg-light-gray no-underline flex items-center gap-1.5 px-3 py-1.5 border border-black shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] whitespace-nowrap"
            title="Download verified curriculum vitae PDF"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-mid-gray group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>

          <Link
            href="/#contact"
            className="font-heading font-bold text-xs uppercase tracking-wide bg-black hover:bg-red text-white hover:text-white px-3.5 py-1.5 border border-black hover:border-red no-underline whitespace-nowrap shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-[background-color,border-color,transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            Get in Touch
          </Link>
        </div>

        {/* ───────────────────────────────────────────────────────────
            MOBILE MENU CONTROLS
        ──────────────────────────────────────────────────────────── */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <a
            href="/raunak-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-xs uppercase tracking-wide text-black bg-white hover:bg-light-gray px-2.5 py-1 border border-black no-underline shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-[background-color,transform,box-shadow] duration-150"
          >
            CV ↗
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 border border-black bg-white text-black hover:bg-light-gray hover:text-red shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-[background-color,color,transform,box-shadow] duration-150"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          MOBILE DRAWER WITH ANIMATED STAGGERED LINKS
      ──────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-white border-t border-black px-4 py-4 space-y-3 font-heading text-xs uppercase font-bold overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, idx) => {
                const active = isLinkActive(link);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: idx * 0.04,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`p-2.5 border text-center no-underline block active:translate-y-[1px] transition-colors duration-150 ${
                        active
                          ? "border-red bg-light-gray text-red font-black"
                          : "border-black/30 hover:border-black hover:bg-light-gray text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: navLinks.length * 0.04,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="pt-2 border-t border-black/20 flex flex-col gap-2"
            >
              <a
                href="/raunak-singh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-2.5 border border-black bg-light-gray hover:bg-white text-black hover:text-red no-underline block shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-all duration-150"
              >
                Download Resume (PDF) ↗
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-2.5 bg-black hover:bg-red text-white hover:text-white border border-black hover:border-red no-underline block shadow-hard-sm active:translate-y-[1px] active:shadow-none transition-all duration-150"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
