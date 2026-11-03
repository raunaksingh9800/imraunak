"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type TintVariant = "olive" | "salmon" | "peach" | "lime" | "sky" | "steel" | "periwinkle" | "sage";

interface RibbonCardProps {
  seriesNumber?: string;
  title: string;
  organization?: string;
  category?: string;
  tint?: TintVariant;
  customTintHex?: string;
  showNewBadge?: boolean;
  newBadgeText?: string;
  children: React.ReactNode;
  specs?: { label: string; value: string }[];
  imageContent?: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  detailsLinkText?: string;
  detailsLinkHref?: string;
  footerInfo?: string;
  className?: string;
}

export function RibbonCard({
  seriesNumber,
  title,
  organization,
  category,
  children,
  specs,
  imageContent,
  actionText = "VIEW CASE STUDY ↗",
  actionHref,
  detailsLinkText,
  detailsLinkHref,
  footerInfo,
  className = "",
}: RibbonCardProps) {
  return (
    <article
      className={`border border-black bg-white mb-6 select-none shadow-hard-sm ${className}`}
    >
      {/* 1. White / Light-Gray Title Strip */}
      <div className="bg-light-gray border-b border-black px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-baseline gap-2">
          {seriesNumber && (
            <span className="font-heading font-black text-xs text-red uppercase tracking-wider">
              {seriesNumber}
            </span>
          )}
          <h3 className="font-heading font-black text-sm uppercase text-black tracking-tight m-0">
            {title}
          </h3>
        </div>

        {organization && (
          <span className="font-heading text-[11px] font-bold text-mid-gray uppercase tracking-wider">
            {organization}
          </span>
        )}
      </div>

      {/* 2. White Content Body + Image */}
      <div className="p-4 sm:p-5 bg-white border-b border-black grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className={imageContent ? "md:col-span-7 space-y-3" : "md:col-span-12 space-y-3"}>
          {category && (
            <div className="font-heading font-bold text-xs uppercase text-mid-gray tracking-wider">
              {category}
            </div>
          )}

          <div className="font-body text-base text-black leading-relaxed">
            {children}
          </div>

          {specs && specs.length > 0 && (
            <div className="border border-black/20 bg-light-gray p-2.5 mt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-heading">
                {specs.map((s, idx) => (
                  <div key={idx} className="border-r last:border-r-0 border-black/20 px-1">
                    <span className="font-black text-xs text-black block">
                      {s.value}
                    </span>
                    <span className="text-[10px] text-mid-gray leading-none block mt-0.5">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {imageContent && (
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="border border-black bg-black p-1 text-center w-full max-w-[210px]">
              {imageContent}
            </div>

            {actionHref && (
              <div className="mt-3 w-full max-w-[210px]">
                <Link
                  href={actionHref}
                  className="block text-center bg-black hover:bg-zinc-800 text-white font-heading font-bold text-xs uppercase py-2 px-3 border border-black shadow-hard-sm no-underline"
                >
                  {actionText}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. Specs Footer Strip */}
      <div className="bg-white px-4 py-2 flex flex-wrap items-center justify-between text-xs font-body text-mid-gray gap-2">
        <div>{footerInfo}</div>
        {detailsLinkHref && (
          <Link
            href={detailsLinkHref}
            className="text-black hover:text-red font-heading font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1 no-underline"
          >
            <span>{detailsLinkText || "View Case Study"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </article>
  );
}
