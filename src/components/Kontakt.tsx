"use client";

import React, { useState } from "react";
import { ArrowUpRight, Phone, Mail, CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface KontaktProps {
  prefilledTopic?: string;
}

export const Kontakt: React.FC<KontaktProps> = ({ prefilledTopic }) => {
  const { lang } = useLanguage();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    topic: prefilledTopic || "Filmproduktion",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Signature Radiant Contact Card */}
      <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-16 bg-[#17161d] border border-white/[0.12] overflow-hidden shadow-2xl">
        {/* Violet radiant background aura */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7c6af2]/25 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#6b54ee]/15 blur-[120px] pointer-events-none rounded-full" />

        {/* Golden RFP Emblem Badge (Top Right) */}
        <div className="absolute top-8 right-8 sm:top-12 sm:right-12 flex items-center space-x-2">
          <img
            src="/medien/logo/rfp-emblem.png"
            alt="RFP Emblem"
            className="h-12 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)] opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Person & Information */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
              {lang === "de" ? "Direkter Kontakt" : "Get in Touch"}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6 max-w-md">
              {lang === "de"
                ? "Lassen Sie uns über Ihr Projekt sprechen."
                : "Let's talk about your next project."}
            </h2>

            <p className="text-base text-[#f4f2f7b8] leading-relaxed mb-8 max-w-lg">
              {lang === "de" ? (
                <>
                  Ob erster Gedanke, fertiges Briefing oder regelmäßiger Contentbedarf:{" "}
                  <b className="text-white font-semibold">Gabor Brüning</b> bespricht mit Ihnen persönlich,
                  welcher nächste Schritt zu Ihrer Aufgabe passt.{" "}
                  <b className="text-[#a89bfa] font-semibold">In der Regel melden wir uns noch am selben Arbeitstag.</b>
                </>
              ) : (
                <>
                  Whether it is an initial thought, a finished brief or regular content production:{" "}
                  <b className="text-white font-semibold">Gabor Brüning</b> will personally discuss with you
                  which approach best fits your objectives.{" "}
                  <b className="text-[#a89bfa] font-semibold">We typically respond within the same business day.</b>
                </>
              )}
            </p>

            {/* Contact Person Box */}
            <div className="flex items-center space-x-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-8 max-w-md">
              <img
                src="/medien/team/gabor-bruening.jpg"
                alt="Portrait: Gabor Brüning"
                className="w-16 h-16 rounded-full object-cover border border-white/20 shadow-md"
              />
              <div>
                <h3 className="text-base font-bold text-white">Gabor Brüning</h3>
                <span className="text-xs text-[#a89bfa] block mb-1">
                  {lang === "de" ? "Ihr zentraler Ansprechpartner" : "Your central point of contact"}
                </span>
                <span className="text-[11px] font-mono text-[#D4AF37]/90 font-medium">
                  RFP Digital Productions
                </span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:film@imagineyes.de"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white hover:bg-white/90 text-[#0e0d12] text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{lang === "de" ? "E-Mail senden" : "Send an email"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="tel:+4917662077437"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] text-[#f4f2f7] text-xs font-medium tracking-wide transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>+49 176 62077437</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-[#0e0d12]/70 rounded-2xl p-6 sm:p-8 border border-white/[0.08] backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === "de" ? "Schnellanfrage senden" : "Send Quick Inquiry"}
            </h3>
            <p className="text-xs text-[#f4f2f780] mb-6">
              {lang === "de"
                ? "Teilen Sie uns kurz mit, worum es geht – wir melden uns umgehend."
                : "Briefly let us know what you have in mind – we will be in touch promptly."}
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-white/[0.05] border border-[#a89bfa]/30 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#a89bfa] mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">
                  {lang === "de" ? "Vielen Dank für Ihre Nachricht!" : "Thank you for reaching out!"}
                </h4>
                <p className="text-xs text-[#f4f2f780]">
                  {lang === "de"
                    ? "Gabor Brüning wird sich zeitnah persönlich bei Ihnen melden."
                    : "Gabor Brüning will personally contact you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      {lang === "de" ? "Name *" : "Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      {lang === "de" ? "E-Mail *" : "Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@unternehmen.de"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      {lang === "de" ? "Telefon" : "Phone"}
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+49 ..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      {lang === "de" ? "Bereich" : "Discipline"}
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#17161d] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="Filmproduktion">{lang === "de" ? "Filmproduktion" : "Film Production"}</option>
                      <option value="B2B-Content">{lang === "de" ? "B2B-Content" : "B2B Content"}</option>
                      <option value="KI-Filmproduktion">{lang === "de" ? "KI-Filmproduktion" : "AI Film Production"}</option>
                      <option value="3D-Animation">{lang === "de" ? "3D-Animation" : "3D Animation"}</option>
                      <option value="Erklärfilm">{lang === "de" ? "Erklärfilm" : "Explainer Film"}</option>
                      <option value="KI-Workflows">{lang === "de" ? "KI-Workflows & Schulung" : "AI Workflows & Training"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                    {lang === "de" ? "Projektbeschreibung / Nachricht *" : "Project Description / Message *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      lang === "de"
                        ? "Beschreiben Sie kurz Ihr Vorhaben, geplante Termine oder offene Fragen..."
                        : "Briefly outline your goals, planned timeline, or initial questions..."
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-sm text-white placeholder-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#6b54ee] hover:bg-[#7c6af2] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#6b54ee]/30 active:scale-98"
                >
                  <span>{lang === "de" ? "Anfrage absenden" : "Submit Inquiry"}</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
