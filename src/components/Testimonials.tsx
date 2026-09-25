"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      quote:
        "RFP DIGITAL transformed our brand narrative from a disjointed brief into a truly effortless, cinematic experience. Their attention to nuanced visual rhythm is exceptional.",
      author: "Daniel Morgan",
      role: "Creative Director — Pan-Continental",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
      project: "Sunset Ridge Architectural Film",
      year: "2024",
    },
    {
      quote:
        "Their team possesses a rare duality: world-class documentary rigour coupled with pristine commercial aesthetics. Working with them set a new benchmark for our agency.",
      author: "Elena Rostova",
      role: "Head of Communications — Lumina Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      project: "The Solitude Pavilion",
      year: "2024",
    },
  ];

  const current = stories[currentIndex];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]">
      {/* Top Section Tag */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-2.5">
          <span className="text-sm text-[#5A7865]">☵</span>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#161D1A] font-semibold">
            CLIENT STORIES
          </span>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevStory}
            aria-label="Previous story"
            className="w-9 h-9 rounded-full border border-[#E2DDD2] hover:border-[#161D1A] flex items-center justify-center text-[#161D1A] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextStory}
            aria-label="Next story"
            className="w-9 h-9 rounded-full border border-[#E2DDD2] hover:border-[#161D1A] flex items-center justify-center text-[#161D1A] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline, Editorial Quote & Daniel Morgan Profile */}
        <div className="lg:col-span-6 space-y-8">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#161D1A] leading-tight tracking-tight">
            Confidence built through <br />
            <span className="font-normal text-[#161D1A]">better storytelling</span>
          </h3>

          {/* Blockquote styled as in reference image */}
          <div className="relative pl-6 border-l-2 border-[#5A7865]">
            <p className="font-serif text-xl sm:text-2xl text-[#161D1A]/90 italic leading-relaxed">
              “{current.quote}”
            </p>
          </div>

          {/* Author info with avatar */}
          <div className="flex items-center space-x-4 pt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.avatar}
              alt={current.author}
              className="w-12 h-12 rounded-full object-cover border border-[#E2DDD2] shadow-sm"
            />
            <div>
              <h4 className="font-serif text-base text-[#161D1A] font-medium leading-none">
                {current.author}
              </h4>
              <p className="text-xs font-sans text-[#6F7A74] mt-1">
                {current.role}
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center space-x-6 text-xs font-mono uppercase tracking-widest text-[#6F7A74]">
            <span>Featured Case: {current.project}</span>
            <span>•</span>
            <span>{current.year}</span>
          </div>
        </div>

        {/* Right Column: Signature Vertical Pill Photography Frames with Interactive Crosshair (Matching Mockup) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Pill 1: With interactive crosshair target */}
          <div className="relative h-80 sm:h-96 rounded-full overflow-hidden shadow-xl border border-[#E2DDD2] bg-[#182622] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              alt="Architectural villa exterior"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Interactive Target Crosshair Pin (Matching Reference Image) */}
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => setActivePin(activePin === "lens" ? null : "lens")}
            >
              <div className="relative flex items-center justify-center w-16 h-16 group/target">
                {/* Thin outer crosshair circle */}
                <div className="absolute inset-0 rounded-full border border-white/60 group-hover/target:scale-110 group-hover/target:border-white transition-all duration-300" />
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <Plus className="w-4 h-4 text-white" />
                </div>

                {/* Crosshair guidelines */}
                <div className="absolute top-0 bottom-0 w-[1px] bg-white/40 pointer-events-none" />
                <div className="absolute left-0 right-0 h-[1px] bg-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Tooltip Overlay */}
            <div
              className={`absolute bottom-6 inset-x-4 bg-[#131F1C]/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white transition-all duration-300 ${
                activePin === "lens" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <span className="text-[10px] font-mono tracking-widest text-[#8CA394] uppercase block">
                Shot Specification
              </span>
              <p className="text-xs font-serif mt-0.5">
                Cooke Anamorphic /i 40mm • Twilight natural ambiance with subtle fill
              </p>
            </div>
          </div>

          {/* Pill 2: Second vertical pill frame */}
          <div className="relative h-72 sm:h-88 rounded-full overflow-hidden shadow-lg border border-[#E2DDD2] bg-[#182622] group hidden sm:block mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
              alt="Architectural terrace"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-6 inset-x-6 text-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                Precision Framing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

