"use client";

import React, { useState } from "react";
import { useData } from "@/context/DataContext";
import { ProjectCard } from "@/data/imagineContent";
import { Plus, Edit3, Trash2, X, CheckCircle2, ImageIcon } from "lucide-react";

export const AdminProjectsTab: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({
    title: "", client: "", categoryEn: "Brand Film · Live Action + 3D",
    filterCat: "film" as ProjectCard["filterCat"],
    descEn: "", poster: "", videoUrl: "", tags: "",
  });

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(""), 3000); };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm((p) => ({ ...p, poster: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const openNew = () => {
    setEditingId(null);
    setForm({ title: "", client: "", categoryEn: "Brand Film · Live Action + 3D", filterCat: "film", descEn: "", poster: "", videoUrl: "", tags: "" });
    setModalOpen(true);
  };

  const openEdit = (p: ProjectCard) => {
    setEditingId(p.id);
    setForm({ title: p.title, client: p.client, categoryEn: p.categoryEn, filterCat: p.filterCat, descEn: p.descEn, poster: p.poster, videoUrl: p.videoUrl || "", tags: (p.tags || []).join(", ") });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { showToast("Title is required"); return; }
    const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
    if (editingId) {
      updateProject(editingId, { title: form.title, client: form.client, categoryEn: form.categoryEn, categoryDe: form.categoryEn, filterCat: form.filterCat, descEn: form.descEn, descDe: form.descEn, poster: form.poster, videoUrl: form.videoUrl || undefined, tags });
      showToast(`Updated "${form.title}"`);
    } else {
      addProject({ slot: "slot-g", title: form.title, client: form.client, categoryEn: form.categoryEn, categoryDe: form.categoryEn, filterCat: form.filterCat, descEn: form.descEn, descDe: form.descEn, poster: form.poster, videoUrl: form.videoUrl || undefined, tags });
      showToast(`Added "${form.title}"`);
    }
    setModalOpen(false);
  };

  return (
    <section className="space-y-6">
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#17161d] border border-[#a89bfa] text-white text-sm shadow-2xl flex items-center space-x-2 animate-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-[#a89bfa]" /><span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#17161d] p-5 sm:p-6 rounded-2xl border border-white/[0.08]">
        <div>
          <h2 className="text-lg font-bold text-white">Homepage Showcase Projects</h2>
          <p className="text-xs text-white/50 mt-0.5">{projects.length} projects on the homepage bento grid</p>
        </div>
        <button onClick={openNew} className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-[#7c6af2] hover:bg-[#6b54ee] text-xs font-semibold text-white shadow-lg transition-all whitespace-nowrap">
          <Plus className="w-4 h-4" /><span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div key={p.id} className="rounded-2xl bg-[#17161d] border border-white/[0.08] overflow-hidden group hover:border-[#a89bfa]/40 transition-all shadow-lg">
            <div className="relative aspect-[16/9] bg-black/50 overflow-hidden">
              <img src={p.poster} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute top-2.5 left-2.5"><span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 text-[#a89bfa]">{p.filterCat}</span></div>
            </div>
            <div className="p-4">
              <div className="text-[10px] font-mono text-white/40 uppercase mb-1">{p.client}</div>
              <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-white/50 line-clamp-2">{p.descEn}</p>
            </div>
            <div className="p-3 bg-black/30 border-t border-white/[0.06] flex items-center justify-end space-x-2 text-xs">
              <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] text-white transition-colors"><Edit3 className="w-3.5 h-3.5 text-[#a89bfa]" /></button>
              <button onClick={() => { if (confirm(`Delete "${p.title}"?`)) { deleteProject(p.id); showToast(`Deleted "${p.title}"`); }}} className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/25 text-red-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#17161d] border border-white/[0.15] rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white"><X className="w-5 h-5" /></button>
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a89bfa]">Projects CMS</span>
              <h2 className="text-xl font-bold text-white mt-1">{editingId ? "Edit Project" : "Add New Project"}</h2>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div><label className="block text-xs font-mono text-white/60 mb-1">Title *</label><input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-xs font-mono text-white/60 mb-1">Client</label><input type="text" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]" /></div>
                <div><label className="block text-xs font-mono text-white/60 mb-1">Type</label><select value={form.filterCat} onChange={(e) => setForm({ ...form, filterCat: e.target.value as ProjectCard["filterCat"] })} className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"><option value="film">Film & Cinema</option><option value="animation">3D Animation</option><option value="ki">AI Production</option><option value="b2b">B2B Content</option></select></div>
              </div>
              <div>
                <label className="block text-xs font-mono text-white/60 mb-1">Poster Image</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="/medien/... or URL" value={form.poster} onChange={(e) => setForm({ ...form, poster: e.target.value })} className="flex-1 px-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white" />
                  <label className="px-3 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs text-white cursor-pointer whitespace-nowrap flex items-center gap-1"><ImageIcon className="w-3.5 h-3.5" /> Upload<input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" /></label>
                </div>
              </div>
              <div><label className="block text-xs font-mono text-white/60 mb-1">Description</label><textarea rows={3} value={form.descEn} onChange={(e) => setForm({ ...form, descEn: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white" /></div>
              <div><label className="block text-xs font-mono text-white/60 mb-1">Video URL (optional)</label><input type="text" value={form.videoUrl} onChange={(e) => setForm({ ...form, videoUrl: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white" /></div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end space-x-3">
                <button type="button" onClick={() => setModalOpen(false)} className="px-5 py-2.5 rounded-full bg-white/[0.05] text-xs font-semibold text-white/80">Cancel</button>
                <button type="submit" className="px-6 py-2.5 rounded-full bg-[#7c6af2] hover:bg-[#6b54ee] text-xs font-semibold text-white shadow-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
