import React from "react";

interface SectionEyebrowProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionEyebrow({
  number,
  title,
  subtitle,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div
      className={`border-b-2 border-black pb-2.5 mb-6 sm:mb-8 select-none ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-2.5">
          {number && (
            <span className="font-heading font-black text-xs text-red uppercase tracking-widest shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red inline-block" />
              <span>{number}</span>
            </span>
          )}
          <h2 className="font-display text-2xl sm:text-3xl text-black font-black uppercase tracking-tight leading-none m-0 [text-wrap:balance]">
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="font-body text-xs sm:text-sm text-mid-gray m-0 leading-normal [text-wrap:pretty]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
