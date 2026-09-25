"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Play, ChevronRight, Pause } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { STAGE_SCENES, StageScene } from "@/data/imagineContent";

interface HeroProps {
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayVideo }) => {
  const { lang } = useLanguage();
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const currentScene = STAGE_SCENES[activeSceneIndex];

  // Auto-rotate stage scenes every 7 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % STAGE_SCENES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Ensure current active video plays
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        if (idx === activeSceneIndex) {
          vid.currentTime = 0;
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [activeSceneIndex]);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7c6af2]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-center z-10">
          {/* RFP Brand Tag */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#17161d] border border-[#D4AF37]/30 text-xs font-mono uppercase tracking-[0.2em] text-[#F3E5AB] w-fit mb-5 shadow-lg">
            <img
              src="/medien/logo/rfp-emblem.png"
              alt="RFP"
              className="w-4 h-4 object-contain filter drop-shadow-[0_1px_4px_rgba(212,175,55,0.6)]"
            />
            <span className="font-semibold">RFP DIGITAL PRODUCTIONS</span>
          </div>

          {/* Eyebrow Schnellwege (Quick navigation chips) */}
          <nav
            className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#f4f2f780] mb-6"
            aria-label="Schnellzugänge zu den Kompetenzfeldern"
          >
            <a
              href="#service-filmproduktion"
              className="hover:text-[#a89bfa] transition-colors py-1 px-2.5 rounded-full bg-white/[0.04] border border-white/[0.06]"
            >
              {lang === "de" ? "Realdreh" : "Live Action"}
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#service-3d-animation"
              className="hover:text-[#a89bfa] transition-colors py-1 px-2.5 rounded-full bg-white/[0.04] border border-white/[0.06]"
            >
              {lang === "de" ? "Animation" : "Animation"}
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#service-ki-filmproduktion"
              className="hover:text-[#a89bfa] transition-colors py-1 px-2.5 rounded-full bg-white/[0.04] border border-white/[0.06]"
            >
              {lang === "de" ? "Generative KI" : "Generative AI"}
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#ki-workflows"
              className="hover:text-[#a89bfa] transition-colors py-1 px-2.5 rounded-full bg-white/[0.04] border border-white/[0.06]"
            >
              {lang === "de" ? "KI-Workflows" : "AI Workflows"}
            </a>
          </nav>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f2f7] leading-[1.08] mb-6">
            {lang === "de" ? (
              <>
                Komplexe Themen.
                <br />
                <span className="bg-gradient-to-r from-[#a89bfa] via-[#7c6af2] to-[#c4b5fd] bg-clip-text text-transparent">
                  Stark erzählt.
                </span>
              </>
            ) : (
              <>
                Complex topics.
                <br />
                <span className="bg-gradient-to-r from-[#a89bfa] via-[#7c6af2] to-[#c4b5fd] bg-clip-text text-transparent">
                  Boldly told.
                </span>
              </>
            )}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed mb-8 max-w-xl font-normal">
            {lang === "de"
              ? "Filmproduktion, Animation und KI für Unternehmen und Agenturen. Für starke Einzelprojekte und laufende B2B-Kommunikation – von München aus weltweit."
              : "Film production, 3D animation and AI for enterprises and leading creative agencies. For flagship standalone productions and continuous B2B communication – from Munich across the globe."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projekte"
              className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-sm font-semibold tracking-wide shadow-lg hover:shadow-[#7c6af2]/20 transition-all duration-200 active:scale-95"
            >
              <span>{lang === "de" ? "Projekte ansehen" : "Explore Projects"}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#kontakt"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-white/[0.2] hover:border-white/[0.4] bg-white/[0.03] hover:bg-white/[0.08] text-[#f4f2f7] text-sm font-medium tracking-wide transition-all duration-200 active:scale-95"
            >
              <span>{lang === "de" ? "Projekt besprechen" : "Discuss Project"}</span>
            </a>
          </div>
        </div>

        {/* Right Column: "Die Bewegte Projektbühne" (Interactive Stage) */}
        <div className="lg:col-span-7 relative">
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#17161d] border border-white/[0.12] shadow-2xl group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7c6af2]/20 via-transparent to-[#6b54ee]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Stage Video Scenes */}
            {STAGE_SCENES.map((scene, idx) => (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === activeSceneIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                }`}
              >
                {/* Looping video */}
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={scene.loopVideo}
                  poster={scene.poster}
                  muted
                  loop
                  playsInline
                  autoPlay={idx === 0}
                  className="w-full h-full object-cover object-center filter saturate-[1.05]"
                />
              </div>
            ))}

            {/* Play Button Trigger (Center) */}
            <button
              onClick={() =>
                onPlayVideo(
                  currentScene.fullVideoUrl,
                  currentScene.title,
                  lang === "de" ? currentScene.artDe : currentScene.artEn
                )
              }
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0e0d12]/80 hover:bg-[#6b54ee] text-white border border-white/30 hover:border-transparent backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl active:scale-95"
              aria-label={`Zum Projekt: ${currentScene.title}`}
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
            </button>

            {/* Scene Meta Info (Bottom-Left) */}
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20 pointer-events-none">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-1">
                {lang === "de" ? "Ausgewähltes Projekt" : "Featured Work"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentScene.title}
              </h3>
              <span className="text-xs sm:text-sm text-white/70 font-medium">
                {lang === "de" ? currentScene.artDe : currentScene.artEn}
              </span>
            </div>

            {/* Scene Selector Thumbnails / Indicators (Bottom-Right) */}
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 flex items-center space-x-2">
              {STAGE_SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => setActiveSceneIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeSceneIndex
                      ? "w-8 bg-[#a89bfa]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Szene ${idx + 1}: ${scene.title}`}
                />
              ))}
            </div>

            {/* Top-Left Stage Insignia */}
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/35 text-[10px] font-mono text-white shadow-lg">
                <img
                  src="/medien/logo/rfp-emblem.png"
                  alt="RFP"
                  className="w-3.5 h-3.5 object-contain filter drop-shadow-[0_1px_4px_rgba(212,175,55,0.6)]"
                />
                <span className="tracking-[0.18em] uppercase font-semibold text-[#F3E5AB]">RFP MASTER SHOWCASE</span>
              </div>
            </div>

            {/* Pause/Play indicator */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af2] animate-pulse" />
                <span>{STAGE_SCENES[activeSceneIndex].title}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
