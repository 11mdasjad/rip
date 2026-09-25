"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { CAMPAIGN_SERVICES } from "@/data/campaigns";

interface CampaignServicesProps {
  onOpenContact?: () => void;
}

export const CampaignServices: React.FC<CampaignServicesProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-[0.25em] text-[#5A7865] uppercase font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#5A7865]" />
            <span>DISCIPLINED CAMPAIGN COMMUNICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight">
            A sharper story for <br />
            <span className="italic font-light text-[#6F7A74]">
              every public moment.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F7A74] font-sans leading-relaxed">
            RFP Digital combines campaign strategy with disciplined media execution,
            helping clients maintain clear and consistent communication across
            production and digital channels.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image & Consultation Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded-3xl bg-[#182622] overflow-hidden border border-[#E2DDD2] shadow-xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop"
                alt="Campaign strategy and media room session"
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8CA394] block">
                  Ethical & Strategic Deployment
                </span>
                <h4 className="font-serif text-xl">
                  Ground Intelligence. Digital Agility.
                </h4>
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Operating in full compliance with platform guidelines and regulatory
                  standards, delivering non-sensational, fact-anchored resonance.
                </p>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DDD2] space-y-4">
              <h4 className="font-serif text-2xl text-[#161D1A]">
                Plan a Campaign Consultation
              </h4>
              <p className="text-xs text-[#6F7A74] font-sans leading-relaxed">
                Connect with our senior campaign strategists to review narrative objectives,
                digital architecture, and rapid-response turnaround workflows.
              </p>
              <a
                href="#contact"
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#161D1A] text-[#FAF8F5] text-xs font-mono uppercase tracking-widest hover:bg-[#5A7865] rounded-full transition-colors"
              >
                <span>Request Strategic Briefing</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Service Highlights with Line Dividers */}
          <div className="lg:col-span-7 space-y-6">
            <div className="divide-y divide-[#E2DDD2] border-y border-[#E2DDD2]">
              {CAMPAIGN_SERVICES.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={item.number}
                    className={`py-6 transition-all duration-300 cursor-pointer rounded-2xl ${
                      isActive ? "bg-[#FAF8F5] px-6" : "hover:bg-[#FAF8F5]/50 px-4"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-baseline space-x-4">
                        <span className="text-xs font-mono text-[#5A7865] font-semibold">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="font-serif text-2xl text-[#161D1A] font-medium">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#6F7A74] font-sans mt-0.5">
                            {item.tagline}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${
                          isActive
                            ? "bg-[#161D1A] text-white border-[#161D1A]"
                            : "border-[#E2DDD2] text-[#6F7A74]"
                        }`}
                      >
                        {isActive ? "Selected" : "Details"}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-4 pl-8 space-y-3 animate-in fade-in duration-300">
                        <p className="text-sm text-[#161D1A] font-sans leading-relaxed">
                          {item.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {item.keyPoints.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-xs text-[#6F7A74]"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5A7865] shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2DDD2] text-[11px] font-mono text-[#6F7A74]">
              NOTICE: All campaign production adheres strictly to applicable election commission
              guidelines, intellectual property safeguards, and transparency standards.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

