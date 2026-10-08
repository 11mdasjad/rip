"use client";

import React, { useEffect, useMemo } from "react";
import { X, ExternalLink, Play } from "lucide-react";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  subtitle?: string;
}

// Helper to extract YouTube video ID from various URL formats
export function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // If already 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Matches:
  // - youtube.com/watch?v=ID
  // - youtube-nocookie.com/embed/ID
  // - youtube.com/embed/ID
  // - youtu.be/ID
  // - youtube.com/v/ID
  // - youtube.com/shorts/ID
  const regExp = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/;
  const match = trimmed.match(regExp);
  if (match && match[1]) {
    return match[1];
  }

  // Fallback: any 11-char string following /embed/ or v=
  const fallback = trimmed.match(/(?:\/embed\/|[?&]v=)([a-zA-Z0-9_-]{11})/);
  if (fallback && fallback[1]) {
    return fallback[1];
  }

  return null;
}

function getYouTubeDetails(url?: string): { id: string; embedUrl: string; directUrl: string } | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return {
    id,
    embedUrl: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`,
    directUrl: `https://www.youtube.com/watch?v=${id}`,
  };
}

// Helper to extract Instagram post / reel ID
export function extractInstagramId(url?: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  const match = trimmed.match(/(?:instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+))/i);
  return match && match[1] ? match[1] : null;
}

function getInstagramDetails(url?: string): { id: string; embedUrl: string; directUrl: string } | null {
  const id = extractInstagramId(url);
  if (!id) return null;
  return {
    id,
    embedUrl: `https://www.instagram.com/reel/${id}/embed/`,
    directUrl: `https://www.instagram.com/reel/${id}/`,
  };
}

function isDirectVideoFile(url?: string): boolean {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url.trim());
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title = "RFP Digital Productions Showcase",
  subtitle = "Video Production & Election Management",
}) => {
  const ytDetails = useMemo(() => getYouTubeDetails(videoUrl), [videoUrl]);
  const igDetails = useMemo(() => getInstagramDetails(videoUrl), [videoUrl]);
  const isDirectVideo = useMemo(() => isDirectVideoFile(videoUrl), [videoUrl]);

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

  const directYouTubeUrl = ytDetails?.directUrl || (videoUrl && (videoUrl.includes("youtu") || videoUrl.includes("youtube")) ? videoUrl : null);
  const directInstagramUrl = igDetails?.directUrl || (videoUrl && videoUrl.includes("instagram.com") ? videoUrl : null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${igDetails ? "max-w-xl" : "max-w-5xl"} bg-[#17161d] border border-white/[0.15] rounded-[24px] overflow-hidden shadow-2xl flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#0e0d12]/95 backdrop-blur-md">
          <div className="pr-4">
            <span className="text-[10px] tracking-[0.2em] text-[#a89bfa] uppercase font-mono block">
              {subtitle}
            </span>
            <h3 className="text-white text-base md:text-lg font-bold tracking-tight line-clamp-1">{title}</h3>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            {directYouTubeUrl && (
              <a
                href={directYouTubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-md shadow-red-600/30"
                title="Watch directly on YouTube"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open in YouTube</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-90" />
              </a>
            )}
            {directInstagramUrl && (
              <a
                href={directInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 rounded-full transition-all shadow-md shadow-pink-600/30"
                title="Watch directly on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Open in Instagram</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-90" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close video"
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Frame */}
        <div className={`relative w-full bg-black flex items-center justify-center overflow-hidden ${igDetails ? "h-[580px] max-h-[72vh] p-2" : "aspect-video"}`}>
          {ytDetails ? (
            <iframe
              src={ytDetails.embedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : igDetails ? (
            <iframe
              src={igDetails.embedUrl}
              title={title}
              className="w-full h-full max-w-[460px] border-0 rounded-xl bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : isDirectVideo && videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          ) : videoUrl ? (
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 text-white/60">
              <p className="text-xl mb-2 text-white">No video source provided.</p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 bg-[#0e0d12] text-[11px] text-white/50 tracking-wider font-mono">
          <div className="flex items-center gap-3">
            <span>RFP DIGITAL PRODUCTIONS · CINEMATIC DCI 4K</span>
            {directYouTubeUrl && (
              <a
                href={directYouTubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Direct YouTube Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {directInstagramUrl && (
              <a
                href={directInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <InstagramIcon className="w-3 h-3" />
                <span>Direct Instagram Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <span className="text-[#a89bfa]">PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};
