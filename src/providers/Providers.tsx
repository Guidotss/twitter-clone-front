"use client";

import { AuthProvider } from "@/context/auth";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
