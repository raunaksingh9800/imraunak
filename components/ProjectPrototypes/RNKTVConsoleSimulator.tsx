"use client";

import React, { useState, useEffect } from "react";

interface GameTitle {
  id: string;
  name: string;
  genre: string;
  lastPlayed: string;
  progress: string;
  tagline: string;
  colorHex: string;
}

const GAMES: GameTitle[] = [
  {
    id: "1",
    name: "CYBERSTREET: 2099",
    genre: "Sci-Fi Action RPG",
    lastPlayed: "Yesterday",
    progress: "68% Complete · Chapter 4",
    tagline: "High-octane neon subterranean racing and stealth infiltrations.",
    colorHex: "#9ab6c8",
  },
  {
    id: "2",
    name: "SOLARIS EXPEDITION",
    genre: "Space Survival Simulator",
    lastPlayed: "3 days ago",
    progress: "42% Complete · Orbiting Titan",
    tagline: "Command a lonely deep space planetary exploration vessel.",
    colorHex: "#e6915d",
  },
  {
    id: "3",
    name: "KINETIC DRIFT",
    genre: "Precision Mountain Racing",
    lastPlayed: "1 week ago",
    progress: "Gold Cup Unlocked",
    tagline: "Pure 120 FPS downhill physics and razor-sharp drift lines.",
    colorHex: "#d77a7a",
  },
  {
    id: "4",
    name: "MONOLITH ARCHIVE",
    genre: "Atmospheric Narrative Puzzle",
    lastPlayed: "2 weeks ago",
    progress: "18/24 Glyphs Discovered",
    tagline: "Unravel ancient stone monoliths across forgotten archipelago islands.",
    colorHex: "#b3bd95",
  },
];

export function RNKTVConsoleSimulator() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeGame = GAMES[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % GAMES.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + GAMES.length) % GAMES.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        setIsPlaying(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="border-2 border-black bg-black text-white p-3 select-none">
      {/* 1996 CRT TV Safe Zone Header */}
      <div className="bg-[#202020] border-b-2 border-black p-2 flex flex-wrap items-center justify-between gap-2 font-heading text-xs font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#fcc20f]" />
          <span>RNK 10-FOOT LIVING ROOM TV CONSOLE OS (KEYBOARD ARROWS ENABLED)</span>
        </div>
        <div className="text-zinc-400 font-mono text-[11px]">
          [← / → ARROWS TO BROWSE · ENTER TO LAUNCH]
        </div>
      </div>

      {/* 10-Foot Living Room TV Viewport */}
      <div
        className="p-6 md:p-8 min-h-[380px] border border-zinc-700 flex flex-col justify-between"
        style={{ backgroundColor: activeGame.colorHex }}
      >
        {/* Status Strip */}
        <div className="flex items-center justify-between text-black font-heading text-xs font-bold border-b-2 border-black pb-2">
          <div>PROFILE: RAUNAK SINGH (COUCH VIEW)</div>
          <div>CONTROLLER 1: CONNECTED · 92% BATTERY · 21:40</div>
        </div>

        {/* Focused Game Billboard */}
        <div className="my-4 max-w-xl bg-black text-white p-5 border-2 border-white space-y-2">
          <div className="text-[#fcc20f] font-heading font-black text-xs uppercase">
            {activeGame.genre} · {activeGame.progress}
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none">
            {activeGame.name}
          </h3>

          <p className="font-body text-xs sm:text-sm text-zinc-300 leading-snug">
            {activeGame.tagline}
          </p>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(true)}
              className="bg-[#fcc20f] text-black border-2 border-white px-4 py-2 font-heading font-black text-xs uppercase cursor-pointer hover:bg-yellow-400"
            >
              [PRESS ENTER / A TO RESUME]
            </button>
            <span className="font-mono text-[10px] text-zinc-400">
              LAST PLAYED: {activeGame.lastPlayed}
            </span>
          </div>
        </div>

        {/* Horizontal Game Ribbon */}
        <div className="space-y-1">
          <div className="font-heading font-bold text-xs uppercase text-black">
            RECENT TITLES ({selectedIndex + 1} OF {GAMES.length}):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {GAMES.map((game, idx) => {
              const isFocused = idx === selectedIndex;
              return (
                <div
                  key={game.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-2.5 border-2 cursor-pointer font-heading uppercase text-xs ${
                    isFocused
                      ? "bg-black text-[#fcc20f] border-white font-black"
                      : "bg-white/80 text-black border-black hover:bg-white"
                  }`}
                >
                  <div className="truncate font-bold">{game.name}</div>
                  <div className="font-body text-[9px] text-zinc-700 truncate mt-0.5">
                    {game.genre}
                  </div>
                  {isFocused && (
                    <div className="text-[#e91d2a] text-[9px] font-black mt-1">
                      [FOCUSED]
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Launch Simulation */}
        {isPlaying && (
          <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6 text-center font-heading">
            <div className="border-2 border-white bg-black p-6 max-w-md space-y-3">
              <h4 className="text-xl font-black text-[#fcc20f] uppercase">
                LAUNCHING {activeGame.name}...
              </h4>
              <p className="font-body text-xs text-zinc-300">
                Loaded state from local NVMe cache in 1.4s. 10-foot distance legibility confirmed.
              </p>
              <button
                onClick={() => setIsPlaying(false)}
                className="bg-white text-black font-black text-xs uppercase px-4 py-2 border border-white cursor-pointer hover:bg-zinc-200"
              >
                [RETURN TO TV CONSOLE]
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Virtual D-Pad controls */}
      <div className="mt-2 border-t border-zinc-700 pt-2 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span>ON-SCREEN D-PAD:</span>
          <button
            onClick={() => setSelectedIndex((prev) => (prev - 1 + GAMES.length) % GAMES.length)}
            className="px-2 py-0.5 border border-zinc-600 bg-zinc-900 text-white cursor-pointer hover:bg-zinc-800"
          >
            [← PREVIOUS]
          </button>
          <button
            onClick={() => setSelectedIndex((prev) => (prev + 1) % GAMES.length)}
            className="px-2 py-0.5 border border-zinc-600 bg-zinc-900 text-white cursor-pointer hover:bg-zinc-800"
          >
            [NEXT →]
          </button>
        </div>
        <div>SAFE-ZONE BOUNDARY: 5% MARGIN PROTECTED</div>
      </div>
    </div>
  );
}
