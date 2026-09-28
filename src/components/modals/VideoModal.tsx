"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  subtitle?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title = "RFP Digital Productions Showcase",
  subtitle = "Video Production & Election Management",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#17161d] border border-white/[0.15] rounded-[24px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0e0d12]/90 backdrop-blur-md">
          <div>
            <span className="text-[10px] tracking-[0.2em] text-[#a89bfa] uppercase font-mono block">
              {subtitle}
            </span>
            <h3 className="text-white text-lg font-bold tracking-tight">{title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video"
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {videoUrl ? (
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-8 text-white/60">
              <p className="text-xl mb-2 text-white">Loading video...</p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#0e0d12] text-[11px] text-white/50 tracking-wider font-mono">
          <span>RFP DIGITAL PRODUCTIONS · CINEMATIC DCI 4K</span>
          <span className="text-[#a89bfa]">PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};
