"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// Admin credentials — in production, replace with API-based auth
const ADMIN_EMAIL = "admin@rfpdigital.com";
const ADMIN_PASSWORD = "rfp2024studio";

const SESSION_KEY = "rfp_admin_session_v1";
const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours

interface AdminSession {
  email: string;
  displayName: string;
  loginAt: number;
  expiresAt: number;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  session: AdminSession | null;
  isLoading: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  session: null,
  isLoading: true,
  login: () => ({ success: false }),
  logout: () => {},
});

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      if (stored) {
        const parsed: AdminSession = JSON.parse(stored);
        if (parsed.expiresAt > Date.now()) {
          setSession(parsed);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(
    (email: string, password: string): { success: boolean; error?: string } => {
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPass = password.trim();

      if (!trimmedEmail || !trimmedPass) {
        return { success: false, error: "Please fill in both email and password." };
      }

      if (trimmedEmail !== ADMIN_EMAIL || trimmedPass !== ADMIN_PASSWORD) {
        return { success: false, error: "Invalid credentials. Access denied." };
      }

      const now = Date.now();
      const newSession: AdminSession = {
        email: trimmedEmail,
        displayName: "Studio Admin",
        loginAt: now,
        expiresAt: now + SESSION_DURATION,
      };

      setSession(newSession);
      localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
      return { success: true };
    },
    []
  );

  const logout = useCallback(() => {
    setSession(null);
    localStorage.removeItem(SESSION_KEY);
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated: !!session,
        session,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
