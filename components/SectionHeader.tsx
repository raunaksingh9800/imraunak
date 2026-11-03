import React from "react";

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs font-semibold text-accent-vermilion tracking-widest uppercase">
          {number}
        </span>
        <span className="w-8 h-[1px] bg-white/20" />
        <span className="font-mono text-xs text-zinc-400 tracking-wider uppercase">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

