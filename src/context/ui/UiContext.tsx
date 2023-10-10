"use client";
import { createContext } from "react";

interface UiContext {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isLogoutModalOpen: boolean;
  isCommentModalOpen: boolean;

  openRegisterModal: () => void;
  closeRegisterModal: () => void;

  openLoginModal: () => void;
  closeLoginModal: () => void;

  openLogoutModal: () => void;
  closeLogoutModal: () => void;

  openCommentModal: () => void;
  closeCommentModal: () => void;
}

export const UiContext = createContext({} as UiContext);
