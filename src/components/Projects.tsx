"use client";

import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import Link from "next/link";
import { Play, ArrowUpRight, Sparkles, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import { PROJECTS_DATA, ProjectCard } from "@/data/imagineContent";

interface ProjectsProps {
  onSelectProject: (project: ProjectCard) => void;
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onPlayVideo }) => {
  const { lang } = useLanguage();
  const { projects: contextProjects } = useData();
  const projectsList = contextProjects && contextProjects.length > 0 ? contextProjects : PROJECTS_DATA;
  const [activeFilter, setActiveFilter] = useState<"all" | "film" | "animation" | "ki">("all");

  // State for EGYM Before/After slider
  const [sliderPos, setSliderPos] = useState(55); // percentage (0 - 100)
  const [activeAfterVariant, setActiveAfterVariant] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projectsList.filter((p) => {
    if (activeFilter === "all") return true;
    return p.filterCat === activeFilter;
  });

  const featuredProject = projectsList[0] || PROJECTS_DATA[0]; // DTM Red Bull
  const otherProjects = filteredProjects.filter((p) => p.id !== featuredProject.id);

  // EGYM Project reference
  const egymProject = projectsList.find((p) => p.id === "projekt-egym") || PROJECTS_DATA.find((p) => p.id === "projekt-egym")!;

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (isDragging) {
        handleDrag(e.clientX);
      }
    };
    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleDrag(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section id="projekte" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-2">
            {lang === "de" ? "Ausgewählte Projekte" : "Selected Work"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7]">
            {lang === "de"
              ? "Was wir machen, lässt sich am besten zeigen:"
              : "What we do is best demonstrated:"}
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#17161d] border border-white/[0.08] self-start md:self-auto">
          {[
            { id: "all", labelDe: "Alle", labelEn: "All" },
            { id: "film", labelDe: "Realdreh", labelEn: "Live Action" },
            { id: "animation", labelDe: "3D-Animation", labelEn: "3D Animation" },
            { id: "ki", labelDe: "Generative KI", labelEn: "Generative AI" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeFilter === tab.id
                  ? "bg-[#6b54ee] text-white shadow-md shadow-[#6b54ee]/30 font-semibold"
                  : "text-[#f4f2f780] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {lang === "de" ? tab.labelDe : tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Featured Big Slot G (DTM / Red Bull) */}
        {(activeFilter === "all" || featuredProject.filterCat === activeFilter) && (
          <article className="md:col-span-2 lg:col-span-2 relative group rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
            {/* Visual Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black/60">
              <img
                src={featuredProject.poster}
                alt={featuredProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-[#17161d]/30 to-transparent" />

              {/* Play Button Trigger */}
              <button
                onClick={() =>
                  onPlayVideo(
                    featuredProject.videoUrl || "",
                    featuredProject.title,
                    lang === "de" ? featuredProject.categoryDe : featuredProject.categoryEn
                  )
                }
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0e0d12]/80 hover:bg-[#6b54ee] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl"
                aria-label={`Video abspielen: ${featuredProject.title}`}
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </button>

              {/* Discipline tag on visual */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-[#a89bfa] uppercase">
                  {lang === "de" ? featuredProject.categoryDe : featuredProject.categoryEn}
                </span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f4f2f7] mb-3 tracking-tight group-hover:text-white transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[#f4f2f7b8] leading-relaxed max-w-2xl mb-6">
                  {lang === "de" ? featuredProject.descDe : featuredProject.descEn}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-[#f4f2f780]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#a89bfa] hover:text-white transition-colors"
                >
                  <span>{lang === "de" ? "Projektgeschichte ansehen" : "View Case Study"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* EGYM - Slot E: INTERACTIVE BEFORE/AFTER SLIDER ("hat-vergleich") */}
        {(activeFilter === "all" || egymProject.filterCat === activeFilter) && (
          <article className="relative group rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
            {/* Interactive Before / After Visual Canvas */}
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full overflow-hidden vn-container bg-black/60 cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* AFTER IMAGE (Background Environment) */}
              <img
                src={egymProject.comparisonAfters?.[activeAfterVariant].src}
                alt="EGYM AI Generierte Umgebung"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* BEFORE IMAGE (Clipped Raw CAD Model) */}
              <div
                className="vn-before"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={egymProject.comparisonBefore}
                  alt="EGYM 3D CAD Ausgangsbild"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Dividing Line & Drag Handle */}
              <div className="vn-divider" style={{ left: `${sliderPos}%` }}>
                <div className="vn-handle">
                  <span className="font-mono text-[11px]">◂ ▸</span>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white font-bold border border-white/10">
                  {lang === "de" ? "3D-CAD" : "3D CAD"}
                </span>
              </div>

              <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-20">
                {egymProject.comparisonAfters?.map((variant, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAfterVariant(idx);
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all backdrop-blur-md ${
                      idx === activeAfterVariant
                        ? "bg-[#6b54ee] text-white border border-[#6b54ee] font-bold"
                        : "bg-black/60 text-white/70 border border-white/20 hover:text-white"
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>

              <div className="absolute bottom-3 left-3 pointer-events-none">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-[#a89bfa]">
                  {lang === "de" ? "↔ Schieberegler ziehen" : "↔ Drag to compare"}
                </span>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a89bfa] block mb-1">
                  {lang === "de" ? egymProject.categoryDe : egymProject.categoryEn}
                </span>
                <h3 className="text-xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white transition-colors">
                  {egymProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f4f2f7b8] leading-relaxed mb-4">
                  {lang === "de" ? egymProject.descDe : egymProject.descEn}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/40">
                  {lang === "de" ? "Interaktiver Vergleich" : "Interactive Comparison"}
                </span>
                <button
                  onClick={() => onSelectProject(egymProject)}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#a89bfa] hover:text-white transition-colors"
                >
                  <span>{lang === "de" ? "Details" : "Details"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Regular Slots (1&1, Generali, Uniklinik Freiburg, Rolls-Royce, BMW Babyracer) */}
        {otherProjects
          .filter((p) => p.id !== "projekt-egym")
          .map((project) => (
            <article
              key={project.id}
              className="relative group rounded-[26px] overflow-hidden bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Visual Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <img
                  src={project.poster}
                  alt={project.title}
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
                        lang === "de" ? project.categoryDe : project.categoryEn
                      )
                    }
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0e0d12]/80 hover:bg-[#6b54ee] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl"
                    aria-label={`Video abspielen: ${project.title}`}
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                )}

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#a89bfa] uppercase">
                    {lang === "de" ? project.categoryDe : project.categoryEn}
                  </span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f4f2f7b8] leading-relaxed mb-4">
                    {lang === "de" ? project.descDe : project.descEn}
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
                    <span>{lang === "de" ? "Ansehen" : "View"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
      </div>

      {/* Discover Visual Gallery CTA Banner */}
      <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#17161d] via-[#1f1d2b] to-[#17161d] border border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-[#7c6af2]/15 blur-[60px] pointer-events-none rounded-full" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#7c6af2]/20 text-[#a89bfa] text-[10px] font-mono uppercase tracking-wider mb-2 border border-[#7c6af2]/30">
            <Sparkles className="w-3 h-3 text-[#E6C665]" />
            <span>Interactive Archive</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Explore the Complete Visual Gallery & Stills Archive
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl font-light">
            Browse our full repertoire of commercial films, photorealistic AI syntheses, 3D visual motion, and behind-the-lens production documentaries.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-[#0e0d12] hover:bg-[#a89bfa] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group-hover:scale-105 active:scale-95"
          >
            <span>Open Visual Gallery</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
