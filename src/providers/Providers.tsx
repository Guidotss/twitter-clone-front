"use client";
import { AuthProvider, TweetsProvider, UiContext, UiProvider } from "@/context";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <UiProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthProvider>
        <TweetsProvider>{children}</TweetsProvider>
      </AuthProvider>
    </UiProvider>
  );
};
