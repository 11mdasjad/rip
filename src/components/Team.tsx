"use client";

import React, { useState } from "react";
import { TEAM_DATA } from "@/data/team";

export const Team: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = ["All", "Direction", "Production", "Post-production", "Digital"];

  const filteredTeam =
    selectedDept === "All"
      ? TEAM_DATA
      : TEAM_DATA.filter((m) => m.department === selectedDept);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]">
      {/* Section Tag */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="text-sm text-[#5A7865]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#161D1A] uppercase font-semibold">
          THE PEOPLE BEHIND THE WORK
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight">
            Production is a <br />
            <span className="italic font-light text-[#6F7A74]">collective craft.</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#6F7A74] font-sans max-w-md">
          A collective of directors, cinematographers, sound designers, and digital strategists
          dedicated to the integrity of the frame.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 border-b border-[#E2DDD2] no-scrollbar">
        {departments.map((dept) => {
          const isActive = selectedDept === dept;
          return (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all border ${
                isActive
                  ? "bg-[#161D1A] text-[#FAF8F5] border-[#161D1A]"
                  : "text-[#6F7A74] hover:text-[#161D1A] border-transparent hover:border-[#E2DDD2] bg-transparent"
              }`}
            >
              {dept}
            </button>
          );
        })}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((member) => {
          return (
            <div
              key={member.id}
              className="bg-[#FAF8F5] rounded-3xl border border-[#E2DDD2] p-6 space-y-4 hover:border-[#161D1A] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] bg-[#182622] rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-[1.08] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-1.5 pt-2">
                <h3 className="font-serif text-2xl text-[#161D1A] group-hover:text-[#5A7865] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-[#5A7865] tracking-wider uppercase">
                  {member.role}
                </p>
                <p className="text-xs text-[#6F7A74] font-sans leading-relaxed pt-2 border-t border-[#E2DDD2]">
                  {member.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

