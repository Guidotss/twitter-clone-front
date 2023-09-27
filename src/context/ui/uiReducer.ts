import { UiState } from ".";

type UiActionType = { type: "[UI] open-modal" } | { type: "[UI] close-modal" };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] open-modal":
      return {
        ...state,
        isModalOpen: true,
      };
    case "[UI] close-modal":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
