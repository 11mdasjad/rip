"use client";

import React, { useState } from "react";
import { ArrowUpRight, Play, Eye } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectItem, CategoryType } from "@/types";

interface SelectedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
  onPlayReel: (videoUrl: string, title: string) => void;
}

const CATEGORIES: CategoryType[] = [
  "All",
  "Corporate Films",
  "Documentary Films",
  "Digital Campaigns",
  "Social Media Content",
  "Brand Communication",
];

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  onPlayReel,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]"
    >
      {/* Section Tag */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="text-sm text-[#5A7865]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#161D1A] uppercase font-semibold">
          SELECTED PRODUCTIONS
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight">
            The work should <br />
            <span className="italic font-light text-[#6F7A74]">speak first.</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#6F7A74] font-sans max-w-md">
          A selection of narrative documentaries, enterprise brand films, and multi-channel
          campaign assets crafted for high visual and emotional resonance.
        </p>
      </div>

      {/* Accessible Filter Navigation Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 border-b border-[#E2DDD2] no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest whitespace-nowrap rounded-full transition-all duration-200 border ${
                isSelected
                  ? "bg-[#161D1A] text-[#FAF8F5] border-[#161D1A]"
                  : "bg-transparent text-[#6F7A74] border-transparent hover:border-[#E2DDD2] hover:text-[#161D1A]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Responsive Editorial Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#FAF8F5] rounded-3xl border border-[#E2DDD2] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#161D1A] hover:shadow-xl"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/10] bg-[#182622] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/90 border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover Play / Inspect Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-3">
                    {project.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayReel(project.videoUrl!, project.title);
                        }}
                        aria-label={`Watch ${project.title}`}
                        className="p-3 bg-[#FAF8F5] text-[#161D1A] hover:bg-[#5A7865] hover:text-white rounded-full transition-colors shadow-lg"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      aria-label={`View details for ${project.title}`}
                      className="p-3 bg-[#FAF8F5] text-[#161D1A] hover:bg-[#5A7865] hover:text-white rounded-full transition-colors shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Duration Tag */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/70">
                  {project.duration}
                </div>
              </div>

              {/* Editorial Card Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#6F7A74] uppercase block mb-1">
                    {project.client} • {project.year}
                  </span>
                  <h3 className="font-serif text-2xl text-[#161D1A] group-hover:text-[#5A7865] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6F7A74] font-sans leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E2DDD2] flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#161D1A] font-medium group-hover:text-[#5A7865] transition-colors flex items-center">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#6F7A74]">
                    {project.deliverables.length} Deliverables
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

