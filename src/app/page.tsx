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
  const [contactTopic, setContactTopic] = useState<string>("Corporate Films");

  const handleOpenVideo = (
    url = "https://www.youtube.com/watch?v=QvlClFaXJLc",
    title = "Showreels",
    subtitle = "RFP Digital Productions"
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

      {/* Main Page Flow */}
      <div className="relative z-10">
        {/* 1. Hero with interactive rotating visual stage */}
        <Hero onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)} />

        {/* 2. Key Metrics & Credentials */}
        <Fakten />

        {/* 3. Client Logos Marquee 1 */}
        <Logos
          titleEn="Esteemed Clients & Institutions We Have Produced For"
          items={CLIENT_LOGOS}
        />

        {/* 4. Selected Work with Bento Grid and Video Showcase */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)}
        />

        {/* 5. How We Collaborate */}
        <Zusammenarbeit />

        {/* 6. Comprehensive Services */}
        <Leistungen onOpenContact={(topic) => handleOpenContactWithTopic(topic)} />

        {/* 7. Production Process & Acharya Narendra Dev College Spotlight */}
        <Prozess onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)} />

        {/* 8. Scalable Production Making-of Gallery */}
        <Skalierung />

        {/* 9. Client Logos 2 */}
        <Logos
          titleEn="Nationwide Organizations & Partners"
          items={[...CLIENT_LOGOS].reverse()}
          reverse
        />

        {/* 10. Election Campaign & Voter Outreach Management */}
        <KiWorkflows />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Direct Contact with RFP Executive Production Team */}
        <Kontakt prefilledTopic={contactTopic} />

        {/* 13. Footer */}
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
          handleOpenVideo(url, title, "RFP Digital Production Showcase");
        }}
      />
    </main>
  );
}
