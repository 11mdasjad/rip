"use client";

import React, { useState } from "react";
import { ShieldCheck, Sparkles, Users, Leaf, ArrowRight } from "lucide-react";

export const CorePrinciples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const principles = [
    {
      title: "Integrity",
      icon: ShieldCheck,
      description:
        "We lead with honesty, transparency, and narrative accountability in every creative decision, building trust through clear communication and unwavering respect for each subject.",
      metric: "100% Authentic Narratives",
    },
    {
      title: "Innovation",
      icon: Sparkles,
      description:
        "We embrace creative solutions and cutting-edge cinema technology—from large-format anamorphic sensors to real-time virtual production—to deliver exceptional, timeless value.",
      metric: "Cutting-Edge Cinema Tools",
    },
    {
      title: "Community",
      icon: Users,
      description:
        "We foster inclusive and supportive environments on every film set, connecting local communities, technicians, and visionaries to nurture collaborative creative ecosystems.",
      metric: "Pan-Regional Collaborations",
    },
    {
      title: "Sustainability",
      icon: Leaf,
      description:
        "We prioritize eco-friendly production practices, low-footprint field setups, and solar-supported remote units to minimize environmental impact across all shooting terrains.",
      metric: "Green Filming Protocols",
    },
  ];

  return (
    <section className="bg-[#131F1C] text-[#FAF8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 rounded-[32px] sm:rounded-[44px] my-12 max-w-7xl mx-auto overflow-hidden relative border border-[#243631]">
      {/* Decorative background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5A7865]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pill Cutout Badge (Matching Reference Design) */}
      <div className="flex items-center space-x-2.5 mb-12">
        <span className="text-sm text-[#8CA394]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8CA394] font-semibold">
          CORE PRINCIPLES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Visuals (Infinity pool mountain villa + patio thumbnail from reference) */}
        <div className="lg:col-span-6 relative space-y-6 order-2 lg:order-1">
          {/* Main Visual: Infinity Pool Villa / High-End Cinema Location */}
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-[#243631] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury infinity pool overlooking mountain ridges"
              className="w-full h-full object-cover object-center filter saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Inset Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#8CA394] uppercase block">
                  Location Philosophy
                </span>
                <p className="font-serif text-lg leading-tight">
                  Harmony between Architecture, Nature & Cinema
                </p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/20 uppercase tracking-widest text-[#8CA394]">
                Est. 2012
              </span>
            </div>
          </div>

          {/* Secondary Thumbnail: Inset Patio Dining / Set Detail (Matching Reference Image) */}
          <div className="hidden sm:flex items-center justify-between p-4 rounded-2xl bg-[#182622] border border-[#243631]">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=300&auto=format&fit=crop"
                  alt="Patio dining setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider text-[#8CA394] uppercase block">
                  Field Operations
                </span>
                <p className="font-serif text-sm text-[#FAF8F5]">
                  Low-impact sustainable deployments across remote India
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono text-[#8CA394] block">Standards</span>
              <span className="text-xs font-semibold text-[#FAF8F5]">ISO-Cinematic</span>
            </div>
          </div>
        </div>

        {/* Right Column: Headline & Interactive 4 Core Values (Matching Mockup) */}
        <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FAF8F5] leading-tight tracking-tight">
              The principles behind <br />
              <span className="font-normal text-[#FAF8F5]">every story we create</span>
            </h3>
          </div>

          {/* 4 Interactive Values List */}
          <div className="divide-y divide-[#243631]">
            {principles.map((principle, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={principle.title}
                  onClick={() => setActiveTab(index)}
                  className={`py-5 transition-all duration-300 cursor-pointer group ${
                    isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] group-hover:text-[#8CA394] transition-colors flex items-center space-x-3">
                      <span className="text-xs font-mono text-[#8CA394]">0{index + 1}</span>
                      <span>{principle.title}</span>
                    </h4>

                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border transition-all ${
                        isSelected
                          ? "bg-[#5A7865] text-white border-[#5A7865]"
                          : "border-[#243631] text-[#8CA394] group-hover:border-[#8CA394]"
                      }`}
                    >
                      {principle.metric}
                    </span>
                  </div>

                  <p
                    className={`mt-2.5 text-xs sm:text-sm text-[#8CA394] font-sans leading-relaxed transition-all duration-300 ${
                      isSelected ? "block max-h-40 opacity-100" : "hidden sm:block opacity-60"
                    }`}
                  >
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8CA394] hover:text-[#FAF8F5] transition-colors group"
            >
              <span>Explore Partnership Protocols</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
