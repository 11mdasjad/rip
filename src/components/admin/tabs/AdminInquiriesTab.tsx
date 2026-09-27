"use client";

import React, { useState, useMemo } from "react";
import { useData } from "@/context/DataContext";
import { Inquiry, InquiryStatus } from "@/types/gallery";
import {
  Inbox,
  Search,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  Archive,
  Trash2,
  Eye,
  X,
  Send,
  Download,
  Filter,
  Layers,
  FileText,
  User,
  ArrowUpRight,
} from "lucide-react";

const STATUS_CONFIG: Record<
  InquiryStatus,
  { label: string; bg: string; text: string; border: string }
> = {
  new: {
    label: "New Lead",
    bg: "bg-[#7c6af2]/20",
    text: "text-[#a89bfa]",
    border: "border-[#7c6af2]/40",
  },
  contacted: {
    label: "Contacted",
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  in_progress: {
    label: "In Progress",
    bg: "bg-[#D4AF37]/20",
    text: "text-[#E6C665]",
    border: "border-[#D4AF37]/40",
  },
  archived: {
    label: "Archived",
    bg: "bg-white/[0.06]",
    text: "text-white/40",
    border: "border-white/[0.1]",
  },
};

export const AdminInquiriesTab: React.FC = () => {
  const {
    inquiries,
    updateInquiryStatus,
    updateInquiryNotes,
    deleteInquiry,
  } = useData();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [notesInput, setNotesInput] = useState("");
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  // Filtered inquiries
  const filtered = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchesStatus =
        statusFilter === "all" ? true : inq.status === statusFilter;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        inq.name.toLowerCase().includes(q) ||
        inq.email.toLowerCase().includes(q) ||
        (inq.phone && inq.phone.toLowerCase().includes(q)) ||
        inq.discipline.toLowerCase().includes(q) ||
        inq.message.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [inquiries, statusFilter, search]);

  // Counts
  const counts = useMemo(() => {
    return {
      all: inquiries.length,
      new: inquiries.filter((i) => i.status === "new").length,
      contacted: inquiries.filter((i) => i.status === "contacted").length,
      in_progress: inquiries.filter((i) => i.status === "in_progress").length,
      archived: inquiries.filter((i) => i.status === "archived").length,
    };
  }, [inquiries]);

  const handleOpenDetail = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setNotesInput(inquiry.notes || "");
    // If it's new, we can keep it as is or user can manually change status
  };

  const handleSaveNotes = () => {
    if (!selectedInquiry) return;
    updateInquiryNotes(selectedInquiry.id, notesInput.trim());
    setSelectedInquiry((prev) => (prev ? { ...prev, notes: notesInput.trim() } : null));
    showToast("Notes updated");
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete inquiry from "${name}"?`)) {
      deleteInquiry(id);
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
      showToast("Inquiry deleted");
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      showToast("No inquiries to export");
      return;
    }
    const headers = ["ID", "Name", "Email", "Phone", "Discipline", "Status", "Date", "Message", "Notes"];
    const rows = inquiries.map((i) => [
      i.id,
      `"${i.name.replace(/"/g, '""')}"`,
      `"${i.email}"`,
      `"${i.phone || ""}"`,
      `"${i.discipline}"`,
      i.status,
      `"${new Date(i.createdAt).toLocaleString()}"`,
      `"${i.message.replace(/"/g, '""').replace(/\n/g, " ")}"`,
      `"${(i.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `rfp_inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Inquiries exported to CSV");
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoStr;
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
          <div className="flex items-center space-x-2.5">
            <h2 className="text-lg font-bold text-white">Client Inquiries & Leads</h2>
            {counts.new > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#7c6af2] text-white animate-pulse">
                {counts.new} New
              </span>
            )}
          </div>
          <p className="text-xs text-white/50 mt-1">
            Real-time inquiries captured from the public contact and project brief forms
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads, emails..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-2 bg-black/40 border border-white/[0.1] rounded-full text-base sm:text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#a89bfa] w-full sm:w-48"
            />
          </div>

          <button
            onClick={handleExportCSV}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-medium text-white transition-all whitespace-nowrap"
            title="Export CSV"
          >
            <Download className="w-3.5 h-3.5 text-[#a89bfa]" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: "all", label: "All Inquiries", count: counts.all },
          { id: "new", label: "New Leads", count: counts.new },
          { id: "contacted", label: "Contacted", count: counts.contacted },
          { id: "in_progress", label: "In Progress", count: counts.in_progress },
          { id: "archived", label: "Archived", count: counts.archived },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setStatusFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 whitespace-nowrap ${
              statusFilter === f.id
                ? "bg-white text-[#0e0d12] font-bold shadow-md"
                : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
            }`}
          >
            <span>{f.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                statusFilter === f.id
                  ? "bg-black/20 text-[#0e0d12]"
                  : "bg-white/[0.08] text-white/50"
              }`}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Inquiries List */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center rounded-2xl bg-[#17161d] border border-white/[0.08] p-8">
          <Inbox className="w-12 h-12 text-white/20 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1">No inquiries found</h3>
          <p className="text-xs text-white/50 max-w-sm mx-auto">
            {search
              ? "Try adjusting your search terms or filter."
              : "Inquiries submitted through the frontend contact form will show up here automatically."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((inq) => {
            const statusInfo = STATUS_CONFIG[inq.status] || STATUS_CONFIG.new;
            const isUnread = inq.status === "new";

            return (
              <div
                key={inq.id}
                onClick={() => handleOpenDetail(inq)}
                className={`p-5 rounded-2xl bg-[#17161d] border transition-all cursor-pointer hover:border-[#a89bfa]/50 hover:shadow-xl ${
                  isUnread
                    ? "border-[#7c6af2]/40 bg-gradient-to-r from-[#17161d] via-[#1f1d2e] to-[#17161d]"
                    : "border-white/[0.08]"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  {/* Sender Info */}
                  <div className="flex items-start space-x-3.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 ${
                        isUnread
                          ? "bg-gradient-to-br from-[#7c6af2] to-[#6b54ee] text-white shadow-lg shadow-[#7c6af2]/30"
                          : "bg-white/[0.08] text-white/70"
                      }`}
                    >
                      {inq.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)
                        .toUpperCase() || "IN"}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-white hover:text-[#a89bfa] transition-colors">
                          {inq.name}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase border ${statusInfo.bg} ${statusInfo.text} ${statusInfo.border}`}
                        >
                          {statusInfo.label}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-white/[0.04] text-[#a89bfa] border border-white/[0.06]">
                          {inq.discipline}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-white/50 mt-1 flex-wrap font-mono">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-white/40" />
                          <span className="text-white/70">{inq.email}</span>
                        </span>
                        {inq.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-white/40" />
                            <span>{inq.phone}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[11px] text-white/40">
                          <Clock className="w-3 h-3" />
                          <span>{formatDate(inq.createdAt)}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Status Quick Change */}
                  <div
                    className="flex items-center space-x-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/[0.06] justify-between lg:justify-end"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <select
                      value={inq.status}
                      onChange={(e) => {
                        updateInquiryStatus(inq.id, e.target.value as InquiryStatus);
                        showToast(`Status updated to ${e.target.value}`);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                    >
                      <option value="new">New Lead</option>
                      <option value="contacted">Contacted</option>
                      <option value="in_progress">In Progress</option>
                      <option value="archived">Archived</option>
                    </select>

                    <a
                      href={`mailto:${inq.email}?subject=${encodeURIComponent(
                        `Re: RFP Digital Productions Inquiry - ${inq.discipline}`
                      )}`}
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] text-[#a89bfa] hover:text-white transition-all"
                      title="Reply via Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleOpenDetail(inq)}
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] text-white transition-all"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleDelete(inq.id, inq.name)}
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/25 text-red-400 transition-all"
                      title="Delete Inquiry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Message Snippet */}
                <div className="mt-3 pl-13 pt-2 text-xs text-white/70 line-clamp-2 font-light leading-relaxed">
                  {inq.message}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ===== INQUIRY DETAIL MODAL ===== */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#17161d] border border-white/[0.15] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-6 pb-5 border-b border-white/[0.08]">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a89bfa]">
                  Inquiry Details
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase border ${
                    STATUS_CONFIG[selectedInquiry.status].bg
                  } ${STATUS_CONFIG[selectedInquiry.status].text} ${
                    STATUS_CONFIG[selectedInquiry.status].border
                  }`}
                >
                  {STATUS_CONFIG[selectedInquiry.status].label}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {selectedInquiry.name}
              </h2>
              <p className="text-xs text-white/50 font-mono mt-1">
                Submitted on {formatDate(selectedInquiry.createdAt)}
              </p>
            </div>

            {/* Contact quick strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-black/40 border border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="text-xs text-[#a89bfa] hover:underline font-mono truncate block"
                >
                  {selectedInquiry.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-0.5">
                  Phone
                </span>
                {selectedInquiry.phone ? (
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="text-xs text-white/80 hover:text-white font-mono block"
                  >
                    {selectedInquiry.phone}
                  </a>
                ) : (
                  <span className="text-xs text-white/40 font-mono">Not provided</span>
                )}
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-0.5">
                  Discipline / Service
                </span>
                <span className="text-xs text-white font-semibold block">
                  {selectedInquiry.discipline}
                </span>
              </div>
            </div>

            {/* Message Body */}
            <div className="mb-6 space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-white/60 block">
                Project Description & Message
              </label>
              <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] text-sm text-white/90 leading-relaxed font-light whitespace-pre-wrap">
                {selectedInquiry.message}
              </div>
            </div>

            {/* Internal Notes */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-white/60 block">
                  Internal Studio Notes
                </label>
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="text-[11px] font-mono text-[#a89bfa] hover:underline"
                >
                  Save Notes
                </button>
              </div>
              <textarea
                rows={3}
                placeholder="Log internal follow-ups, calls, quotes sent, or project status..."
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-base sm:text-xs text-white focus:outline-none focus:border-[#7c6af2]"
              />
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-white/60">Status:</span>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => {
                    const st = e.target.value as InquiryStatus;
                    updateInquiryStatus(selectedInquiry.id, st);
                    setSelectedInquiry({ ...selectedInquiry, status: st });
                    showToast(`Status updated to ${st}`);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#7c6af2]"
                >
                  <option value="new">New Lead</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => handleDelete(selectedInquiry.id, selectedInquiry.name)}
                  className="px-4 py-2 rounded-full bg-red-500/10 hover:bg-red-500/25 text-red-400 text-xs font-medium transition-all"
                >
                  Delete
                </button>

                <a
                  href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
                    `Re: RFP Digital Productions Inquiry - ${selectedInquiry.discipline}`
                  )}`}
                  className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#7c6af2] to-[#6b54ee] text-xs font-semibold text-white shadow-lg active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Draft Reply Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
