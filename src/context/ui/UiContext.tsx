"use client";
import { createContext } from "react";

interface UiContext {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export const UiContext = createContext({} as UiContext);
