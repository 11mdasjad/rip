"use client";

import React, { useState } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ShieldCheck, Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";

export default function AdminPage() {
  const { isAuthenticated, isLoading, login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Simulate a brief auth delay for realism
    setTimeout(() => {
      const result = login(email, password);
      if (!result.success) {
        setError(result.error || "Authentication failed.");
      }
      setIsSubmitting(false);
    }, 600);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a090d] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#7c6af2]/30 border-t-[#7c6af2] animate-spin" />
          <span className="text-xs font-mono text-white/50 tracking-widest uppercase">Verifying session…</span>
        </div>
      </div>
    );
  }

  // Already authenticated — render dashboard
  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  // Login Screen
  return (
    <div className="min-h-screen bg-[#0a090d] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-gradient-to-br from-[#7c6af2]/12 via-[#a89bfa]/8 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] bg-gradient-to-tl from-[#D4AF37]/8 via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <img
              src="/medien/logo/rfp-emblem.png"
              alt="RFP Emblem"
              className="h-20 w-auto object-contain filter drop-shadow-[0_2px_20px_rgba(212,175,55,0.6)]"
            />
          </div>
          <div className="flex items-center justify-center gap-2 leading-none mb-1">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-[0.16em] text-white font-mono">
              RFP
            </span>
            <span className="text-[10px] font-sans font-bold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase shadow-sm">
              MEDIA &amp; FILMS
            </span>
          </div>
          <span className="text-xs tracking-[0.28em] text-[#D4AF37] font-mono uppercase font-bold block mb-4">
            Digital Productions
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-2">
            Studio Control Center
          </h1>
          <p className="text-sm text-white/50 font-light">
            Sign in to access the RFP CMS admin panel
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl bg-[#12111a] border border-white/[0.08] p-8 shadow-2xl shadow-black/40 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#7c6af2]/50 to-transparent rounded-full" />

          <form onSubmit={handleLogin} className="space-y-5 pt-2">
            {/* Error Alert */}
            {error && (
              <div className="flex items-start space-x-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs animate-in slide-in-from-top-2 duration-200">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="admin-email" className="block text-xs font-mono uppercase tracking-widest text-white/60">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="email"
                  autoFocus
                  placeholder="admin@rfpdigital.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af2] focus:ring-1 focus:ring-[#7c6af2]/50 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="admin-password" className="block text-xs font-mono uppercase tracking-widest text-white/60">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your admin password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="w-full pl-11 pr-12 py-3 rounded-xl bg-black/50 border border-white/[0.1] text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af2] focus:ring-1 focus:ring-[#7c6af2]/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wider uppercase flex items-center justify-center space-x-2.5 transition-all duration-200 shadow-lg ${
                isSubmitting
                  ? "bg-[#7c6af2]/50 text-white/60 cursor-wait"
                  : "bg-gradient-to-r from-[#7c6af2] to-[#6b54ee] hover:from-[#6b54ee] hover:to-[#5a43db] text-white hover:shadow-[#7c6af2]/30 active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Authenticating…</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sign In to Dashboard</span>
                </>
              )}
            </button>
          </form>

          {/* Security Footer */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-center space-x-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <Lock className="w-3 h-3" />
            <span>256-bit encrypted session · auto-expires 8h</span>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-6">
          <a href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors font-mono">
            ← Return to RFP Digital Productions
          </a>
        </div>
      </div>
    </div>
  );
}
