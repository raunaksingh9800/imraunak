"use client";

import React, { useState } from "react";

export function ITCFactoryScanner() {
  const [ambientMode, setAmbientMode] = useState<"dim" | "high-contrast">("dim");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scanState, setScanState] = useState<"idle" | "scanning" | "success" | "error">("idle");
  const [selectedBay, setSelectedBay] = useState<string>("Bay 04B — Dry Storage");
  const [gloveGuide, setGloveGuide] = useState(true);

  const simulateScan = (type: "valid" | "mismatch") => {
    setScanState("scanning");
    setTimeout(() => {
      if (type === "valid") {
        setScanState("success");
      } else {
        setScanState("error");
      }
    }, 600);
  };

  const resetScanner = () => {
    setScanState("idle");
  };

  const isHighContrast = ambientMode === "high-contrast";

  return (
    <div className="border-2 border-black bg-black text-white p-3 select-none">
      {/* 1996 Industrial Floor Terminal Header */}
      <div className="bg-[#202020] border-b-2 border-black p-2 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-emerald-400" />
          <span className="text-white font-bold uppercase">
            ITC FLOOR-OS v1.0 · TERMINAL #DOCK-04 (BENGALURU PLANT)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setGloveGuide(!gloveGuide)}
            className="px-2 py-0.5 border border-white bg-black text-white font-mono text-[10px] uppercase cursor-pointer"
          >
            {gloveGuide ? "[GLOVE TARGETS: ON (64px)]" : "[GLOVE TARGETS: OFF]"}
          </button>

          <button
            onClick={() => setAmbientMode(ambientMode === "dim" ? "high-contrast" : "dim")}
            className="px-2 py-0.5 border border-white bg-black text-[#fcc20f] font-mono text-[10px] uppercase cursor-pointer"
          >
            {ambientMode === "dim" ? "[SUNLIGHT DOCK MODE]" : "[DIM BAY RACK MODE]"}
          </button>
        </div>
      </div>

      {/* Terminal Viewport */}
      <div
        className={`p-4 border border-zinc-800 ${
          isHighContrast ? "bg-black text-white" : "bg-[#111612] text-zinc-200"
        }`}
      >
        {/* Status Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 font-mono text-[11px] border border-zinc-700 p-2 bg-black">
          <div>
            <span className="text-zinc-500 block uppercase">ACTIVE SHIFT:</span>
            <span className="text-white font-bold">Shift A (06:00-14:00)</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase">OPERATOR:</span>
            <span className="text-white font-bold">Ramu (Badge #719)</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase">DOCK BAY:</span>
            <span className="text-emerald-400 font-bold">Bay 04 (Active)</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase">PALLETS CLEARED:</span>
            <span className="text-white font-bold">142 / 160</span>
          </div>
        </div>

        {/* State 1: Ready to Scan */}
        {scanState === "idle" && (
          <div className="border-2 border-dashed border-zinc-600 p-5 text-center bg-black/60 space-y-4">
            <div className="font-heading font-black text-base text-[#fcc20f] uppercase">
              READY FOR INBOUND PALLET LASER SCAN
            </div>
            <p className="font-body text-xs text-zinc-300 max-w-md mx-auto">
              Simulate barcode scan against SAP Goods Receipt. Buttons adhere to 64px physical safety glove reach standards.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => simulateScan("valid")}
                className={`w-full sm:w-auto px-4 py-3 min-h-[56px] font-heading font-black text-xs uppercase bg-emerald-600 hover:bg-emerald-500 text-black border-2 border-white cursor-pointer ${
                  gloveGuide ? "outline outline-2 outline-emerald-400" : ""
                }`}
              >
                [SCAN VALID PALLET: SUNFEAST WHEAT FLOUR]
              </button>

              <button
                onClick={() => simulateScan("mismatch")}
                className={`w-full sm:w-auto px-4 py-3 min-h-[56px] font-heading font-black text-xs uppercase bg-[#e91d2a] hover:bg-red-600 text-white border-2 border-white cursor-pointer ${
                  gloveGuide ? "outline outline-2 outline-red-400" : ""
                }`}
              >
                [SIMULATE BATCH MISMATCH ERROR]
              </button>
            </div>
          </div>
        )}

        {/* State 2: Processing */}
        {scanState === "scanning" && (
          <div className="p-8 text-center bg-black font-mono">
            <div className="text-[#fcc20f] text-sm font-bold uppercase animate-pulse">
              QUERYING SAP ENTERPRISE INVENTORY DATABASE...
            </div>
            <div className="text-zinc-400 text-xs mt-1">Reconciling PO #ITC-PO-2026-9941</div>
          </div>
        )}

        {/* State 3: Valid Pallet Verified */}
        {scanState === "success" && (
          <div className="border-2 border-emerald-500 bg-black p-4 space-y-3 font-mono text-xs">
            <div className="bg-emerald-900/60 border border-emerald-500 p-2 flex items-center justify-between text-emerald-300 font-bold">
              <span>BATCH VERIFIED · READY TO STOW</span>
              <span>100% MATCH</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white">
              <div className="border border-zinc-700 p-2 bg-zinc-900">
                <span className="text-zinc-500 block uppercase text-[10px]">MATERIAL SKU:</span>
                <span className="font-bold text-sm block">Sunfeast Atta Superfine</span>
                <span className="text-zinc-400 text-[10px]">SKU #ITC-WHT-4029</span>
              </div>
              <div className="border border-zinc-700 p-2 bg-zinc-900">
                <span className="text-zinc-500 block uppercase text-[10px]">GROSS WEIGHT:</span>
                <span className="font-bold text-emerald-400 text-sm block">1,250 kg (25 Bags)</span>
                <span className="text-zinc-400 text-[10px]">Within ±0.2% tolerance</span>
              </div>
              <div className="border border-zinc-700 p-2 bg-zinc-900">
                <span className="text-zinc-500 block uppercase text-[10px]">QUALITY STATUS:</span>
                <span className="font-bold text-white text-sm block">QC Passed · Oct 2027</span>
                <span className="text-zinc-400 text-[10px]">Certificate #QC-8840</span>
              </div>
            </div>

            {/* Bay selection */}
            <div className="border border-zinc-700 p-2.5 bg-zinc-900 space-y-1.5">
              <span className="text-[#fcc20f] font-bold block uppercase text-[10px]">
                RECOMMENDED STOWING BAY (SPACE ALLOCATION):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                {[
                  "Bay 04B — Dry Storage (Recommended)",
                  "Bay 04C — Secondary Transit",
                  "Bay 02A — Overflow Silo",
                ].map((bay) => (
                  <button
                    key={bay}
                    onClick={() => setSelectedBay(bay)}
                    className={`p-2 text-left font-mono text-[11px] border cursor-pointer ${
                      selectedBay === bay
                        ? "bg-[#fcc20f] text-black font-bold border-white"
                        : "bg-black text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                    }`}
                  >
                    {bay}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  alert("Pallet Stowed into " + selectedBay + ". ERP Updated.");
                  resetScanner();
                }}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-black text-xs uppercase border-2 border-white cursor-pointer"
              >
                CONFIRM &amp; STOW PALLET (1-TAP ACTION)
              </button>
              <button
                onClick={resetScanner}
                className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs uppercase border border-zinc-600 cursor-pointer"
              >
                RESET
              </button>
            </div>
          </div>
        )}

        {/* State 4: Error State */}
        {scanState === "error" && (
          <div className="border-2 border-red-600 bg-black p-4 space-y-3 font-mono text-xs">
            <div className="bg-red-900 border border-red-500 p-2 text-white font-bold flex items-center justify-between">
              <span>BATCH MISMATCH · DO NOT STOW</span>
              <span>BLOCKED</span>
            </div>

            <p className="text-zinc-300 text-xs">
              Carton code belongs to Purchase Order #PO-1049 (Foods Line B), but Bay 04 is assigned to Line A ingredients.
            </p>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  alert("Shift Supervisor Suresh notified.");
                  resetScanner();
                }}
                className="flex-1 py-3 bg-[#e91d2a] hover:bg-red-600 text-white font-heading font-black text-xs uppercase border-2 border-white cursor-pointer"
              >
                NOTIFY SUPERVISOR (ONE-TOUCH ALERT)
              </button>
              <button
                onClick={resetScanner}
                className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs uppercase border border-zinc-600 cursor-pointer"
              >
                RETRY SCAN
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 text-right text-[10px] font-mono text-zinc-500">
        Touch targets: 64×64px minimum · High-contrast ratio: 14.8:1
      </div>
    </div>
  );
}
