"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Check } from "lucide-react";
import { PROCESS_STEPS } from "@/data/imagineContent";

interface ProzessProps {
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const Prozess: React.FC<ProzessProps> = ({ onPlayVideo }) => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Top Section Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
            Workflow &amp; Quality Control
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
            Creative quality. Clear accountability.
          </h2>
          <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed">
            You keep complete oversight. We lead the entire production engine. We coordinate all craft disciplines and bring creative decisions into sharp focus early. A dedicated production director steers your project from briefing to final delivery.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-2 text-[#a89bfa]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide text-white">
                Milestone Assurance
              </span>
            </div>
            <p className="text-xs text-[#f4f2f780] leading-relaxed">
              Each phase concludes with an unambiguous client sign-off checkpoint, ensuring quality, milestones, and costs remain completely predictable.
            </p>
          </div>
        </div>
      </div>


      {/* 5-Phase Process Steps Roadmap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-2xl font-mono font-bold text-[#a89bfa] block mb-3">
                {step.nr}
              </span>
              <h4 className="text-lg font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white">
                {step.titleEn}
              </h4>
              <p className="text-xs text-[#f4f2f780] leading-relaxed">
                {step.descEn}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-white/30">
              <span>{`Step ${idx + 1}/5`}</span>
              <Check className="w-3.5 h-3.5 text-[#a89bfa]/60" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
