"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useData } from "@/context/DataContext";
import { GalleryItem } from "@/types/gallery";
import {
  Plus, Search, Edit3, Trash2, Eye, X, ImageIcon, CheckCircle2, Star, ImagePlus,
} from "lucide-react";

export const AdminGalleryTab: React.FC = () => {
  const { galleryItems, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useData();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  const [form, setForm] = useState({
    title: "",
    category: "Cinema & Film" as GalleryItem["category"],
    client: "",
    year: new Date().getFullYear().toString(),
    image: "",
    stills: [] as string[],
    newStillInput: "",
    summary: "",
    description: "",
    tools: "",
    deliverables: "",
    directorNotes: "",
    btsNotes: "",
    featured: false,
  });

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const filtered = galleryItems.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase()) ||
    g.category.toLowerCase().includes(search.toLowerCase()) ||
    g.client?.toLowerCase().includes(search.toLowerCase())
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { showToast("File too large (max 10MB)"); return; }
    const reader = new FileReader();
    reader.onloadend = () => setForm((p) => ({ ...p, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleStillUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { showToast("File too large (max 10MB)"); return; }
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setForm((p) => ({ ...p, stills: [...p.stills, dataUrl] }));
      showToast("Additional image added");
    };
    reader.readAsDataURL(file);
  };

  const addStillUrl = () => {
    if (!form.newStillInput.trim()) return;
    setForm((p) => ({
      ...p,
      stills: [...p.stills, p.newStillInput.trim()],
      newStillInput: "",
    }));
  };

  const removeStill = (index: number) => {
    setForm((p) => ({
      ...p,
      stills: p.stills.filter((_, i) => i !== index),
    }));
  };

  const openNew = () => {
    setEditingId(null);
    setForm({
      title: "",
      category: "Cinema & Film",
      client: "",
      year: new Date().getFullYear().toString(),
      image: "",
      stills: [],
      newStillInput: "",
      summary: "",
      description: "",
      tools: "",
      deliverables: "",
      directorNotes: "",
      btsNotes: "",
      featured: false,
    });
    setModalOpen(true);
  };

  const openEdit = (item: GalleryItem) => {
    setEditingId(item.id);
    setForm({
      title: item.title,
      category: item.category,
      client: item.client || "",
      year: item.year,
      image: item.image,
      stills: item.stills || [],
      newStillInput: "",
      summary: item.summary,
      description: item.description,
      tools: (item.tools || []).join(", "),
      deliverables: (item.deliverables || []).join(", "),
      directorNotes: item.directorNotes || "",
      btsNotes: item.btsNotes || "",
      featured: !!item.featured,
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { showToast("Title is required"); return; }
    if (!form.image.trim()) { showToast("Primary image is required"); return; }

    const toolsArr = form.tools.split(",").map((t) => t.trim()).filter(Boolean);
    const delivArr = form.deliverables.split(",").map((d) => d.trim()).filter(Boolean);

    const payload = {
      title: form.title,
      category: form.category,
      client: form.client,
      year: form.year,
      image: form.image,
      stills: form.stills.length > 0 ? form.stills : [form.image],
      summary: form.summary,
      description: form.description,
      tools: toolsArr,
      deliverables: delivArr,
      directorNotes: form.directorNotes || undefined,
      btsNotes: form.btsNotes || undefined,
      featured: form.featured,
    };

    if (editingId) {
      updateGalleryItem(editingId, payload);
      showToast(`Updated image work "${form.title}"`);
    } else {
      addGalleryItem(payload);
      showToast(`Created & published "${form.title}"`);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Delete image work "${title}" permanently?`)) {
      deleteGalleryItem(id);
      showToast(`Deleted "${title}"`);
    }
  };

  return (
    <section className="space-y-6">
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#17161d] border border-[#a89bfa] text-white text-sm shadow-2xl flex items-center space-x-2 animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#a89bfa]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#17161d] p-5 sm:p-6 rounded-2xl border border-white/[0.08]">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-white">Image & Visual Gallery</h2>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#7c6af2]/20 text-[#a89bfa] border border-[#7c6af2]/30">Photos & Renders</span>
          </div>
          <p className="text-xs text-white/50 mt-1">
            {galleryItems.length} visual works · Upload & manage high-res images directly displayed on /gallery
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search images..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-2 bg-black/40 border border-white/[0.1] rounded-full text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#a89bfa] w-48"
            />
          </div>
          <button
            onClick={openNew}
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#7c6af2] to-[#6b54ee] text-xs font-semibold text-white shadow-lg hover:shadow-[#7c6af2]/25 active:scale-95 transition-all whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Image</span>
          </button>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-[#17161d] border border-white/[0.08] overflow-hidden group hover:border-[#a89bfa]/40 transition-all shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] bg-black/50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 backdrop-blur text-[#a89bfa] border border-white/[0.1]">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="px-1.5 py-0.5 rounded-full text-[8px] font-mono uppercase bg-[#D4AF37]/20 text-[#E6C665] border border-[#D4AF37]/40 flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-current" /> Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                  {item.stills && item.stills.length > 1 && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/70 text-[#a89bfa] border border-[#a89bfa]/30 flex items-center gap-1">
                      <ImageIcon className="w-2.5 h-2.5" />
                      {item.stills.length}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/70 text-white/80">
                    {item.year}
                  </span>
                </div>
              </div>

              <div className="p-4">
                {item.client && (
                  <div className="text-[10px] font-mono text-white/40 uppercase mb-1">
                    {item.client}
                  </div>
                )}
                <h3 className="text-sm font-bold text-white line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 line-clamp-2">
                  {item.summary || item.description}
                </p>
              </div>
            </div>

            <div className="p-3 bg-black/30 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <Link
                href={`/gallery/${item.id}`}
                target="_blank"
                className="inline-flex items-center space-x-1 text-white/60 hover:text-white transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </Link>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openEdit(item)}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] text-white transition-colors"
                  title="Edit Image Details"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#a89bfa]" />
                </button>
                <button
                  onClick={() => handleDelete(item.id, item.title)}
                  className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/25 text-red-400 transition-colors"
                  title="Delete Image Work"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ADD / EDIT MODAL ===== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#17161d] border border-white/[0.15] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a89bfa]">
                Image Gallery CMS
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                {editingId ? "Edit Image Work" : "Add New Image Work"}
              </h2>
              <p className="text-xs text-white/50 mt-1">
                Upload or link high-resolution images for the public gallery showcase.
              </p>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1">
                    Image Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cinematic Landscape Capture"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1">
                    Category *
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: e.target.value as GalleryItem["category"],
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                  >
                    <option value="Cinema & Film">Cinema & Film</option>
                    <option value="AI & Generative">AI & Generative</option>
                    <option value="3D & VFX">3D & VFX</option>
                    <option value="Commercials">Commercials</option>
                    <option value="Behind The Scenes">Behind The Scenes</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1">
                    Client / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Red Bull, BMW, Studio Work"
                    value={form.client}
                    onChange={(e) => setForm({ ...form, client: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                  />
                </div>
              </div>

              {/* PRIMARY IMAGE UPLOAD & PREVIEW */}
              <div className="rounded-2xl p-4 sm:p-5 bg-black/40 border border-white/[0.1] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono text-white/80 font-bold">
                    Primary High-Resolution Image *
                  </label>
                  <span className="text-[10px] font-mono text-white/40">PNG, JPG, WEBP (Max 10MB)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-white/[0.04] to-white/[0.08] hover:from-white/[0.08] hover:to-white/[0.12] border border-dashed border-[#a89bfa]/50 text-xs text-white cursor-pointer transition-all">
                    <ImageIcon className="w-4 h-4 text-[#a89bfa]" />
                    <span className="font-medium">Upload Image File…</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>

                  <input
                    type="text"
                    placeholder="Or paste image URL / path..."
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af2]"
                  />
                </div>

                {form.image && (
                  <div className="relative aspect-[16/9] max-h-44 rounded-xl overflow-hidden border border-white/[0.15] bg-black shadow-inner">
                    <img
                      src={form.image}
                      alt="Primary Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur text-[10px] font-mono text-emerald-400 flex items-center space-x-1.5 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Primary Image Ready</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ADDITIONAL STILLS / GALLERY IMAGES */}
              <div className="rounded-2xl p-4 sm:p-5 bg-black/30 border border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-mono text-white/80 font-bold">
                      Additional Images & Stills (Optional)
                    </label>
                    <p className="text-[11px] text-white/40 mt-0.5">
                      Add multiple frames, renders, or BTS stills for this work
                    </p>
                  </div>
                  <label className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs text-white cursor-pointer transition-all">
                    <ImagePlus className="w-3.5 h-3.5 text-[#a89bfa]" />
                    <span>Upload Still</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleStillUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Or enter still image URL..."
                    value={form.newStillInput}
                    onChange={(e) => setForm({ ...form, newStillInput: e.target.value })}
                    className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/[0.1] text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af2]"
                  />
                  <button
                    type="button"
                    onClick={addStillUrl}
                    className="px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs text-white font-medium transition-all"
                  >
                    Add URL
                  </button>
                </div>

                {form.stills.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-1">
                    {form.stills.map((still, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/[0.1] group/still bg-black"
                      >
                        <img
                          src={still}
                          alt={`Still ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeStill(idx)}
                          className="absolute top-1 right-1 p-1 rounded bg-black/80 hover:bg-red-500 text-white/80 hover:text-white transition-all opacity-0 group-hover/still:opacity-100"
                          title="Remove still"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-mono bg-black/70 text-white/70">
                          #{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 mb-1">
                  Short Summary
                </label>
                <input
                  type="text"
                  placeholder="One sentence describing the image work..."
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 mb-1">
                  Full Story & Production Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Details about camera optics, rendering engine, lighting setup, or artistic direction..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1">
                    Tools / Software (comma-separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Midjourney, Unreal Engine 5, Blender, Sony FX9"
                    value={form.tools}
                    onChange={(e) => setForm({ ...form, tools: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1">
                    Deliverables / Formats (comma-separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8K Master Render, Key Visual Stills, 16:9 Billboard"
                    value={form.deliverables}
                    onChange={(e) => setForm({ ...form, deliverables: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="feat"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  className="w-4 h-4 rounded text-[#7c6af2]"
                />
                <label htmlFor="feat" className="text-xs text-white/70 cursor-pointer">
                  Feature this image prominently in the gallery
                </label>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white/80"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7c6af2] to-[#6b54ee] text-xs font-semibold text-white shadow-lg active:scale-95 transition-all"
                >
                  {editingId ? "Save Changes" : "Publish Image Work"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
