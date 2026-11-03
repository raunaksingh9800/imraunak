import React from "react";

interface CTABlockProps {
  title?: string;
  children: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTABlock({
  title = "AT RAUNAKSINGH.COM:",
  children,
  actionText = "ORDER RESUME (PDF) ↗",
  actionHref = "/raunak-singh-resume.pdf",
  secondaryText = "REQUEST INTERVIEW / CONTACT",
  secondaryHref = "mailto:raunaksingh9800@gmail.com",
  className = "",
}: CTABlockProps) {
  return (
    <div
      className={`bg-[#e91d2a] text-white border-2 border-black p-4 sm:p-5 shadow-[2px_2px_0px_#000000] select-none ${className}`}
    >
      {title && (
        <h3 className="font-heading font-black text-sm sm:text-base uppercase text-[#fcc20f] tracking-tight mb-2">
          {title}
        </h3>
      )}

      <div className="font-body text-sm leading-relaxed text-white space-y-2 mb-4">
        {children}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 font-heading font-black text-xs uppercase">
        {actionText && actionHref && (
          <a
            href={actionHref}
            target={actionHref.endsWith(".pdf") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-center bg-[#fcc20f] hover:bg-yellow-400 text-black py-2 px-3 border border-black shadow-[1px_1px_0px_#000000] no-underline"
          >
            {actionText}
          </a>
        )}

        {secondaryText && secondaryHref && (
          <a
            href={secondaryHref}
            className="text-center bg-white hover:bg-zinc-100 text-black py-2 px-3 border border-black no-underline"
          >
            {secondaryText}
          </a>
        )}
      </div>
    </div>
  );
}

