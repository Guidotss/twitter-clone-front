"use client";
import { createContext } from "react";

interface UiContext {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isLogoutModalOpen: boolean;
  isCommentModalOpen: boolean;
  isGifsModalOpen: boolean;

  openRegisterModal: () => void;
  closeRegisterModal: () => void;

  openLoginModal: () => void;
  closeLoginModal: () => void;

  openLogoutModal: () => void;
  closeLogoutModal: () => void;

  openCommentModal: () => void;
  closeCommentModal: () => void;

  openGifsModal: () => void;
  closeGifsModal: () => void;

}

export const UiContext = createContext({} as UiContext);
