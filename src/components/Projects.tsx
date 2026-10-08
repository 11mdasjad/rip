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
      {/* Section Header - Centered */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 lg:mb-16 gap-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-2.5">
            Selected Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] leading-tight">
            Crafted Over Thousands of TV ads, Corporate Films &amp; Documentaries
          </h2>
        </div>

        {/* Filter Pills - Centered pristine single-row pill bar */}
        <div className="w-full flex items-center justify-center overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-[#17161d] border border-white/[0.08] shadow-lg shrink-0 mx-auto">
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
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? "bg-[#6b54ee] text-white shadow-md shadow-[#6b54ee]/30 font-semibold"
                    : "text-[#f4f2f7]/70 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {tab.labelEn}
              </button>
            ))}
          </div>
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
          <ProjectCardItem
            key={project.id}
            project={project}
            onPlayVideo={onPlayVideo}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCardItem: React.FC<{
  project: ProjectCard;
  onPlayVideo: (videoUrl: string, title: string, subtitle?: string) => void;
  onSelectProject: (project: ProjectCard) => void;
}> = ({ project, onPlayVideo, onSelectProject }) => {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const currentVideo =
    project.videos && project.videos.length > 0 ? project.videos[activeVideoIdx] : null;

  const displayPoster = currentVideo ? currentVideo.poster : project.poster;
  const displayVideoUrl = currentVideo ? currentVideo.videoUrl : project.videoUrl || "";
  const displayTitle = currentVideo ? currentVideo.title : project.title;
  const displaySubtitle = currentVideo ? currentVideo.subtitle : project.categoryEn;

  return (
    <article className="relative group rounded-2xl sm:rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
      {/* Visual Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
        <img
          key={displayPoster}
          src={displayPoster}
          alt={displayTitle}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-black/25 to-transparent pointer-events-none" />

        {/* Play Button Trigger */}
        {displayVideoUrl && (
          <button
            onClick={() => onPlayVideo(displayVideoUrl, displayTitle, displaySubtitle)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0e0d12]/85 hover:bg-[#6b54ee] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl active:scale-95"
            aria-label={`Play Video: ${displayTitle}`}
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>
        )}

        {/* Category tag */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#a89bfa] uppercase">
            {project.categoryEn}
          </span>
        </div>

        {/* Multi-video pill indicator */}
        {project.videos && project.videos.length > 1 && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-1 rounded-full bg-[#6b54ee]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold text-white uppercase shadow">
              {project.videos.length} Videos
            </span>
          </div>
        )}

        {/* Interactive Video Switcher Pills at bottom of preview */}
        {project.videos && project.videos.length > 1 && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-black/85 backdrop-blur-md border border-white/15">
            {project.videos.map((vid, idx) => {
              const label = vid.title.includes("Antul Teotia")
                ? "Dr. Antul"
                : vid.title.includes("Umesh Agarwal")
                ? "Umesh Agarwal"
                : vid.title.includes("Meera Brass")
                ? "Meera Brass"
                : `Video ${idx + 1}`;
              return (
                <button
                  key={vid.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideoIdx(idx);
                  }}
                  className={`flex-1 flex items-center justify-center space-x-1 py-1 px-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeVideoIdx === idx
                      ? "bg-[#6b54ee] text-white shadow font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Play className="w-2.5 h-2.5 fill-current shrink-0" />
                  <span className="truncate">{label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#f4f2f7b8] leading-relaxed mb-3 font-light">
            {project.descEn}
          </p>

          {/* Multiple Videos Playlist list inside same box */}
          {project.videos && project.videos.length > 1 && (
            <div className="my-3 space-y-2 border-t border-b border-white/[0.08] py-2.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#a89bfa]">
                Videos in this Campaign Box
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {project.videos.map((vid, idx) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => {
                      setActiveVideoIdx(idx);
                      onPlayVideo(vid.videoUrl, vid.title, vid.subtitle || project.categoryEn);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                      activeVideoIdx === idx
                        ? "bg-[#6b54ee]/20 border border-[#6b54ee]/45 text-white"
                        : "bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-[#f4f2f7]/80"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                          activeVideoIdx === idx
                            ? "bg-[#6b54ee] text-white"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{vid.title}</p>
                        <p className="text-[10px] text-white/50 truncate">{vid.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span className="text-[10px] font-medium text-[#a89bfa]">Watch</span>
                      <Play className="w-3 h-3 fill-current text-[#a89bfa]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
          <span className="text-[11px] font-mono text-[#f4f2f780] truncate max-w-[65%]">
            {project.client}
          </span>
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-[#a89bfa] hover:text-white transition-colors shrink-0"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
