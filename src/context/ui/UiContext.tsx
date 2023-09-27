"use client";
import { createContext } from "react";

interface UiContext {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const UiContext = createContext({} as UiContext);
