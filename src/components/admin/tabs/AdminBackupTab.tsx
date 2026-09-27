"use client";

import React, { useState } from "react";
import { useData } from "@/context/DataContext";
import { Download, Upload, RotateCcw, CheckCircle2 } from "lucide-react";

export const AdminBackupTab: React.FC = () => {
  const { exportDataJSON, importDataJSON, resetToDefaults } = useData();
  const [toast, setToast] = useState("");

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(""), 3000); };

  const handleExport = () => {
    const jsonStr = exportDataJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `rfp_cms_backup_${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Backup exported successfully!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target?.result as string;
      const res = importDataJSON(content);
      if (res.success) showToast("Data restored successfully!");
      else showToast(res.error || "Import failed");
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (confirm("Reset all data to factory defaults? Your custom items will be replaced.")) {
      resetToDefaults();
      showToast("Restored to factory defaults!");
    }
  };

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#17161d] border border-[#a89bfa] text-white text-sm shadow-2xl flex items-center space-x-2 animate-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-[#a89bfa]" /><span>{toast}</span>
        </div>
      )}

      {/* Export */}
      <div className="rounded-3xl bg-[#17161d] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2"><Download className="w-4 h-4 text-[#a89bfa]" /> Export Complete CMS Data</h3>
          <p className="text-xs text-white/50 max-w-md">Download a JSON backup of all gallery works, projects, and settings.</p>
        </div>
        <button onClick={handleExport} className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#7c6af2] hover:bg-[#6b54ee] text-xs font-semibold text-white transition-all whitespace-nowrap">
          <Download className="w-4 h-4" /><span>Export JSON</span>
        </button>
      </div>

      {/* Import */}
      <div className="rounded-3xl bg-[#17161d] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2"><Upload className="w-4 h-4 text-[#E6C665]" /> Restore from Backup</h3>
          <p className="text-xs text-white/50 max-w-md">Upload a previously saved .json file to restore all productions.</p>
        </div>
        <label className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-xs font-semibold text-white cursor-pointer transition-all whitespace-nowrap">
          <Upload className="w-4 h-4" /><span>Choose JSON File</span>
          <input type="file" accept=".json,application/json" onChange={handleImport} className="hidden" />
        </label>
      </div>

      {/* Reset */}
      <div className="rounded-3xl bg-red-950/20 border border-red-500/20 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-red-200 mb-1 flex items-center gap-2"><RotateCcw className="w-4 h-4 text-red-400" /> Reset to Factory Defaults</h3>
          <p className="text-xs text-red-200/50 max-w-md">Clears all custom data and restores the original demo showcase.</p>
        </div>
        <button onClick={handleReset} className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-red-600/80 hover:bg-red-600 text-xs font-semibold text-white transition-all whitespace-nowrap">
          <RotateCcw className="w-4 h-4" /><span>Reset All Data</span>
        </button>
      </div>
    </section>
  );
};
