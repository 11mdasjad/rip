"use client";

import React, { useEffect } from "react";
import { X, Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/data/imagineContent";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectModalProps {
  project: ProjectCard | null;
  onClose: () => void;
  onWatchReel: (videoUrl: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onWatchReel,
}) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 md:p-8 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#17161d] border border-white/[0.12] shadow-2xl rounded-[28px] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top modal bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0e0d12]/90 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest font-mono uppercase bg-white/[0.05] text-[#a89bfa] border border-white/[0.1] rounded-full">
              {project.categoryEn}
            </span>
            <span className="text-xs text-white/50 font-mono">
              {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Hero Visual Banner */}
          <div className="relative aspect-[16/9] w-full bg-black rounded-2xl overflow-hidden group">
            <img
              src={project.poster}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between w-full gap-4">
                <div>
                  <h2
                    id="project-modal-title"
                    className="text-2xl md:text-3xl text-white font-extrabold tracking-tight"
                  >
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-[#a89bfa] mt-1">
                    RFP Digital Productions Case
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {project.videoUrl && (
                    <button
                      onClick={() => {
                        onWatchReel(project.videoUrl!, project.title);
                      }}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#6b54ee] hover:bg-[#7c6af2] text-white text-xs uppercase tracking-widest font-mono font-semibold rounded-full transition-all shadow-lg hover:shadow-[#6b54ee]/40 active:scale-95"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Film</span>
                    </button>
                  )}
                  {(project.youtubeUrl || (project.videoUrl && project.videoUrl.includes("youtu"))) && (
                    <a
                      href={project.youtubeUrl || project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-red-600/90 hover:bg-red-600 text-white text-xs uppercase tracking-widest font-mono font-semibold rounded-full transition-all shadow-md active:scale-95"
                    >
                      <span>YouTube</span>
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Synopsis & Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#a89bfa] mb-2">
                  Project Summary
                </h4>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {project.descEn}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-[#a89bfa] border border-white/[0.08]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta & Commissioning Client */}
            <div className="space-y-4 bg-white/[0.03] p-5 rounded-2xl border border-white/[0.08]">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 block mb-1">
                  Client
                </span>
                <p className="text-sm font-bold text-white">
                  {project.client}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 block mb-1">
                  Discipline
                </span>
                <p className="text-xs font-medium text-[#a89bfa]">
                  {project.categoryEn}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.08]">
                <a
                  href="#kontakt"
                  onClick={onClose}
                  className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-white hover:text-[#a89bfa] font-medium transition-colors"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
