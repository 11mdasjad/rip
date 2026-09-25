"use client";

import React, { useState } from "react";
import { Maximize2, MapPin } from "lucide-react";
import { BTS_DATA } from "@/data/bts";
import { BTSItem } from "@/types";

interface BehindTheFrameProps {
  onOpenLightbox: (item: BTSItem) => void;
}

export const BehindTheFrame: React.FC<BehindTheFrameProps> = ({ onOpenLightbox }) => {
  const [filterDepartment, setFilterDepartment] = useState<string>("All");

  const departments = ["All", "Camera", "Lighting", "Direction", "Audio", "Post-Production"];

  const filteredBTS =
    filterDepartment === "All"
      ? BTS_DATA
      : BTS_DATA.filter((item) => item.department === filterDepartment);

  return (
    <section
      id="behind-the-frame"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]"
    >
      {/* Section Tag */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="text-sm text-[#5A7865]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#161D1A] uppercase font-semibold">
          BEHIND THE FRAME
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight">
            Made on location. <br />
            <span className="italic font-light text-[#6F7A74]">Built in the edit.</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#6F7A74] font-sans max-w-md">
          A visual record of our crews, cinema equipment rigs, field audio operations, and post-production suites.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 border-b border-[#E2DDD2] no-scrollbar">
        {departments.map((dept) => {
          const active = filterDepartment === dept;
          return (
            <button
              key={dept}
              onClick={() => setFilterDepartment(dept)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all border ${
                active
                  ? "bg-[#161D1A] text-[#FAF8F5] border-[#161D1A]"
                  : "text-[#6F7A74] hover:text-[#161D1A] border-transparent hover:border-[#E2DDD2] bg-transparent"
              }`}
            >
              {dept}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Responsive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBTS.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer bg-[#FAF8F5] rounded-3xl border border-[#E2DDD2] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#161D1A] hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-[#182622] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-[#FAF8F5] text-[#161D1A] rounded-full shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#5A7865]" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                    {item.department}
                  </span>
                </div>
              </div>

              {/* Caption & Location metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#FAF8F5]">
                <div>
                  <h4 className="font-serif text-lg text-[#161D1A] group-hover:text-[#5A7865] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6F7A74] font-sans mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="flex items-center space-x-1 text-[10px] font-mono text-[#6F7A74] pt-2 border-t border-[#E2DDD2]">
                  <MapPin className="w-3 h-3 text-[#5A7865]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

