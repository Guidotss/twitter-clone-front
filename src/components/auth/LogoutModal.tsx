"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext, UiContext } from "@/context";


export const LogoutModal = () => {
  const { user, logout } = useContext(AuthContext);
  const { isLogoutModalOpen, closeLogoutModal } = useContext(UiContext);
  const router = useRouter();

  const handleLogout = () => {
    closeLogoutModal();
    logout();
    router.push("/auth");
  };

  

  

  return (
    isLogoutModalOpen && (
      <div className="z-10 flex flex-col justify-center shadow-[2px_2px_10px] rounded-lg border-gray-800 shadow-gray-400 w-80 h-24">
        <span className="px-5 py-2 font-semibold text-sm text-gray-200 cursor-pointer hover:bg-gray-600 hover:bg-opacity-20 transition-colors duration-300 ease-in-out">
          Agregar una cuenta existente
        </span>
        <span 
            className="px-5 py-2 font-semibold text-sm text-gray-200 cursor-pointer hover:bg-gray-600 hover:bg-opacity-20 transition-colors duration-300 ease-in-out"
            onClick={handleLogout}
        >
          Cerrar sesión de @{user?.email.split("@")[0]}
        </span>
      </div>
    )
  );
};
