"use client";

import React, { useState } from "react";

export function CIALabsQRSimulator() {
  const [activeTab, setActiveTab] = useState<"pass" | "scan">("scan");
  const [score, setScore] = useState<number>(340);
  const [scannedPeer, setScannedPeer] = useState<boolean>(false);
  const [guessResult, setGuessResult] = useState<"pending" | "correct" | "wrong">("pending");

  const handleGuess = (hobby: string) => {
    if (hobby === "Modular Synthesizers") {
      setGuessResult("correct");
      setScore((prev) => prev + 50);
    } else {
      setGuessResult("wrong");
    }
  };

  const resetPeerScan = () => {
    setScannedPeer(false);
    setGuessResult("pending");
  };

  return (
    <div className="border-2 border-black bg-white select-none">
      {/* Simulation Header */}
      <div className="bg-black text-white p-2 border-b-2 border-black flex flex-wrap items-center justify-between gap-2 font-heading text-xs font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#e91d2a]" />
          <span>CIALABS CONNECT · CAMPUS PEER DISCOVERY</span>
        </div>
        <div className="text-[#fcc20f]">
          SCORE: {score} PTS · 4,000+ CONCURRENT ATTENDEES
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-black p-2 bg-[#d4d0c8] flex items-center justify-center gap-2 font-heading text-xs font-bold">
        <button
          onClick={() => setActiveTab("scan")}
          className={`px-3 py-1.5 border border-black cursor-pointer uppercase ${
            activeTab === "scan" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          [1. INTERACTIVE PEER SCANNER]
        </button>

        <button
          onClick={() => setActiveTab("pass")}
          className={`px-3 py-1.5 border border-black cursor-pointer uppercase ${
            activeTab === "pass" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          [2. MY DYNAMIC CAMPUS PASS]
        </button>
      </div>

      <div className="p-4 sm:p-5">
        {activeTab === "pass" ? (
          <div className="max-w-md mx-auto border-2 border-black bg-[#d77a7a] p-4 text-center font-heading">
            <h4 className="font-black text-base uppercase text-black">Raunak Singh</h4>
            <div className="font-body text-xs text-black">Atria IT · Computer Science &amp; Design · 2028</div>

            <div className="my-3 p-3 bg-white border-2 border-black inline-block">
              {/* Retro 1996 bitmap-style QR representation */}
              <div className="w-36 h-36 border border-black p-1 bg-black text-white font-mono text-[9px] flex flex-col justify-between text-left">
                <div>[QR TOKEN: CIA-2025-AIT-992]</div>
                <div className="text-center text-xs tracking-widest leading-none my-auto">
                  ■ ■ ■ ■ ■<br />
                  ■ □ □ □ ■<br />
                  ■ □ ■ □ ■<br />
                  ■ □ □ □ ■<br />
                  ■ ■ ■ ■ ■
                </div>
                <div className="text-right">[SCAN CAMERA READY]</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-1 font-heading text-[10px] uppercase">
              <span className="bg-white border border-black px-1.5 py-0.5">Design Systems</span>
              <span className="bg-white border border-black px-1.5 py-0.5">Hardware UX</span>
              <span className="bg-white border border-black px-1.5 py-0.5">Synthesizers</span>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            {!scannedPeer ? (
              <div className="border-2 border-dashed border-black p-6 text-center bg-[#f5f5f5] space-y-3">
                <div className="font-heading font-black text-sm uppercase text-black">
                  SIMULATE SCANNING A PEER CAMPUS BADGE
                </div>
                <p className="font-body text-xs text-zinc-700">
                  Peer NFC/QR interaction engineered for 4,000+ concurrent students during Community Day.
                </p>

                <button
                  onClick={() => setScannedPeer(true)}
                  className="bg-black text-[#fcc20f] border-2 border-black px-4 py-2 font-heading font-black text-xs uppercase cursor-pointer hover:bg-zinc-800"
                >
                  [SCAN PEER: ADITYA (3RD YEAR CSE)]
                </button>
              </div>
            ) : (
              <div className="border-2 border-black bg-white p-4 space-y-3 font-heading">
                <div className="border-b border-black pb-2 flex items-center justify-between">
                  <div>
                    <h5 className="font-black text-sm uppercase text-black">Aditya K.</h5>
                    <p className="font-body text-xs text-zinc-700">3rd Year CSE · Cloud Computing</p>
                  </div>
                  <span className="bg-[#fcc20f] border border-black px-2 py-0.5 text-[10px] font-black uppercase">
                    PEER SCANNED (1.2s)
                  </span>
                </div>

                <div className="border border-black bg-[#fce8e6] p-3 space-y-2">
                  <div className="font-black text-xs uppercase text-[#e91d2a]">
                    GAMIFIED ICEBREAKER (+50 BONUS PTS):
                  </div>
                  <p className="font-body text-xs text-black">
                    Guess Aditya&apos;s hidden personal hobby to unlock peer contact exchange:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                    {["Competitive Swimming", "Modular Synthesizers", "Coffee Roasting"].map(
                      (hobby) => (
                        <button
                          key={hobby}
                          onClick={() => handleGuess(hobby)}
                          className="bg-white hover:bg-zinc-100 text-black border border-black p-1.5 text-[11px] font-bold uppercase cursor-pointer text-left"
                        >
                          [ {hobby} ]
                        </button>
                      )
                    )}
                  </div>

                  {guessResult === "correct" && (
                    <div className="bg-[#e6f4ea] border border-green-700 p-2 text-green-900 text-xs font-bold">
                      ✓ CORRECT! Aditya builds modular Eurorack synths. +50 PTS awarded!
                    </div>
                  )}

                  {guessResult === "wrong" && (
                    <div className="bg-red-100 border border-red-700 p-2 text-red-900 text-xs font-bold">
                      Incorrect. Aditya builds Modular Synthesizers!
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <button
                    onClick={resetPeerScan}
                    className="bg-black text-white px-3 py-1 text-xs uppercase font-bold cursor-pointer"
                  >
                    [SCAN ANOTHER ATTENDEE]
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-black p-2 bg-[#d4d0c8] text-right font-body text-[11px] text-black">
        Accessibility standard: WCAG AAA high contrast · Vibration &amp; audio chimes for visual impairments.
      </div>
    </div>
  );
}
