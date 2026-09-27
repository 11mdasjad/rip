"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useData } from "@/context/DataContext";
import { AdminGalleryTab } from "./tabs/AdminGalleryTab";
import { AdminProjectsTab } from "./tabs/AdminProjectsTab";
import { AdminSettingsTab } from "./tabs/AdminSettingsTab";
import { AdminBackupTab } from "./tabs/AdminBackupTab";
import { AdminInquiriesTab } from "./tabs/AdminInquiriesTab";
import {
  ShieldCheck,
  LogOut,
  LayoutDashboard,
  ImageIcon,
  Film,
  Settings,
  Database,
  ExternalLink,
  Clock,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Inbox,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";

type AdminTab = "dashboard" | "inbox" | "gallery" | "projects" | "settings" | "backup";

const SIDEBAR_ITEMS: { id: AdminTab; label: string; icon: React.ReactNode; badgeKey?: "inbox" }[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: "inbox", label: "Inquiries", icon: <Inbox className="w-4 h-4" />, badgeKey: "inbox" },
  { id: "gallery", label: "Gallery CMS", icon: <ImageIcon className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <Film className="w-4 h-4" /> },
  { id: "settings", label: "Studio Profile", icon: <Settings className="w-4 h-4" /> },
  { id: "backup", label: "Data & Backup", icon: <Database className="w-4 h-4" /> },
];

export const AdminDashboard: React.FC = () => {
  const { session, logout } = useAdminAuth();
  const {
    galleryItems,
    projects,
    siteSettings,
    inquiries,
    unreadInquiriesCount,
  } = useData();

  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLogout = () => {
    if (confirm("Are you sure you want to sign out?")) {
      logout();
    }
  };

  const loginTime = session?.loginAt
    ? new Date(session.loginAt).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        month: "short",
        day: "numeric",
      })
    : "";

  const renderContent = () => {
    switch (activeTab) {
      case "inbox":
        return <AdminInquiriesTab />;
      case "gallery":
        return <AdminGalleryTab />;
      case "projects":
        return <AdminProjectsTab />;
      case "settings":
        return <AdminSettingsTab />;
      case "backup":
        return <AdminBackupTab />;
      default:
        return renderDashboardHome();
    }
  };

  const renderDashboardHome = () => {
    const galleryByCategory: Record<string, number> = {};
    galleryItems.forEach((g) => {
      galleryByCategory[g.category] = (galleryByCategory[g.category] || 0) + 1;
    });

    const recentInquiries = inquiries.slice(0, 3);

    return (
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#17161d] via-[#1a192a] to-[#17161d] border border-white/[0.08] p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-64 bg-[#7c6af2]/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-48 bg-[#D4AF37]/8 blur-[80px] pointer-events-none rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7c6af2]/20 border border-[#7c6af2]/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#a89bfa]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Welcome back, {session?.displayName || "Admin"}
                </h1>
                <p className="text-xs text-white/50 font-mono flex items-center gap-2 mt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>Last session started {loginTime}</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
              Manage client inquiries, your visual gallery, homepage showcase films, and studio configuration from this unified control center.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Inquiries Stat */}
          <button
            onClick={() => setActiveTab("inbox")}
            className="group rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 p-6 text-left transition-all hover:shadow-xl hover:shadow-[#7c6af2]/5 relative overflow-hidden"
          >
            {unreadInquiriesCount > 0 && (
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#7c6af2] text-white animate-pulse">
                {unreadInquiriesCount} New
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#7c6af2]/15 flex items-center justify-center">
                <Inbox className="w-5 h-5 text-[#a89bfa]" />
              </div>
              {unreadInquiriesCount === 0 && <TrendingUp className="w-4 h-4 text-emerald-400" />}
            </div>
            <div className="text-3xl font-extrabold text-white mb-1 font-mono">{inquiries.length}</div>
            <div className="text-xs text-white/50 font-medium">Client Inquiries</div>
          </button>

          {/* Gallery Works Stat */}
          <button
            onClick={() => setActiveTab("gallery")}
            className="group rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/40 p-6 text-left transition-all hover:shadow-xl hover:shadow-[#7c6af2]/5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#7c6af2]/15 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#a89bfa]" />
              </div>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-1 font-mono">{galleryItems.length}</div>
            <div className="text-xs text-white/50 font-medium">Visual Gallery Works</div>
          </button>

          {/* Homepage Projects Stat */}
          <button
            onClick={() => setActiveTab("projects")}
            className="group rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/40 p-6 text-left transition-all hover:shadow-xl hover:shadow-[#7c6af2]/5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E6C665]/15 flex items-center justify-center">
                <Film className="w-5 h-5 text-[#E6C665]" />
              </div>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-1 font-mono">{projects.length}</div>
            <div className="text-xs text-white/50 font-medium">Homepage Projects</div>
          </button>

          {/* Featured Works Stat */}
          <div className="rounded-2xl bg-[#17161d] border border-white/[0.08] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white mb-1 font-mono">
              {galleryItems.filter((g) => g.featured).length}
            </div>
            <div className="text-xs text-white/50 font-medium">Featured Works</div>
          </div>
        </div>

        {/* Latest Client Inquiries Section */}
        <div className="rounded-2xl bg-[#17161d] border border-white/[0.08] p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Inbox className="w-4 h-4 text-[#a89bfa]" />
              <h3 className="text-sm font-bold text-white">Recent Client Inquiries</h3>
              {unreadInquiriesCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#7c6af2]/20 text-[#a89bfa] border border-[#7c6af2]/30">
                  {unreadInquiriesCount} unread
                </span>
              )}
            </div>

            <button
              onClick={() => setActiveTab("inbox")}
              className="text-xs font-mono text-[#a89bfa] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View All Inquiries ({inquiries.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {recentInquiries.length === 0 ? (
            <p className="text-xs text-white/40 py-6 text-center">No inquiries received yet.</p>
          ) : (
            <div className="space-y-3">
              {recentInquiries.map((inq) => (
                <div
                  key={inq.id}
                  onClick={() => setActiveTab("inbox")}
                  className="p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#a89bfa]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#7c6af2]/20 border border-[#7c6af2]/30 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {inq.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white group-hover:text-[#a89bfa] transition-colors">
                          {inq.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#a89bfa] bg-[#7c6af2]/10 px-2 py-0.5 rounded">
                          {inq.discipline}
                        </span>
                        {inq.status === "new" && (
                          <span className="w-2 h-2 rounded-full bg-[#7c6af2]" />
                        )}
                      </div>
                      <p className="text-[11px] text-white/50 truncate max-w-md mt-0.5">
                        {inq.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-white/40 font-mono">
                    <span>{new Date(inq.createdAt).toLocaleDateString()}</span>
                    <span className="text-[#a89bfa] group-hover:translate-x-1 transition-transform">
                      Review →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category Breakdown */}
        <div className="rounded-2xl bg-[#17161d] border border-white/[0.08] p-6 sm:p-8">
          <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-[#a89bfa]" />
            <span>Gallery Breakdown by Category</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(galleryByCategory).map(([cat, count]) => (
              <div key={cat} className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.05]">
                <span className="text-xs text-white/80 font-medium">{cat}</span>
                <span className="text-xs font-mono font-bold text-[#a89bfa] bg-[#7c6af2]/10 px-2.5 py-0.5 rounded-full">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <button onClick={() => setActiveTab("inbox")} className="rounded-2xl bg-gradient-to-br from-[#7c6af2]/15 to-transparent border border-[#7c6af2]/20 p-6 text-left hover:border-[#7c6af2]/40 transition-all group">
            <Inbox className="w-6 h-6 text-[#a89bfa] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1">Client Inquiries</h4>
            <p className="text-xs text-white/50">Manage incoming project leads and customer messages</p>
          </button>
          <button onClick={() => setActiveTab("gallery")} className="rounded-2xl bg-gradient-to-br from-[#7c6af2]/15 to-transparent border border-[#7c6af2]/20 p-6 text-left hover:border-[#7c6af2]/40 transition-all group">
            <ImageIcon className="w-6 h-6 text-[#a89bfa] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1">Add Image Work</h4>
            <p className="text-xs text-white/50">Upload new high-resolution images to the visual gallery</p>
          </button>
          <button onClick={() => setActiveTab("settings")} className="rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] p-6 text-left hover:border-white/[0.15] transition-all group">
            <Settings className="w-6 h-6 text-white/70 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1">Studio Settings</h4>
            <p className="text-xs text-white/50">Update contact info, branding, and studio profile</p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#0a090d] text-[#f4f2f7]">
      {/* ======= SIDEBAR (Desktop) ======= */}
      <aside
        className={`hidden lg:flex flex-col fixed top-0 left-0 h-screen z-40 bg-[#0e0d12] border-r border-white/[0.06] transition-all duration-300 ${
          sidebarCollapsed ? "w-[72px]" : "w-[260px]"
        }`}
      >
        {/* Logo */}
        <div className={`flex items-center border-b border-white/[0.06] h-16 px-4 ${sidebarCollapsed ? "justify-center" : "justify-between"}`}>
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-2.5">
              <img src="/medien/logo/rfp-emblem.png" alt="RFP" className="h-7 w-auto" />
              <div className="flex flex-col">
                <span className="text-xs font-extrabold tracking-wider text-white font-mono flex items-center gap-1">
                  RFP CMS
                  <span className="text-[8px] px-1 py-0 rounded bg-[#7c6af2]/25 text-[#a89bfa] border border-[#7c6af2]/30 font-medium">
                    ADMIN
                  </span>
                </span>
                <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">Control Center</span>
              </div>
            </div>
          )}
          {sidebarCollapsed && (
            <img src="/medien/logo/rfp-emblem.png" alt="RFP" className="h-7 w-auto" />
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-lg hover:bg-white/[0.05] text-white/40 hover:text-white transition-colors"
          >
            {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 py-4 px-2.5 space-y-1 overflow-y-auto">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const badgeCount = item.badgeKey === "inbox" ? unreadInquiriesCount : 0;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                title={sidebarCollapsed ? item.label : undefined}
                className={`w-full flex items-center rounded-xl transition-all duration-150 ${
                  sidebarCollapsed ? "justify-center p-3 relative" : "px-3.5 py-2.5 space-x-3 justify-between"
                } ${
                  isActive
                    ? "bg-[#7c6af2]/15 text-white font-semibold shadow-sm border border-[#7c6af2]/30"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={isActive ? "text-[#a89bfa]" : "text-white/40 group-hover:text-white"}>
                    {item.icon}
                  </span>
                  {!sidebarCollapsed && <span className="text-xs">{item.label}</span>}
                </div>

                {!sidebarCollapsed && badgeCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#7c6af2] text-white">
                    {badgeCount}
                  </span>
                )}

                {sidebarCollapsed && badgeCount > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#7c6af2]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="border-t border-white/[0.06] p-3 space-y-2">
          <Link
            href="/"
            target="_blank"
            className={`flex items-center rounded-xl text-white/40 hover:text-white hover:bg-white/[0.04] transition-colors ${
              sidebarCollapsed ? "justify-center p-2.5" : "space-x-2.5 px-3 py-2"
            }`}
            title="View Live Site"
          >
            <ExternalLink className="w-4 h-4 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-xs font-medium">View Live Site</span>}
          </Link>

          <button
            onClick={handleLogout}
            className={`w-full flex items-center rounded-xl text-red-400/70 hover:text-red-300 hover:bg-red-500/10 transition-colors ${
              sidebarCollapsed ? "justify-center p-2.5" : "space-x-2.5 px-3 py-2"
            }`}
            title="Sign Out"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-xs font-medium">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* ======= MAIN CONTENT AREA ======= */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"
        }`}
      >
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 h-16 bg-[#0e0d12]/80 backdrop-blur-xl border-b border-white/[0.06] px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/[0.05] text-white/60 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                Studio CMS
              </span>
              <h2 className="text-sm font-bold text-white capitalize">
                {activeTab === "inbox" ? "Client Inquiries" : activeTab}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live</span>
            </div>

            <div className="hidden md:block text-white/40 font-mono text-[11px]">
              {session?.email}
            </div>

            <button
              onClick={handleLogout}
              className="lg:hidden p-2 rounded-lg text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* ======= MOBILE SIDEBAR OVERLAY ======= */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileNavOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-[280px] bg-[#0e0d12] border-r border-white/[0.08] flex flex-col animate-in slide-in-from-left duration-200 shadow-2xl">
            <div className="flex items-center justify-between h-16 px-4 border-b border-white/[0.06]">
              <div className="flex items-center space-x-2.5">
                <img src="/medien/logo/rfp-emblem.png" alt="RFP" className="h-7 w-auto" />
                <span className="text-xs font-extrabold tracking-wider text-white font-mono">RFP CMS</span>
              </div>
              <button onClick={() => setMobileNavOpen(false)} className="p-2 rounded-lg text-white/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 px-2.5 space-y-1">
              {SIDEBAR_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                const badgeCount = item.badgeKey === "inbox" ? unreadInquiriesCount : 0;

                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setMobileNavOpen(false); }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-[#7c6af2]/15 text-white border border-[#7c6af2]/30"
                        : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={isActive ? "text-[#a89bfa]" : ""}>{item.icon}</span>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>

                    {badgeCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#7c6af2] text-white">
                        {badgeCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="border-t border-white/[0.06] p-3 space-y-2">
              <Link href="/" target="_blank" className="flex items-center space-x-2.5 px-3.5 py-2 rounded-xl text-white/40 hover:text-white hover:bg-white/[0.04]">
                <ExternalLink className="w-4 h-4" />
                <span className="text-xs font-medium">View Live Site</span>
              </Link>
              <button onClick={handleLogout} className="w-full flex items-center space-x-2.5 px-3.5 py-2 rounded-xl text-red-400/70 hover:text-red-300 hover:bg-red-500/10">
                <LogOut className="w-4 h-4" />
                <span className="text-xs font-medium">Sign Out</span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
