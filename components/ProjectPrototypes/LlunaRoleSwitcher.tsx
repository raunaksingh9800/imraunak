"use client";

import React, { useState } from "react";

export function LlunaRoleSwitcher() {
  const [role, setRole] = useState<"faculty" | "student" | "hod">("faculty");
  const [vectorQuery, setVectorQuery] = useState(
    "Deep learning for autonomous weed classification in sugarcane crops"
  );
  const [evaluationScore, setEvaluationScore] = useState<number>(4);
  const [approvalStatus, setApprovalStatus] = useState<"pending" | "approved">("pending");

  return (
    <div className="border-2 border-black bg-white select-none">
      {/* Simulation Header */}
      <div className="bg-black text-white p-2 border-b-2 border-black flex flex-wrap items-center justify-between gap-2 font-heading text-xs font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#9ab6c8]" />
          <span>LLUNA ACADEMIC OPERATING SYSTEM (6 ENGINEERING DEPTS)</span>
        </div>
        <div className="text-[#fcc20f]">
          USERS: 3,000+ · LEAD TIME CUT: 99%
        </div>
      </div>

      {/* Role Switcher Tabs */}
      <div className="border-b border-black p-2 bg-[#d4d0c8] flex flex-wrap items-center justify-center gap-2 font-heading text-xs font-bold uppercase">
        <button
          onClick={() => setRole("faculty")}
          className={`px-3 py-1.5 border border-black cursor-pointer ${
            role === "faculty" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          [1. FACULTY MODE (SPLIT RUBRIC)]
        </button>

        <button
          onClick={() => setRole("student")}
          className={`px-3 py-1.5 border border-black cursor-pointer ${
            role === "student" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          [2. STUDENT PIPELINE TRACKER]
        </button>

        <button
          onClick={() => setRole("hod")}
          className={`px-3 py-1.5 border border-black cursor-pointer ${
            role === "hod" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          [3. HOD VECTOR DUPLICATE RADAR]
        </button>
      </div>

      <div className="p-4 sm:p-5">
        {/* Role 1: Faculty */}
        {role === "faculty" && (
          <div className="space-y-3 font-heading text-xs">
            <div className="border-b border-black pb-1 flex justify-between">
              <span className="font-black uppercase text-[#e91d2a]">
                CAPSTONE PHASE 2 REVIEW · TEAM #CS-42
              </span>
              <span className="text-zinc-600">SUBMISSION: TODAY, 14:20 PM</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-7 border border-black p-3 bg-[#f5f5f5] space-y-1.5">
                <span className="font-bold text-black uppercase block">
                  TECHNICAL SYNOPSIS (INLINE PDF PREVIEW):
                </span>
                <p className="font-body text-xs text-black leading-relaxed">
                  &ldquo;Proposed methodology evaluates lightweight YOLOv8 nano model trained on local Karnataka sugar cane leaf rust datasets with EdgeTPU acceleration on solar field drones...&rdquo;
                </p>
                <div className="text-[10px] text-green-800 font-bold">
                  PLAGIARISM INDEX: 4% (VERIFIED NOVEL)
                </div>
              </div>

              <div className="md:col-span-5 border border-black p-3 bg-white space-y-2">
                <span className="font-black uppercase text-black block">
                  FAST 1-CLICK GRADING RUBRIC:
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setEvaluationScore(star)}
                      className={`flex-1 py-1 border border-black font-bold cursor-pointer ${
                        evaluationScore >= star ? "bg-[#fcc20f] text-black" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {star}★
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  {approvalStatus === "approved" ? (
                    <div className="bg-[#e6f4ea] border border-green-700 p-2 text-green-900 text-center font-bold">
                      ✓ SYNOPSIS APPROVED &amp; ROUTED TO HOD
                    </div>
                  ) : (
                    <button
                      onClick={() => setApprovalStatus("approved")}
                      className="w-full py-2 bg-black hover:bg-zinc-800 text-white font-black uppercase border border-black cursor-pointer"
                    >
                      [APPROVE &amp; SIGN OFF (1-CLICK)]
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Role 2: Student */}
        {role === "student" && (
          <div className="space-y-3 font-heading text-xs">
            <div className="border-b border-black pb-1">
              <span className="font-black uppercase text-[#e91d2a]">
                STUDENT CAPSTONE TRANSPARENCY PIPELINE (7 STAGES)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-1.5 text-center">
              {[
                { name: "1. Abstract", done: true },
                { name: "2. Guide", done: true },
                { name: "3. Ethics", done: true },
                { name: "4. HOD Review", active: true },
                { name: "5. Mid Demo", done: false },
                { name: "6. Audit", done: false },
                { name: "7. Defense", done: false },
              ].map((s) => (
                <div
                  key={s.name}
                  className={`p-2 border border-black ${
                    s.done
                      ? "bg-[#e6f4ea] text-green-900 font-bold"
                      : s.active
                      ? "bg-[#fcc20f] text-black font-black"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {s.name}
                </div>
              ))}
            </div>

            <div className="border border-black bg-[#f5f5f5] p-2.5 font-body text-xs text-black">
              <strong>GUIDE PROFESSOR NOTE:</strong> &ldquo;Dataset coverage is strong. Quantify solar battery flight margins before mid-term presentation.&rdquo;
            </div>
          </div>
        )}

        {/* Role 3: HOD Vector Search */}
        {role === "hod" && (
          <div className="space-y-3 font-heading text-xs">
            <div className="border-b border-black pb-1">
              <span className="font-black uppercase text-black">
                SEMANTIC VECTOR SEARCH: PREVENTING RESEARCH REDUNDANCY
              </span>
            </div>

            <div className="border border-black bg-[#f5f5f5] p-2.5">
              <label className="block text-[10px] uppercase font-bold text-zinc-600 mb-1">
                QUERYING 400+ INDEXED CAPSTONES ACROSS 6 DEPARTMENTS:
              </label>
              <input
                type="text"
                value={vectorQuery}
                onChange={(e) => setVectorQuery(e.target.value)}
                className="w-full border border-black p-1.5 bg-white font-mono text-xs text-black"
              />
            </div>

            <div className="space-y-1.5">
              <div className="border-2 border-black bg-[#fce8e6] p-2 flex justify-between items-center text-xs">
                <div>
                  <strong>MATCH: 2024 CAPSTONE (DEPT OF ISE)</strong>
                  <div className="font-body text-[11px] text-zinc-800">
                    &ldquo;UAV-based Weed Detection in Karnataka Farms using CNN&rdquo;
                  </div>
                </div>
                <span className="bg-[#e91d2a] text-white px-2 py-0.5 font-black">
                  78% OVERLAP FLAGGED
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-black p-2 bg-[#d4d0c8] text-right font-body text-[11px] text-black">
        Eliminating duplicate capstones &amp; redundant student work through vector embeddings.
      </div>
    </div>
  );
}
