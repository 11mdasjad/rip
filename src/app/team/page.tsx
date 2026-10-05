"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TEAM_DATA } from "@/data/team";
import { TeamMemberItem } from "@/types";
import { 
  Users, 
  Sparkles, 
  ArrowLeft, 
  X, 
  Mail, 
  CheckCircle2, 
  Camera, 
  Film, 
  Award, 
  Search, 
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function TeamPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMember, setSelectedMember] = useState<TeamMemberItem | null>(null);

  const departments = ["All", "Leadership", "Direction", "Production", "Post-production", "Digital"];

  const filteredMembers = useMemo(() => {
    return TEAM_DATA.filter((member) => {
      const matchesDept = selectedDept === "All" || member.department === selectedDept;
      const matchesSearch = 
        searchQuery.trim() === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.specialties && member.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (member.gearExpertise && member.gearExpertise.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Global Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.08]">
          {/* Ambient Lighting Glows */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#7c6af2]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#a89bfa]">Production Ensemble</span>
            </div>

            {/* Badges & Heading */}
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#a89bfa]">
                <Users className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span className="tracking-wider uppercase">Alumni of AJK MCRC · Jamia Millia Islamia</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-medium tracking-tight leading-[1.12]">
                The Cinematic Minds &amp; Master Technicians Behind the Lens
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans font-light">
                Over 17+ years of broadcast discipline, documentary rigor, and election campaign management. Meet the directors, cinematographers, sound designers, and field producers who turn bold ideas into indelible moving pictures.
              </p>
            </div>

            {/* Stats Band */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">17+ Years</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Media Excellence</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#a89bfa] tracking-tight">60+ Films</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Institutional Masters</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">15+ States</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Campaign Outreach</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665] tracking-tight">100% In-House</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Cinema Gear &amp; Post</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="py-8 bg-[#111016] border-b border-white/[0.06] sticky top-16 z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Department Tabs */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {departments.map((dept) => {
                  const isActive = selectedDept === dept;
                  return (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-[#6b54ee] text-white font-semibold shadow-lg shadow-[#6b54ee]/25 border border-[#a89bfa]/40"
                          : "text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06]"
                      }`}
                    >
                      {dept}
                    </button>
                  );
                })}
              </div>

              {/* Keyword Search */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, gear, specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#a89bfa] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/[0.1] rounded-3xl bg-white/[0.02]">
              <Users className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-white mb-2">No team members match your criteria</h3>
              <p className="text-xs text-white/50 max-w-sm mx-auto mb-6">
                Try selecting a different department tab or clearing your search query.
              </p>
              <button
                onClick={() => {
                  setSelectedDept("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-white/[0.1] hover:bg-white/[0.15] text-xs font-mono text-white transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="group relative bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7c6af2]/10 flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-5">
                    {/* Portrait Frame */}
                    <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-black/50">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                      {/* Department Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#a89bfa] border border-white/[0.15]">
                          {member.department}
                        </span>
                      </div>

                      {/* Credentials Tag */}
                      {member.credentials && (
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="text-[10px] font-mono text-white/80 line-clamp-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                            {member.credentials}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Basic Info */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-white group-hover:text-[#a89bfa] transition-colors font-medium">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#E6C665]">
                        {member.role}
                      </p>
                      <p className="text-xs text-white/60 line-clamp-3 leading-relaxed font-sans pt-1">
                        {member.bio}
                      </p>
                    </div>

                    {/* Specialties Pill preview */}
                    {member.specialties && member.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
                        {member.specialties.slice(0, 2).map((spec, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-white/70 border border-white/[0.06]"
                          >
                            {spec}
                          </span>
                        ))}
                        {member.specialties.length > 2 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.04] text-white/40">
                            +{member.specialties.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#a89bfa]">
                    <span className="group-hover:underline">View Full Profile &amp; Gear</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Interactive Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#17161d] border border-white/[0.15] rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Member Portrait */}
              <div className="md:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.1]">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#a89bfa] border border-white/20">
                      {selectedMember.department}
                    </span>
                  </div>
                </div>

                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white/80 hover:text-white border border-white/[0.08] flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#a89bfa]" />
                    <span>{selectedMember.email}</span>
                  </a>
                )}
              </div>

              {/* Full Details */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h2 className="text-3xl font-serif text-white font-medium">
                    {selectedMember.name}
                  </h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E6C665] mt-1">
                    {selectedMember.role}
                  </p>
                  {selectedMember.credentials && (
                    <div className="flex items-center gap-1.5 text-xs text-[#a89bfa] font-mono mt-2">
                      <Award className="w-4 h-4 text-[#a89bfa]" />
                      <span>{selectedMember.credentials}</span>
                    </div>
                  )}
                  {selectedMember.experience && (
                    <div className="text-xs font-mono text-white/50 mt-1">
                      Tenure: {selectedMember.experience}
                    </div>
                  )}
                </div>

                {/* Biography */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Background &amp; Discipline
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Artistic Philosophy */}
                {selectedMember.philosophy && (
                  <div className="p-4 rounded-xl bg-[#6b54ee]/10 border border-[#6b54ee]/20 text-xs sm:text-sm italic text-white/90 font-serif leading-relaxed">
                    &ldquo;{selectedMember.philosophy}&rdquo;
                  </div>
                )}

                {/* Specialties */}
                {selectedMember.specialties && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                      Core Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-white/90 flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#a89bfa]" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Works */}
                {selectedMember.keyWorks && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                      Key Institutional &amp; Campaign Works
                    </h4>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {selectedMember.keyWorks.map((work, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Film className="w-3.5 h-3.5 text-[#E6C665] mt-0.5 shrink-0" />
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gear Expertise */}
                {selectedMember.gearExpertise && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                      Technical Systems &amp; Gear
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMember.gearExpertise.map((gear, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/70 flex items-center gap-1"
                        >
                          <Camera className="w-3 h-3 text-white/40" />
                          <span>{gear}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inquire with RFP Team */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                  <Link
                    href="/#kontakt"
                    onClick={() => setSelectedMember(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#6b54ee] hover:bg-[#5842db] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>Collaborate With Our Team</span>
                    <span>→</span>
                  </Link>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-xs font-mono text-white/40 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
