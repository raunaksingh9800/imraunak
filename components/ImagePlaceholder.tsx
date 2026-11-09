"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Maximize2 } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  caption?: string;
  figureNumber?: string;
  recommendedSize?: string;
  aspectRatio?: "16/9" | "4/3" | "16/10" | "auto";
  className?: string;
}

export function ImagePlaceholder({
  src,
  alt,
  caption,
  figureNumber = "01",
  recommendedSize = "1920 × 1080 (16:9)",
  aspectRatio = "16/9",
  className = "",
}: ImagePlaceholderProps) {
  const [imgError, setImgError] = useState(false);

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : "min-h-[280px]";

  const hasValidImage = src && !imgError;

  return (
    <figure className={`border border-black bg-white my-6 select-none shadow-hard-sm ${className}`}>
      {/* Editorial Figure Header Strip */}
      <div className="bg-light-gray border-b border-black px-3.5 py-1.5 flex items-center justify-between text-xs font-heading">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-red font-bold uppercase tracking-wider">
            [FIG. {figureNumber}]
          </span>
          <span className="font-bold text-black uppercase tracking-tight truncate max-w-[320px] sm:max-w-md">
            {alt}
          </span>
        </div>
        <span className="text-xs text-mid-gray font-mono uppercase hidden sm:inline">
          {recommendedSize}
        </span>
      </div>

      {/* Main Image or Placeholder Frame */}
      <div className={`relative w-full ${aspectClass} bg-light-gray/60 overflow-hidden flex items-center justify-center`}>
        {hasValidImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-2"
            onError={() => setImgError(true)}
            sizes="(max-width: 1080px) 100vw, 1080px"
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-black/20 m-2">
            <div className="w-10 h-10 border border-black bg-white flex items-center justify-center mb-2.5 shadow-hard-sm">
              <ImageIcon className="w-5 h-5 text-black" />
            </div>
            <div className="font-heading font-black text-xs uppercase tracking-wider text-black mb-1">
              {alt}
            </div>
            <p className="font-body text-xs text-mid-gray max-w-md mb-2">
              Placeholder slot for design deliverable. Image asset can be dropped here.
            </p>
            <span className="font-mono text-xs text-black/70 bg-white border border-black/30 px-2 py-0.5 uppercase">
              Slot: {recommendedSize}
            </span>
          </div>
        )}
      </div>

      {/* Caption Strip */}
      {caption && (
        <figcaption className="p-3 bg-white border-t border-black/20 font-body text-xs text-black leading-relaxed">
          <strong className="font-heading text-xs font-bold uppercase text-black mr-1.5">
            Note:
          </strong>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

