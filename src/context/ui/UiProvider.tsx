"use client";
import { FC, useReducer } from "react";
import { UiContext, uiReducer } from ".";

interface UiProviderProps {
  children: React.ReactNode;
}

export interface UiState {
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  isLogoutModalOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  isLogoutModalOpen: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openRegisterModal = () =>
    dispatch({ type: "[UI] open-register-modal" });
  const closeRegisterModal = () =>
    dispatch({ type: "[UI] close-register-modal" });

  const openLoginModal = () => dispatch({ type: "[UI] open-login-modal" });
  const closeLoginModal = () => dispatch({ type: "[UI] close-login-modal" });

  const openLogoutModal = () => dispatch({ type: "[UI] open-logout-modal" });
  const closeLogoutModal = () => dispatch({ type: "[UI] close-logout-modal" });

  return (
    <UiContext.Provider
      value={{
        ...state,

        openRegisterModal,
        closeRegisterModal,
        openLoginModal,
        closeLoginModal,
        openLogoutModal,
        closeLogoutModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
