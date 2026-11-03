"use client";

import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#141618] border border-white/15 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <FileText className="h-4 w-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">
              Raunak Singh · Curriculum Vitae (PDF)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/raunak-singh-resume.pdf"
              download="Raunak_Singh_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href="/raunak-singh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Close modal (Esc)"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="flex-1 w-full bg-zinc-950">
          <iframe
            src="/raunak-singh-resume.pdf#toolbar=0"
            className="w-full h-full border-none"
            title="Raunak Singh Resume"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Bengaluru, India · raunaksingh9800@gmail.com</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}

