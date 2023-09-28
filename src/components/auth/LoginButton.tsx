"use client";

import { useContext } from "react";
import { UiContext } from "@/context/ui";

export const LoginButton = () => {
  const { openLoginModal } = useContext(UiContext);

  const handleOpenLoginModal = () => {
    openLoginModal();
  };

  return (
    <button
      className="w-72 border-[1px] border-gray-700 px-10 py-1 rounded-full mt-4 hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out focus:outline-none"
      onClick={handleOpenLoginModal}
    >
      <span className="text-[14px] font-bold text-twitter">Iniciar sesión</span>
    </button>
  );
};
