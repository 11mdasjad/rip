"use client";

import React from "react";
import { ArrowUpRight, Play } from "lucide-react";

interface HeroProps {
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayVideo }) => {
  const showreelVideo = {
    title: "Showreel",
    videoUrl: "https://www.youtube.com/watch?v=QvlClFaXJLc",
    thumbnail: "/medien/youtube-thumbs/QvlClFaXJLc.jpg",
  };

  return (
    <section className="relative pt-24 sm:pt-36 pb-14 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] sm:h-[400px] bg-[#7c6af2]/10 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {/* Left Column: Typography & CTAs (7-span for safe text breathing room) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">

          {/* Main Title: Bold & Prominent 2-Line Symmetry */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[38px] xl:text-[44px] 2xl:text-[48px] font-extrabold tracking-tight text-[#f4f2f7] leading-[1.14] mb-5 sm:mb-6">
            <span className="block sm:whitespace-nowrap">Video Production &amp;</span>
            <span className="block sm:whitespace-nowrap bg-gradient-to-r from-[#a89bfa] via-[#7c6af2] to-[#c4b5fd] bg-clip-text text-transparent">
              Election Management Co.
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-[#f4f2f7b8] leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
            Hire RFP Digital Productions for your Digital Media needs. Managed by seasoned media professionals and alumni from AJK Mass Communication &amp; Research Center (AJK MCRC), Jamia Millia Islamia, New Delhi, bringing over 17+ years of media excellence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#projekte"
              className="group inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-sm font-semibold tracking-wide shadow-lg hover:shadow-[#7c6af2]/20 transition-all duration-200 active:scale-95 text-center"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() =>
                onPlayVideo(
                  showreelVideo.videoUrl,
                  showreelVideo.title,
                  "RFP Digital Productions"
                )
              }
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/[0.2] hover:border-white/[0.4] bg-white/[0.03] hover:bg-white/[0.08] text-[#f4f2f7] text-sm font-medium tracking-wide transition-all duration-200 active:scale-95 text-center"
            >
              <Play className="w-4 h-4 fill-current text-[#a89bfa]" />
              <span>Watch Showreel</span>
            </button>
          </div>
        </div>

        {/* Right Column: Single Showreel Video Showcase */}
        <div className="lg:col-span-5 relative">
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#17161d] border border-white/[0.12] shadow-2xl group cursor-pointer"
            onClick={() =>
              onPlayVideo(
                showreelVideo.videoUrl,
                showreelVideo.title,
                "RFP Digital Productions"
              )
            }
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7c6af2]/20 via-transparent to-[#6b54ee]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Original YouTube Thumbnail Poster */}
            <div className="absolute inset-0">
              <img
                src={showreelVideo.thumbnail}
                alt={showreelVideo.title}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center filter saturate-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Play Button Trigger (Center) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPlayVideo(
                  showreelVideo.videoUrl,
                  showreelVideo.title,
                  "RFP Digital Productions"
                );
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0e0d12]/80 hover:bg-[#6b54ee] text-white border border-white/30 hover:border-transparent backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl active:scale-95"
              aria-label={`Watch Video: ${showreelVideo.title}`}
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
            </button>

            {/* Scene Meta Info: Title "Showreel" */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 pointer-events-none">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                {showreelVideo.title}
              </h3>
            </div>

            {/* Top-Left Stage Insignia */}
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 flex items-center space-x-2">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/35 text-[9px] sm:text-[10px] font-mono text-white shadow-lg">
                <img
                  src="/medien/logo/rfp-emblem.png"
                  alt="RFP"
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain filter drop-shadow-[0_1px_4px_rgba(212,175,55,0.6)]"
                  loading="eager"
                />
                <span className="tracking-[0.18em] uppercase font-semibold text-[#F3E5AB]">
                  MASTER SHOWCASE
                </span>
              </div>
            </div>

            {/* Top-Right Direct YouTube Badge */}
            <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20">
              <a
                href={showreelVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600/90 hover:bg-red-600 backdrop-blur-md text-[10px] font-mono text-white font-semibold transition-all shadow-md active:scale-95"
              >
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>YouTube ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
