"use client";

import { AuthProvider } from "@/context/auth";
import { UiProvider } from "@/context/ui";

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
