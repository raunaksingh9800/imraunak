"use client";

import React, { useState } from "react";

interface Message {
  id: string;
  sender: "buyer" | "ai";
  text: string;
  time: string;
  propertyCard?: {
    title: string;
    location: string;
    price: string;
    roi: string;
    goldenVisa: boolean;
  };
  options?: string[];
}

export function PropPandaSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "buyer",
      text: "Hi, I am an investor from London. Looking for a 2-bedroom property near Downtown Dubai with strong short-term rental yields.",
      time: "21:40",
    },
    {
      id: "2",
      sender: "ai",
      text: "Welcome! Downtown Dubai yields average 8.4% net. Properties at AED 2.8M+ also qualify for the UAE 10-Year Golden Visa. Here is an off-plan allocation matched to your criteria:",
      time: "21:40",
      propertyCard: {
        title: "Burj Crown Residences · Luxury Suite",
        location: "Downtown Dubai · 4 min walk to Dubai Mall",
        price: "AED 3,150,000 (~$858,000 USD)",
        roi: "8.4% Projected Net Yield",
        goldenVisa: true,
      },
      options: [
        "Request full payment plan & cashflow model",
        "Book private VIP agent video tour",
        "Explore Palm Jumeirah waterfront options",
      ],
    },
  ]);

  const [leadScore, setLeadScore] = useState<number>(88);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = {
      id: String(Date.now()),
      sender: "buyer",
      text: option,
      time: "21:41",
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let reply: Message;
      if (option.includes("Book private VIP")) {
        setLeadScore(96);
        setBookingConfirmed(true);
        reply = {
          id: String(Date.now() + 1),
          sender: "ai",
          text: "Priority tour registered with Laila, Senior Downtown Investment Specialist. A calendar confirmation has been generated for tomorrow at 3:00 PM GST.",
          time: "21:41",
        };
      } else if (option.includes("payment plan")) {
        setLeadScore(92);
        reply = {
          id: String(Date.now() + 1),
          sender: "ai",
          text: "Payment Schedule: 20% on booking, 50% during construction, and 30% on handover (Q4 2027). Net annual projected rental income: AED 264,000.",
          time: "21:41",
          options: ["Book private VIP agent video tour"],
        };
      } else {
        reply = {
          id: String(Date.now() + 1),
          sender: "ai",
          text: "Retrieved Palm Jumeirah luxury beachfront units with private beach access. Net yield: 7.9%.",
          time: "21:41",
          propertyCard: {
            title: "Palm Beach Tower II · Beachfront Residence",
            location: "Palm Jumeirah · Sea & Skyline Views",
            price: "AED 4,800,000 (~$1.3M USD)",
            roi: "7.9% Projected Net Yield",
            goldenVisa: true,
          },
          options: ["Book private VIP agent video tour"],
        };
      }
      setMessages((prev) => [...prev, reply]);
    }, 500);
  };

  return (
    <div className="border-2 border-black bg-white select-none">
      {/* Simulation Header */}
      <div className="bg-black text-white p-2 border-b-2 border-black flex flex-wrap items-center justify-between gap-2 font-heading text-xs font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#fcc20f]" />
          <span>PROPPANDA CONVERSATIONAL AI ENGINE (8+ DUBAI CLIENTS)</span>
        </div>
        <div className="text-[#e91d2a]">
          LATENCY: 280ms · BROKER: LAILA (DUBAI MARINA)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x-2 divide-black">
        {/* Left Chat Window (7 Cols) */}
        <div className="lg:col-span-7 p-3 flex flex-col justify-between min-h-[420px] bg-white">
          <div className="space-y-3 overflow-y-auto max-h-[340px] pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2.5 border border-black ${
                  msg.sender === "buyer" ? "bg-[#d4d0c8]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between font-heading text-[10px] uppercase font-bold text-zinc-600 mb-1">
                  <span>{msg.sender === "buyer" ? "INTERNATIONAL INVESTOR:" : "PROPPANDA AI ADVISOR:"}</span>
                  <span>{msg.time}</span>
                </div>

                <p className="font-body text-xs text-black leading-relaxed">{msg.text}</p>

                {/* Inline Property Card */}
                {msg.propertyCard && (
                  <div className="border-2 border-black bg-[#8c9ae0] p-2.5 mt-2 text-black font-body">
                    <div className="font-heading font-black text-xs uppercase mb-0.5">
                      {msg.propertyCard.title}
                    </div>
                    <div className="text-[11px] text-zinc-900 mb-1.5 font-bold">
                      {msg.propertyCard.location}
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-black pt-1 font-heading text-xs">
                      <div>
                        <span className="text-[9px] uppercase block text-zinc-800">PRICE:</span>
                        <span className="font-black text-black">{msg.propertyCard.price}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase block text-zinc-800">NET YIELD:</span>
                        <span className="font-black text-black">{msg.propertyCard.roi}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Option Buttons */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        className="bg-black text-[#fcc20f] border border-black px-2 py-1 font-heading text-[10px] font-bold uppercase cursor-pointer hover:bg-zinc-800"
                      >
                        [→ {opt}]
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-black text-right">
            <span className="font-body text-[11px] text-zinc-600">
              Click any suggested action bracket above to simulate conversational lead qualification.
            </span>
          </div>
        </div>

        {/* Right Radar Column (5 Cols) */}
        <div className="lg:col-span-5 p-3 bg-[#f5f5f5] space-y-3 font-heading text-xs">
          <div className="border-b border-black pb-1">
            <span className="font-black text-black uppercase block">
              BROKER INTENT RADAR (REAL-TIME):
            </span>
          </div>

          <div className="border border-black bg-white p-2">
            <span className="text-[10px] text-zinc-600 block uppercase">CONVERSION PROBABILITY:</span>
            <span className="text-xl font-black text-[#e91d2a] block">{leadScore} / 100</span>
            <div className="w-full h-2 border border-black bg-zinc-200 mt-1">
              <div
                className="h-full bg-[#e91d2a]"
                style={{ width: `${leadScore}%` }}
              />
            </div>
          </div>

          <div className="border border-black bg-white p-2 space-y-1 text-[11px]">
            <div>
              <strong>BUDGET BRACKET:</strong> $750,000 – $1,200,000 USD
            </div>
            <div>
              <strong>INTENT:</strong> Short-term Yield + Golden Visa
            </div>
            <div>
              <strong>TARGET COMPLETION:</strong> Q4 2027
            </div>
            <div>
              <strong>TIMEZONE:</strong> London (GMT+0)
            </div>
          </div>

          {bookingConfirmed && (
            <div className="border-2 border-green-700 bg-[#e6f4ea] p-2 text-green-900 font-bold">
              ✓ VIP TOUR CONFIRMED: Calendar dispatched to investor.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
