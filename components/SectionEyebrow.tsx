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
      className={`border-b-2 border-black pb-2 mb-6 sm:mb-8 select-none ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-2">
          {number && (
            <span className="font-heading font-black text-xs text-red uppercase tracking-widest">
              {number}
            </span>
          )}
          <h2 className="font-display text-2xl sm:text-3xl text-black font-black uppercase tracking-tight leading-none m-0">
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="font-body text-xs sm:text-sm text-mid-gray m-0 leading-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
