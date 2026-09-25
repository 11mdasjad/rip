"use client";

import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface AboutProps {
  onWatchStory: () => void;
}

export const About: React.FC<AboutProps> = ({ onWatchStory }) => {
  const showcaseArchCards = [
    {
      id: "theatrical",
      title: "Theatrical Cinema & Films",
      category: "Feature Documentaries",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "brand",
      title: "Commercial Narratives",
      category: "Global Brand Campaigns",
      year: "2023",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "documentary",
      title: "Cultural & Heritage Series",
      category: "Field Cinematography",
      year: "2024",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "aerial",
      title: "Architectural & Spatial Cinema",
      category: "Virtual Production & Aerial",
      year: "2025",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Section Badge */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="text-sm text-[#5A7865]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#161D1A] font-semibold">
          OUR STORY
        </span>
      </div>

      {/* Main Two-Column Editorial Grid (Matching Reference Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.2] text-[#161D1A] tracking-tight">
            At RFP DIGITAL, we combine expert cinematic craft with strategic care to{" "}
            <span className="text-[#6F7A74]/55 font-light">
              protect narrative vision and simplify production, while creating
            </span>{" "}
            <span className="inline-flex items-center space-x-1 align-baseline mx-1">
              <span className="text-xl sm:text-2xl">🌿</span>
              <span className="text-xl sm:text-2xl">☘</span>
            </span>{" "}
            <span className="text-[#161D1A] font-normal">
              lasting cultural resonance for every story we tell.
            </span>
          </h3>

          <div className="pt-8 border-t border-[#E2DDD2]/80">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#6F7A74] block">
              ESTABLISHED SINCE 2012
            </span>
          </div>
        </div>

        {/* Right Column: Pill Capsule Image & Description */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          {/* Horizontal Capsule / Pill-shaped photo */}
          <div className="relative w-full max-w-md h-40 sm:h-48 rounded-full overflow-hidden shadow-lg border border-[#E2DDD2] group bg-[#182622]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=900&auto=format&fit=crop"
              alt="Serene rustic stone cottage in scenic wildflowers"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>

          <p className="text-sm sm:text-base text-[#6F7A74] font-sans leading-relaxed max-w-md">
            At RFP DIGITAL, we manage every production with precision, narrative depth, and absolute transparency, helping directors, brands, and cultural institutions preserve creative truth and evoke lasting emotional connection.
          </p>

          <div className="pt-2">
            <button
              onClick={onWatchStory}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#161D1A] hover:text-[#5A7865] transition-colors group"
            >
              <span className="border-b border-[#161D1A] group-hover:border-[#5A7865] pb-0.5">
                Learn More About Our Craft
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Card Architectural / Cinematic Arch Gallery (Directly below statement in mockup) */}
      <div className="mt-20 pt-12 border-t border-[#E2DDD2]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseArchCards.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col cursor-pointer"
              onClick={onWatchStory}
            >
              {/* Rounded-Top Arch Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-t-[100px] rounded-b-2xl overflow-hidden bg-[#182622] shadow-md border border-[#E2DDD2] group-hover:shadow-xl transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Arch Floating Badge */}
                <div className="absolute top-6 inset-x-0 flex justify-center">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-white/20">
                    {card.year}
                  </span>
                </div>

                {/* Bottom Inset Label */}
                <div className="absolute bottom-5 inset-x-5 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-[#8CA394] uppercase block mb-1">
                    {card.category}
                  </span>
                  <h4 className="font-serif text-lg leading-tight text-white group-hover:text-[#8CA394] transition-colors">
                    {card.title}
                  </h4>
                </div>
              </div>

              {/* View details arrow */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7A74]">
                  Explore Project
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#161D1A] group-hover:text-[#5A7865] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

