"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fakten } from "@/components/Fakten";
import { Logos } from "@/components/Logos";
import { Projects } from "@/components/Projects";
import { Zusammenarbeit } from "@/components/Zusammenarbeit";
import { Leistungen } from "@/components/Leistungen";
import { Prozess } from "@/components/Prozess";
import { Skalierung } from "@/components/Skalierung";
import { KiWorkflows } from "@/components/KiWorkflows";
import { FAQ } from "@/components/FAQ";
import { Kontakt } from "@/components/Kontakt";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/modals/VideoModal";
import { ProjectModal } from "@/components/modals/ProjectModal";
import { ProjectCard, CLIENT_LOGOS } from "@/data/imagineContent";

export default function Home() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl?: string;
    title?: string;
    subtitle?: string;
  }>({
    isOpen: false,
    videoUrl: "",
    title: "",
    subtitle: "",
  });

  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);
  const [contactTopic, setContactTopic] = useState<string>("Filmproduktion");

  const handleOpenVideo = (
    url = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title = "Imagine Yes Showreel",
    subtitle = "Filmproduktion · 3D · KI"
  ) => {
    setVideoModal({
      isOpen: true,
      videoUrl: url,
      title,
      subtitle,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenContactWithTopic = (topic?: string) => {
    if (topic) setContactTopic(topic);
    const el = document.getElementById("kontakt");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Persistent Navigation Header */}
      <Header onOpenContact={() => handleOpenContactWithTopic()} />

      {/* Main Page Flow matching Imagine Yes */}
      <div className="relative z-10">
        {/* 1. Hero with interactive rotating Projektbühne */}
        <Hero onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)} />

        {/* 2. Stand 2026 Key Metrics / Kennzahlen */}
        <Fakten />

        {/* 3. Client Logos Marquee 1 */}
        <Logos
          titleDe="Unternehmen, für die wir produziert haben"
          titleEn="Companies we have produced for"
          items={CLIENT_LOGOS.slice(0, 8)}
        />

        {/* 4. Selected Work with Bento Grid and Interactive EGYM Slider */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)}
        />

        {/* 5. How We Collaborate / Zusammenarbeit */}
        <Zusammenarbeit />

        {/* 6. Comprehensive Services / Leistungen */}
        <Leistungen onOpenContact={(topic) => handleOpenContactWithTopic(topic)} />

        {/* 7. Production Process & Jung von Matt Case Spotlight */}
        <Prozess onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)} />

        {/* 8. Scalable Production Editorial Light Canvas with Making-of Gallery */}
        <Skalierung />

        {/* 9. Client Logos 2 */}
        <Logos
          titleDe="Weitere Unternehmen, weitere Aufgaben"
          titleEn="More companies, more challenges"
          items={CLIENT_LOGOS.slice(6)}
        />

        {/* 10. AI in Enterprise / KI im Unternehmen */}
        <KiWorkflows />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Signature Direct Contact with Gabor Brüning & Inquiry Form */}
        <Kontakt prefilledTopic={contactTopic} />

        {/* 13. Obsidian Footer */}
        <Footer />
      </div>

      {/* Reusable Video Player Lightbox Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
        subtitle={videoModal.subtitle}
      />

      {/* Project Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onWatchReel={(url, title) => {
          setSelectedProject(null);
          handleOpenVideo(url, title, "Imagine Yes Case");
        }}
      />
    </main>
  );
}
