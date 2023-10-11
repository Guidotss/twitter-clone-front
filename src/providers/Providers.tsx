"use client";
import { AuthProvider, TweetsProvider, UiProvider } from "@/context";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (

    <UiProvider>
      <AuthProvider>
        <TweetsProvider>{children}</TweetsProvider>
      </AuthProvider>
    </UiProvider>

  );
};
