"use client";

import { AuthProvider, UiProvider } from "@/context";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <UiProvider>
      <AuthProvider>{children}</AuthProvider>
    </UiProvider>
  );
};
