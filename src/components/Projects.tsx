"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { useData } from "@/context/DataContext";
import { PROJECTS_DATA, ProjectCard } from "@/data/imagineContent";

interface ProjectsProps {
  onSelectProject: (project: ProjectCard) => void;
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onPlayVideo }) => {
  const { projects: contextProjects } = useData();
  const projectsList = contextProjects && contextProjects.length > 0 ? contextProjects : PROJECTS_DATA;
  const [activeFilter, setActiveFilter] = useState<"all" | "film" | "campaign" | "documentary" | "marketing">("all");

  const filteredProjects = projectsList.filter((p) => {
    if (activeFilter === "all") return true;
    return p.filterCat === activeFilter;
  });

  const featuredProject = projectsList[0] || PROJECTS_DATA[0];
  const otherProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section id="projekte" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-2">
            Selected Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7]">
            Crafted Over Thousands of TV ads, Corporate Films &amp; Documentaries
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#17161d] border border-white/[0.08] self-start md:self-auto overflow-x-auto">
          {[
            { id: "all", labelEn: "All Work" },
            { id: "film", labelEn: "Corporate Films" },
            { id: "campaign", labelEn: "Election Campaigns" },
            { id: "documentary", labelEn: "Documentaries" },
            { id: "marketing", labelEn: "Social & Marketing" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? "bg-[#6b54ee] text-white shadow-md shadow-[#6b54ee]/30 font-semibold"
                  : "text-[#f4f2f780] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Featured Big Slot G (DTM / Red Bull) */}
        {(activeFilter === "all" || featuredProject.filterCat === activeFilter) && (
          <article className="md:col-span-2 lg:col-span-2 relative group rounded-2xl sm:rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
            {/* Visual Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black/60">
              <img
                src={featuredProject.poster}
                alt={featuredProject.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-[#17161d]/30 to-transparent" />

              {/* Play Button Trigger */}
              <button
                onClick={() =>
                  onPlayVideo(
                    featuredProject.videoUrl || "",
                    featuredProject.title,
                    featuredProject.categoryEn
                  )
                }
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0e0d12]/80 hover:bg-[#6b54ee] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl active:scale-95"
                aria-label={`Play Video: ${featuredProject.title}`}
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
              </button>

              {/* Discipline tag on visual */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#a89bfa] uppercase">
                  {featuredProject.categoryEn}
                </span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#f4f2f7] mb-2 sm:mb-3 tracking-tight group-hover:text-white transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-xs sm:text-base text-[#f4f2f7b8] leading-relaxed max-w-2xl mb-5 sm:mb-6 font-light">
                  {featuredProject.descEn}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {featuredProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/[0.04] text-[10px] sm:text-[11px] font-mono text-[#f4f2f780]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#a89bfa] hover:text-white transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Authentic RFP Digital Projects */}
        {otherProjects.map((project) => (
            <article
              key={project.id}
              className="relative group rounded-2xl sm:rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Visual Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <img
                  src={project.poster}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-black/20 to-transparent" />

                {/* Play Button Trigger */}
                {project.videoUrl && (
                  <button
                    onClick={() =>
                      onPlayVideo(
                        project.videoUrl || "",
                        project.title,
                        project.categoryEn
                      )
                    }
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0e0d12]/80 hover:bg-[#6b54ee] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl active:scale-95"
                    aria-label={`Play Video: ${project.title}`}
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                )}

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#a89bfa] uppercase">
                    {project.categoryEn}
                  </span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f4f2f7b8] leading-relaxed mb-4 font-light">
                    {project.descEn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                  <span className="text-[11px] font-mono text-[#f4f2f780]">
                    {project.client}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-[#a89bfa] hover:text-white transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
      </div>


    </section>
  );
};
