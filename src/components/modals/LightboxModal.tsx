"use client";

import React, { useEffect } from "react";
import { X, MapPin, Tag } from "lucide-react";
import { BTSItem } from "@/types";

interface LightboxModalProps {
  item: BTSItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close photo"
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative max-h-[75vh] overflow-hidden border border-white/10 bg-black flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full mt-4 flex flex-col md:flex-row md:items-center md:justify-between text-white/90 px-2 py-2 gap-2">
          <div>
            <h3 className="text-lg font-serif text-white">{item.title}</h3>
            <p className="text-sm text-white/70 font-sans mt-0.5">{item.caption}</p>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-[#B69A6B] shrink-0">
            <span className="flex items-center space-x-1 bg-white/5 px-2.5 py-1 border border-white/10">
              <Tag className="w-3.5 h-3.5" />
              <span>{item.department}</span>
            </span>
            <span className="flex items-center space-x-1 bg-white/5 px-2.5 py-1 border border-white/10 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#B69A6B]" />
              <span>{item.location}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
