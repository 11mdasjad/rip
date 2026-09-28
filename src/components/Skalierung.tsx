"use client";

import React, { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MAKING_OF_IMAGES } from "@/data/imagineContent";

export const Skalierung: React.FC = () => {
  const { lang } = useLanguage();
  const [photoOffset, setPhotoOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate the making-of images every 4.5 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setPhotoOffset((prev) => (prev + 1) % MAKING_OF_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Active indices for the 3 gallery slots
  const img1 = MAKING_OF_IMAGES[photoOffset % MAKING_OF_IMAGES.length];
  const img2 = MAKING_OF_IMAGES[(photoOffset + 1) % MAKING_OF_IMAGES.length];
  const img3 = MAKING_OF_IMAGES[(photoOffset + 2) % MAKING_OF_IMAGES.length];

  return (
    <section className="bg-[#efece7] text-[#17161b] py-24 lg:py-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Dynamic 3-Card Making-of Gallery */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 relative">
              {/* Slot 1: Large Main Image (takes 7 columns) */}
              <div className="sm:col-span-7 aspect-[4/4.8] rounded-2xl overflow-hidden bg-[#e7e3d9] relative shadow-md group">
                <img
                  src={img1}
                  alt="Making-of RFP Digital Productions On-Set"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full uppercase">
                  Set 0{((photoOffset % MAKING_OF_IMAGES.length) + 1)}
                </span>
              </div>

              {/* Slots 2 & 3: Stacked Smaller Images (takes 5 columns) */}
              <div className="sm:col-span-5 grid grid-rows-2 gap-4">
                <div className="aspect-[16/10] sm:aspect-auto rounded-2xl overflow-hidden bg-[#e7e3d9] relative shadow-md">
                  <img
                    src={img2}
                    alt="Making-of Detail"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />
                </div>
                <div className="aspect-[16/10] sm:aspect-auto rounded-2xl overflow-hidden bg-[#e7e3d9] relative shadow-md">
                  <img
                    src={img3}
                    alt="Making-of Crew"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />
                </div>
              </div>

              {/* Pause / Play Rotation Button */}
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0e0d12]/80 hover:bg-[#0e0d12] text-white border border-white/30 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-105 shadow-lg active:scale-95"
                aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
              >
                {isPaused ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5a44d8] font-bold block mb-3">
              Scalable Production · Nationwide &amp; Global
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17161b] leading-[1.12] mb-6">
              Exactly as extensive as your vision demands.
            </h2>

            <p className="text-base sm:text-lg text-[#17161ba8] leading-relaxed mb-6 font-normal">
              From nimble documentary field crews to massive multi-camera event broadcasts and constituency-wide election campaigns, we curate and direct experienced media crews with precision and dedication.
            </p>

            <ul className="border-t border-[#17161b24] pt-6 space-y-4">
              <li className="flex items-start space-x-3 text-sm text-[#17161b]">
                <span className="text-[#5a44d8] font-bold">▸</span>
                <span>
                  The right operational setup, from intimate documentary shoots to nationwide campaign van deployments.
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-[#17161b]">
                <span className="text-[#5a44d8] font-bold">▸</span>
                <span>
                  17+ years of broadcast pedigree, ensuring high-standard color science, crisp sound capture, and cinematic pacing.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
