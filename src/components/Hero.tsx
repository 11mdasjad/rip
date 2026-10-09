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
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#7c6af2]/12 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[450px] bg-[#6b54ee]/10 blur-[130px] sm:blur-[170px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
        {/* Left Column: Typography & CTAs (6-span for balanced symmetry) */}
        <div className="lg:col-span-6 flex flex-col justify-center z-10">

          {/* Main Title: Bold, Grand & Prominent 2-Line Symmetry */}
          <h1 className="text-3xl sm:text-5xl lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold tracking-tight text-[#f4f2f7] leading-[1.12] mb-5 sm:mb-6">
            <span className="block sm:whitespace-nowrap">Video Production &amp;</span>
            <span className="block sm:whitespace-nowrap bg-gradient-to-r from-[#b4a6ff] via-[#8d7df5] to-[#c4b5fd] bg-clip-text text-transparent">
              Election Management Co.
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="text-sm sm:text-base lg:text-[16px] xl:text-[17px] text-[#f4f2f7]/80 leading-relaxed mb-7 sm:mb-9 max-w-2xl font-normal">
            Hire RFP Digital Productions for your Digital Media needs. RFP Digital Productions is a comprehensive Video Production, Media, and Election Management company providing creative, communication, and campaign solutions for political organizations, candidates, public representatives, businesses, institutions, and brands, bringing over 17+ years of media excellence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#projekte"
              className="group inline-flex items-center justify-center space-x-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-sm sm:text-base font-semibold tracking-wide shadow-xl hover:shadow-[#7c6af2]/25 transition-all duration-200 active:scale-95 text-center"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() =>
                onPlayVideo(
                  showreelVideo.videoUrl,
                  showreelVideo.title,
                  "RFP Digital Productions"
                )
              }
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 sm:py-4 rounded-full border border-white/[0.22] hover:border-white/[0.45] bg-white/[0.04] hover:bg-white/[0.1] text-[#f4f2f7] text-sm sm:text-base font-medium tracking-wide transition-all duration-200 active:scale-95 text-center backdrop-blur-sm"
            >
              <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-[#b4a6ff]" />
              <span>Watch Showreel</span>
            </button>
          </div>
        </div>

        {/* Right Column: Enlarged Showreel Video Showcase (6-span for balanced symmetry) */}
        <div className="lg:col-span-6 relative w-full">
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#17161d] border border-white/[0.14] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] group cursor-pointer transition-all duration-300 hover:border-[#7c6af2]/50 hover:shadow-[0_25px_70px_-10px_rgba(124,106,242,0.25)]"
            onClick={() =>
              onPlayVideo(
                showreelVideo.videoUrl,
                showreelVideo.title,
                "RFP Digital Productions"
              )
            }
          >
            {/* Ambient inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 z-10 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7c6af2]/25 via-transparent to-[#6b54ee]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

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

            {/* Play Button Trigger (Center) with pulse glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#7c6af2]/30 animate-ping opacity-60 pointer-events-none" />
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
                className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#0e0d12]/85 hover:bg-[#6b54ee] text-white border border-white/35 hover:border-transparent backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl active:scale-95"
                aria-label={`Watch Video: ${showreelVideo.title}`}
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-white" />
              </button>
            </div>

            {/* Scene Meta Info: Title "Showreel" */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-7 z-20 pointer-events-none">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug drop-shadow-lg">
                {showreelVideo.title}
              </h3>
            </div>

            {/* Top-Left Stage Insignia */}
            <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20 flex items-center space-x-2">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] sm:text-[11px] font-mono text-white shadow-xl">
                <img
                  src="/medien/logo/rfp-emblem.png"
                  alt="RFP"
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain filter drop-shadow-[0_1px_4px_rgba(212,175,55,0.6)]"
                  loading="eager"
                />
                <span className="tracking-[0.18em] uppercase font-semibold text-[#F3E5AB]">
                  MASTER SHOWCASE
                </span>
              </div>
            </div>

            {/* Top-Right Direct YouTube Badge */}
            <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20">
              <a
                href={showreelVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-red-600/90 hover:bg-red-600 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-white font-semibold transition-all shadow-lg active:scale-95"
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
