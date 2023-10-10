import { UiState } from ".";

type UiActionType =
  | { type: "[UI] open-register-modal" }
  | { type: "[UI] close-register-modal" }
  | { type: "[UI] open-login-modal" }
  | { type: "[UI] close-login-modal" }
  | { type: "[UI] open-logout-modal" }
  | { type: "[UI] close-logout-modal" }
  | { type: "[UI] open-comment-modal" }
  | { type: "[UI] close-comment-modal" };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] open-register-modal":
      return {
        ...state,
        isRegisterModalOpen: true,
      };
    case "[UI] close-register-modal":
      return {
        ...state,
        isRegisterModalOpen: false,
      };

    case "[UI] open-login-modal":
      return {
        ...state,
        isLoginModalOpen: true,
      };
    case "[UI] close-login-modal":
      return {
        ...state,
        isLoginModalOpen: false,
      };

    case "[UI] open-logout-modal":
      return {
        ...state,
        isLogoutModalOpen: true,
      };

    case "[UI] close-logout-modal":
      return {
        ...state,
        isLogoutModalOpen: false,
      };

    case "[UI] open-comment-modal":
      return {
        ...state,
        isCommentModalOpen: true,
      };

    case "[UI] close-comment-modal":
      return {
        ...state,
        isCommentModalOpen: false,
      };

    default:
      return state;
  }
};
