"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Monitor, Smartphone, Film, VolumeX } from "lucide-react";

export interface VideoPlaceholderProps {
  slotNumber?: string;
  title: string;
  src?: string;
  caption?: string;
  description?: string;
  duration?: string;
  aspectRatio?: "portrait" | "landscape";
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  targetFile?: string;
  className?: string;
}

export function VideoPlaceholder({
  slotNumber = "01",
  title,
  src,
  caption,
  description,
  duration = "Live Demo",
  aspectRatio = "landscape",
  loop = true,
  muted = true,
  autoPlay = true,
  targetFile = "/videos/cialabs-walkthrough.mp4",
  className = "",
}: VideoPlaceholderProps) {
  const isPortrait = aspectRatio === "portrait";
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Permanently enforce muted state — strictly unmutable
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  }, []);

  const enforceMuted = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const isEmbed =
    src &&
    (src.includes("youtube.com") ||
      src.includes("youtu.be") ||
      src.includes("loom.com") ||
      src.includes("vimeo.com"));

  const showVideo = src && !hasError;

  return (
    <div
      className={`border border-black bg-white select-none shadow-hard-sm flex flex-col w-full ${
        isPortrait ? "max-w-[420px] mx-auto" : ""
      } ${className}`}
    >
      {/* Player Top Frame Bar */}
      <div className="bg-black text-white px-3.5 py-2 flex items-center justify-between text-xs font-heading border-b border-black">
        <div className="flex items-center gap-2 truncate">
          <span className="font-mono text-[10px] text-red font-bold uppercase tracking-wider shrink-0">
            [VIDEO DEMO {slotNumber}]
          </span>
          <span className="font-bold text-white uppercase tracking-tight text-[11px] truncate">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[9px] uppercase text-zinc-300 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
          <span>{isPortrait ? "9:16 PORTRAIT" : "16:9 WIDESCREEN"}</span>
        </div>
      </div>

      {/* Screen Frame Container */}
      <div className="p-3 sm:p-5 bg-light-gray flex flex-col items-center justify-center">
        <div
          className={`relative w-full ${
            isPortrait ? "max-w-[340px] aspect-[9/16]" : "aspect-[16/9]"
          } bg-zinc-950 border-2 border-black overflow-hidden flex flex-col shadow-hard-sm`}
        >
          {/* Workstation Top Status Bar */}
          <div className="bg-black/95 text-zinc-400 px-3.5 py-1.5 flex items-center justify-between font-mono text-[9px] tracking-wider border-b border-zinc-800 shrink-0 select-none z-20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red inline-block" />
              <span className="text-white font-bold uppercase">
                {isPortrait ? "MOBILE VIEWPORT" : "WORKSTATION DISPLAY"}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-zinc-500 text-[8px]">
              <span>1080P · LOOP</span>
              <span>•</span>
              <span className="text-zinc-300 flex items-center gap-1">
                <VolumeX className="w-3 h-3 text-red" />
                MUTED (LOCKED)
              </span>
            </div>
            <span className="text-zinc-300">
              {isPortrait ? "09:41 · 5G" : "1920 × 1080 (16:9)"}
            </span>
          </div>

          {/* Screen Display (Click to Pause/Play, No Browser Controls) */}
          <div
            onClick={togglePlay}
            className="relative flex-1 w-full h-full bg-black flex items-center justify-center overflow-hidden cursor-pointer group"
          >
            {showVideo ? (
              isEmbed ? (
                <iframe
                  src={src}
                  title={title}
                  className="w-full h-full border-0 pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={src}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted
                    playsInline
                    controls={false} // NO DEFAULT BROWSER CONTROLS
                    onVolumeChange={enforceMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setHasError(true)}
                    className="w-full h-full object-contain bg-black pointer-events-auto"
                  />

                  {/* Paused Overlay Indicator */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 transition-opacity">
                      <div className="w-16 h-16 border-2 border-white bg-black/90 flex items-center justify-center text-white mb-2 shadow-hard">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                      <span className="font-heading font-black text-xs uppercase tracking-widest text-white bg-black px-2 py-0.5 border border-white">
                        PAUSED · CLICK TO PLAY
                      </span>
                    </div>
                  )}

                  {/* Hover Quick Indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-zinc-700 text-white font-mono text-[9px] px-2 py-1 pointer-events-none">
                    CLICK SCREEN TO {isPlaying ? "PAUSE" : "PLAY"}
                  </div>
                </>
              )
            ) : (
              /* High-Precision 16:9 Landscape CRT Screen Dropzone */
              <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center justify-between text-center relative">
                {/* CRT Matrix Background */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Top Badge */}
                <div className="relative z-10 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-[9px] uppercase tracking-wider">
                    {isPortrait ? (
                      <Smartphone className="w-3.5 h-3.5 text-red" />
                    ) : (
                      <Monitor className="w-3.5 h-3.5 text-red" />
                    )}
                    {isPortrait ? "Portrait Mobile Recording" : "Landscape Video Walkthrough Slot"}
                  </span>
                </div>

                {/* Center Play Button & Title */}
                <div className="relative z-10 flex flex-col items-center my-auto py-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white bg-black/90 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-red transition-all shadow-hard">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-red transition-colors ml-1" />
                  </div>
                  <div className="font-heading font-black text-sm sm:text-base uppercase tracking-wider text-white max-w-md">
                    {title}
                  </div>
                  <p className="font-body text-xs text-zinc-400 mt-1 max-w-sm m-0">
                    {description || "Walkthrough video slot. Plays on continuous loop, permanently muted with single-click pause/play."}
                  </p>
                </div>

                {/* Bottom Specifications Bar */}
                <div className="relative z-10 w-full max-w-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 font-mono text-[9px] text-zinc-300 bg-zinc-900/90 border border-zinc-700 p-2">
                    <div className="flex flex-col text-left">
                      <span className="text-zinc-500 text-[8px]">FORMAT:</span>
                      <span className="text-white font-bold">16:9 Landscape MP4</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-zinc-500 text-[8px]">AUDIO:</span>
                      <span className="text-red font-bold">Permanently Muted</span>
                    </div>
                    <div className="flex flex-col text-left truncate">
                      <span className="text-zinc-500 text-[8px]">DROP FILE:</span>
                      <span className="text-white font-mono font-bold truncate">
                        {targetFile}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Playback Bar at Bottom (Only Play / Pause & Restart, No Unmute) */}
          <div className="bg-black text-white px-3.5 py-1.5 flex items-center justify-between font-mono text-[9px] border-t border-zinc-800 shrink-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 uppercase">
                {loop ? "LOOP: ACTIVE" : "LOOP: OFF"}
              </span>
              <span className="px-1.5 py-0.5 bg-zinc-800 text-red font-bold uppercase flex items-center gap-1">
                <VolumeX className="w-3 h-3" />
                MUTED
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Simple Custom Pause / Play Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="flex items-center gap-1.5 px-2.5 py-0.5 border border-white hover:bg-white hover:text-black text-white font-heading font-bold text-[10px] uppercase transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 ml-0.5" />
                    <span>PLAY</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  restartVideo();
                }}
                aria-label="Restart video playback"
                className="p-1 hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Caption & Walkthrough Context Footer */}
      {caption && (
        <div className="p-3.5 sm:p-4 bg-white border-t border-black font-body text-xs text-black leading-relaxed flex items-start gap-2.5">
          <Film className="w-4 h-4 text-black shrink-0 mt-0.5" />
          <div>
            <strong className="font-heading font-bold text-[10px] uppercase text-black block mb-0.5 tracking-wider">
              Walkthrough Notes &amp; Demonstration Scope:
            </strong>
            <span className="text-mid-gray">{caption}</span>
          </div>
        </div>
      )}
    </div>
  );
}
