"use client";

import React, { useState, useMemo, useEffect, use } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import {
  ArrowLeft,
  ArrowUpRight,
  Share2,
  Calendar,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
  Camera,
  FileText,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  ImageIcon
} from "lucide-react";

export default function GalleryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { galleryItems } = useData();
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Find the requested item
  const item = useMemo(() => {
    return galleryItems.find((g) => g.id === resolvedParams.id);
  }, [galleryItems, resolvedParams.id]);

  // Combine primary image and all stills into one unique array
  const allImages = useMemo(() => {
    if (!item) return [];
    const list = [item.image];
    if (item.stills && item.stills.length > 0) {
      item.stills.forEach((s) => {
        if (!list.includes(s)) list.push(s);
      });
    }
    return list;
  }, [item]);

  const currentDisplayImage = activeImage || (item ? item.image : "");

  // Related items in the same category (or other categories)
  const relatedItems = useMemo(() => {
    if (!item) return [];
    return galleryItems
      .filter((g) => g.id !== item.id)
      .slice(0, 3);
  }, [galleryItems, item]);

  // Handle share link copy
  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  const openLightboxAt = (imgUrl: string) => {
    const idx = allImages.indexOf(imgUrl);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const nextLightboxImage = () => {
    setZoomLevel(1);
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevLightboxImage = () => {
    setZoomLevel(1);
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, allImages.length]);

  if (!item) {
    return (
      <main className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] flex flex-col justify-between">
        <Header />
        <div className="max-w-xl mx-auto px-6 py-40 text-center">
          <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6 text-[#a89bfa]">
            <Layers className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-3">Work Not Found</h1>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            The image work you requested might have been updated or moved. Explore our visual gallery archive for all available works.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-[#0e0d12] text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Gallery</span>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <article className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono border-b border-white/[0.06] pb-4">
          <div className="flex items-center space-x-2 text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/gallery" className="hover:text-[#a89bfa] transition-colors">
              Gallery
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-xs">{item.title}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white border border-white/[0.08] transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Display */}
        <div className="relative rounded-3xl overflow-hidden bg-black/60 border border-white/[0.1] shadow-2xl mb-8 group">
          <div 
            onClick={() => openLightboxAt(currentDisplayImage)}
            className="relative aspect-[16/9] w-full overflow-hidden flex items-center justify-center cursor-zoom-in"
          >
            <img
              src={currentDisplayImage}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d12]/80 via-transparent to-black/30 pointer-events-none" />

            {/* Category and Year Floating Tags */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#a89bfa] border border-white/[0.15]">
                {item.category}
              </span>
              {item.client && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-white/90 border border-white/[0.15]">
                  {item.client}
                </span>
              )}
            </div>

            <div className="absolute top-6 right-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-black/70 backdrop-blur-md text-white/80 border border-white/[0.1]">
                {item.year}
              </span>
            </div>

            {/* Floating Zoom Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openLightboxAt(currentDisplayImage);
              }}
              className="absolute bottom-6 right-6 inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-black/70 hover:bg-white text-white hover:text-black backdrop-blur-xl border border-white/20 text-xs font-semibold tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Fullscreen High-Res</span>
            </button>
          </div>
        </div>

        {/* Stills / Thumbnail Gallery Selector */}
        {allImages.length > 1 && (
          <div className="mb-12 rounded-2xl p-5 bg-[#17161d] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                <span>Production Stills & Angle Archive ({allImages.length} Images)</span>
              </div>
              <span className="text-[11px] text-white/40 normal-case font-sans">
                Click any still to view or expand
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {allImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                    currentDisplayImage === imgUrl
                      ? "border-[#a89bfa] ring-2 ring-[#a89bfa]/50 scale-[1.02]"
                      : "border-white/[0.1] hover:border-white/[0.3] opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={imgUrl} alt={`Still ${idx + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-mono bg-black/70 text-white/80">
                    #{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2-Column Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Synopsis, Story, Director Notes */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {item.title}
              </h1>
              <p className="text-lg text-[#a89bfa] font-light leading-relaxed mb-6">
                {item.summary}
              </p>
              <div className="h-px w-full bg-white/[0.08]" />
            </div>

            {/* Creative Narrative & Synopsis */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Creative Narrative & Overview</span>
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* Director's / Creative Lead Notes */}
            {item.directorNotes && (
              <div className="rounded-2xl p-6 sm:p-8 bg-[#17161d] border border-white/[0.08] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c6af2]/10 blur-[80px] pointer-events-none rounded-full" />
                <div className="relative z-10">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#E6C665] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Art Direction & Visual Lead Notes</span>
                  </div>
                  <blockquote className="text-base text-white/90 italic font-serif leading-relaxed border-l-2 border-[#D4AF37] pl-4 my-2">
                    "{item.directorNotes}"
                  </blockquote>
                </div>
              </div>
            )}

            {/* Behind the Scenes Notes */}
            {item.btsNotes && (
              <div className="rounded-2xl p-6 bg-white/[0.02] border border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 mb-2 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#a89bfa]" />
                  <span>Production Logistics & Behind The Scenes</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {item.btsNotes}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Metadata Specs Card & Direct Action */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              {/* Technical Specifications Card */}
              <div className="rounded-2xl p-6 bg-[#17161d] border border-white/[0.1] shadow-xl space-y-6">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] pb-3 border-b border-white/[0.08]">
                  Visual Specifications
                </div>

                {/* Client / Partner */}
                {item.client && (
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase mb-1">Commissioned By</div>
                    <div className="text-sm font-semibold text-white">{item.client}</div>
                  </div>
                )}

                {/* Category */}
                <div>
                  <div className="text-[11px] font-mono text-white/40 uppercase mb-1">Discipline</div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#a89bfa]" />
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Release Year */}
                <div>
                  <div className="text-[11px] font-mono text-white/40 uppercase mb-1">Year of Production</div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Tools & Technologies */}
                {item.tools && item.tools.length > 0 && (
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#a89bfa]" />
                      <span>Software & Hardware</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono text-[#f4f2f7] bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                {item.deliverables && item.deliverables.length > 0 && (
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase mb-2">Deliverables</div>
                    <ul className="space-y-1.5 text-xs text-white/80">
                      {item.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa] flex-shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Inquiry Action Box */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-[#7c6af2]/15 via-white/[0.02] to-transparent border border-[#7c6af2]/30 shadow-xl text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#7c6af2]/20 border border-[#7c6af2]/40 flex items-center justify-center mx-auto text-[#a89bfa]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Want imagery produced like this?
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Let's bring your vision to life with state-of-the-art camera optics, 3D engines, and generative synthesis.
                </p>
                <Link
                  href="/#kontakt"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-white hover:bg-white/90 text-[#0e0d12] text-xs font-semibold tracking-wider uppercase transition-all shadow-lg active:scale-95"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Back to Gallery */}
              <Link
                href="/gallery"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white border border-white/[0.08] text-xs font-medium transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Gallery Archive</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Works Section */}
        {relatedItems.length > 0 && (
          <section className="mt-24 pt-16 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-1">
                  Explore More
                </div>
                <h3 className="text-2xl font-bold text-white">Related Visual Works</h3>
              </div>
              <Link
                href="/gallery"
                className="text-xs font-mono text-[#a89bfa] hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>View All Works</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/gallery/${rel.id}`}
                  className="group rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 backdrop-blur text-[#a89bfa] border border-white/[0.1]">
                        {rel.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {rel.client && (
                        <div className="text-[10px] font-mono text-white/40 uppercase mb-1">
                          {rel.client}
                        </div>
                      )}
                      <h4 className="text-sm font-bold text-white group-hover:text-[#a89bfa] transition-colors line-clamp-1 mb-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-white/60 line-clamp-2 font-light">
                        {rel.summary}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span>{rel.year}</span>
                      <span className="text-[#a89bfa] group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* ===== HIGH-RESOLUTION IMAGE LIGHTBOX ===== */}
      {lightboxOpen && allImages.length > 0 && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Top Control Bar */}
          <div 
            className="absolute top-0 inset-x-0 p-5 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 text-white">
              <span className="px-3 py-1 rounded-full bg-white/[0.1] text-xs font-mono text-[#a89bfa] border border-white/[0.1]">
                {lightboxIndex + 1} / {allImages.length}
              </span>
              <span className="text-xs font-medium text-white/70 truncate max-w-sm hidden sm:inline">
                {item.title}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setZoomLevel((z) => (z === 1 ? 1.5 : z === 1.5 ? 2 : 1))}
                className="p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white transition-all"
                title="Toggle Zoom Level"
              >
                {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>

              <a
                href={allImages[lightboxIndex]}
                target="_blank"
                rel="noreferrer"
                download
                className="p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white transition-all"
                title="Open / Download Full Resolution"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2.5 rounded-full bg-white/[0.1] hover:bg-white/[0.25] text-white transition-all ml-2"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Previous Image Button */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 border border-white/[0.1]"
              title="Previous Still (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Image Button */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 border border-white/[0.1]"
              title="Next Still (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Active Image Container */}
          <div 
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[lightboxIndex]}
              alt={`Full resolution preview ${lightboxIndex + 1}`}
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.25s ease-out",
                cursor: zoomLevel > 1 ? "zoom-out" : "zoom-in",
              }}
              onClick={() => setZoomLevel((z) => (z === 1 ? 1.75 : 1))}
              className="max-h-[82vh] max-w-full object-contain rounded-2xl shadow-2xl select-none"
            />
          </div>

          {/* Bottom Thumbnails Strip */}
          {allImages.length > 1 && (
            <div 
              className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-20 px-4 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/[0.1]">
                {allImages.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setZoomLevel(1);
                      setLightboxIndex(idx);
                    }}
                    className={`relative w-12 h-8 rounded-lg overflow-hidden border transition-all ${
                      lightboxIndex === idx
                        ? "border-[#a89bfa] ring-2 ring-[#a89bfa]/50 scale-105"
                        : "border-white/[0.15] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={thumb} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
