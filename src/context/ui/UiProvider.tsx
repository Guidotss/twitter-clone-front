"use client"
import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from '.'


interface UiProviderProps {
    children : React.ReactNode;
}

export interface UiState {
  isModalOpen: boolean;
}


const UI_INITIAL_STATE: UiState = {
    isModalOpen: false,
}

export const UiProvider: FC<UiProviderProps> = ({ children }) => { 
    const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openModal = () => dispatch({ type: '[UI] open-modal' });
    const closeModal = () => dispatch({ type: '[UI] close-modal' });

    return ( 
        <UiContext.Provider value={{
            ...state,

            openModal,
            closeModal,
        }} >
            {children}
        </UiContext.Provider>
    )
}