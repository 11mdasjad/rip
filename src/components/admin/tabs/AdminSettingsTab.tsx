"use client";

import React, { useState, useEffect } from "react";
import { useData } from "@/context/DataContext";
import { Save, CheckCircle2 } from "lucide-react";

export const AdminSettingsTab: React.FC = () => {
  const { siteSettings, updateSiteSettings } = useData();
  const [form, setForm] = useState({ ...siteSettings });
  const [toast, setToast] = useState("");

  useEffect(() => {
    setForm({ ...siteSettings });
  }, [siteSettings]);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(""), 3000); };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(form);
    showToast("Studio settings saved successfully!");
  };

  return (
    <section className="max-w-3xl mx-auto">
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#17161d] border border-[#a89bfa] text-white text-sm shadow-2xl flex items-center space-x-2 animate-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-[#a89bfa]" /><span>{toast}</span>
        </div>
      )}

      <div className="rounded-3xl bg-[#17161d] border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-2">Studio & Contact Settings</h2>
        <p className="text-xs text-white/50 mb-8">Update company identity, contact details, and studio branding information.</p>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">Brand Name</label><input type="text" value={form.brandName} onChange={(e) => setForm({ ...form, brandName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">Tagline</label><input type="text" value={form.brandTagline} onChange={(e) => setForm({ ...form, brandTagline: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">Contact Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">Phone</label><input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">Address</label><input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">City / Postal</label><input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
            <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">Country</label><input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
          </div>
          <div><label className="block text-xs font-mono uppercase text-white/60 mb-1.5">About Bio</label><textarea rows={4} value={form.aboutText} onChange={(e) => setForm({ ...form, aboutText: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>

          <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-[#7c6af2] to-[#6b54ee] text-xs font-semibold text-white tracking-wider uppercase shadow-lg active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
            <Save className="w-4 h-4" /><span>Save Studio Settings</span>
          </button>
        </form>
      </div>
    </section>
  );
};
