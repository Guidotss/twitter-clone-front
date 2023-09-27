"use client"
import { FC,useReducer  } from 'react';
import { AuthContext, authReducer } from '.'
import { signInWithGithub, signInWithGoogle } from '@/firebase';



interface AuthProviderProps { 
    children : React.ReactNode; 
}


export interface AuthState {
    user : any; 
}

export const AUTH_INITIAL_STATE : AuthState = {
    user : null
}


export const AuthProvider : FC<AuthProviderProps> = ({ children }) => { 

    const [ state, dispatch ] = useReducer(authReducer, AUTH_INITIAL_STATE); 

    const startLoginWithGoolge = async () => {
        try{ 
            let user; 
            const result = await signInWithGoogle(); 
        }catch(error){ 
            console.log(error); 
        }
    }

    const startLoginWithGithub = async () => {
        try{ 
            let user; 
            const result = await signInWithGithub(); 
        }catch(error){ 
            console.log(error); 
        }
    }

    return (
        <AuthContext.Provider value={{ 
            ...state,

            startLoginWithGoolge,
            startLoginWithGithub,
        }}> 
            { children }
        </AuthContext.Provider>
    )
}