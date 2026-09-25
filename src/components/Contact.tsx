"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Phone, MapPin, Mail, AlertCircle } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceNeeded: "Corporate Film",
    projectDetails: "",
    preferredMethod: "Email",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your full name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please provide your phone / WhatsApp number.";
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = "Please outline your project timeline or objectives.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]"
    >
      {/* Section Tag */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="text-sm text-[#5A7865]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#161D1A] uppercase font-semibold">
          START A CONVERSATION
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Invitation & Studio Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight mb-6">
              Have a story to tell? <br />
              <span className="italic font-light text-[#6F7A74]">
                Let’s make it worth watching.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#6F7A74] font-sans leading-relaxed">
              Whether you are commissioning an institutional documentary, architecting
              a nationwide campaign, or elevating your brand cinema, our production
              and digital units are prepared to mobilize.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DDD2] space-y-6">
            <h4 className="font-serif text-xl text-[#161D1A]">Studio Operations</h4>

            <div className="space-y-4 text-xs font-mono text-[#161D1A]">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#5A7865] shrink-0" />
                <span>+91 11 4996 3157</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#5A7865] shrink-0" />
                <span>contact@rfpdigital.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#5A7865] shrink-0" />
                <span>India (Pan-India Production Deployments)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD2] text-[11px] font-mono text-[#6F7A74]">
              Direct line hours: Monday – Friday, 09:30 – 19:00 IST
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Enquiry Form */}
        <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl border border-[#E2DDD2] p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#131F1C] text-[#8CA394] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-[#5A7865]" />
              </div>
              <h3 className="font-serif text-3xl text-[#161D1A]">
                Enquiry Received
              </h3>
              <p className="text-sm text-[#6F7A74] font-sans max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. A member of our executive production team will
                review your project scope and connect with you via {formData.preferredMethod}.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      email: "",
                      serviceNeeded: "Corporate Film",
                      projectDetails: "",
                      preferredMethod: "Email",
                    });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#161D1A] border border-[#E2DDD2] hover:bg-[#F4F1EA] transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-widest text-[#161D1A]"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="E.g. Vikramaditya Sen"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F4F1EA]/50 border text-sm text-[#161D1A] placeholder-[#6F7A74]/50 focus:outline-none focus:border-[#5A7865] transition-colors ${
                      errors.fullName ? "border-red-500" : "border-[#E2DDD2]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 inline" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-mono uppercase tracking-widest text-[#161D1A]"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F4F1EA]/50 border text-sm text-[#161D1A] placeholder-[#6F7A74]/50 focus:outline-none focus:border-[#5A7865] transition-colors ${
                      errors.phone ? "border-red-500" : "border-[#E2DDD2]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 inline" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-widest text-[#161D1A]"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F4F1EA]/50 border text-sm text-[#161D1A] placeholder-[#6F7A74]/50 focus:outline-none focus:border-[#5A7865] transition-colors ${
                      errors.email ? "border-red-500" : "border-[#E2DDD2]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 inline" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Needed */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="serviceNeeded"
                    className="block text-xs font-mono uppercase tracking-widest text-[#161D1A]"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F1EA]/50 border border-[#E2DDD2] text-sm text-[#161D1A] focus:outline-none focus:border-[#5A7865] transition-colors"
                  >
                    <option value="Corporate Film">Corporate Film</option>
                    <option value="Documentary Film">Documentary Film</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Campaign Services">Campaign Services</option>
                    <option value="Other">Other Media Requirement</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#161D1A]">
                  Preferred Contact Method
                </label>
                <div className="flex items-center space-x-6 pt-1">
                  {["Email", "WhatsApp", "Phone"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center space-x-2 text-xs text-[#161D1A] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="preferredMethod"
                        value={method}
                        checked={formData.preferredMethod === method}
                        onChange={handleChange}
                        className="accent-[#5A7865]"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label
                  htmlFor="projectDetails"
                  className="block text-xs font-mono uppercase tracking-widest text-[#161D1A]"
                >
                  Project Details & Objectives *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe your narrative goals, approximate timeline, and desired deliverables..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#F4F1EA]/50 border text-sm text-[#161D1A] placeholder-[#6F7A74]/50 focus:outline-none focus:border-[#5A7865] transition-colors ${
                    errors.projectDetails ? "border-red-500" : "border-[#E2DDD2]"
                  }`}
                />
                {errors.projectDetails && (
                  <p className="text-[11px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 inline" />
                    <span>{errors.projectDetails}</span>
                  </p>
                )}
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] text-[#6F7A74] font-mono leading-relaxed">
                Privacy Notice: Your coordinates and brief are held in strict commercial
                confidence and handled exclusively by our executive production producers.
              </p>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-3 py-4 bg-[#161D1A] hover:bg-[#5A7865] text-[#FAF8F5] text-xs font-mono uppercase tracking-[0.2em] rounded-full transition-all duration-300 disabled:opacity-50 group shadow-md"
              >
                <span>{isSubmitting ? "Dispatching..." : "Prepare Enquiry"}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

