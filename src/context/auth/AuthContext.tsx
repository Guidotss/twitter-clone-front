"use client"
import { createContext } from 'react';


interface AuthContextProps {
    user : any; 
    startLoginWithGoolge : () => Promise<void>
    startLoginWithGithub : () => Promise<void>
}


export const AuthContext = createContext({} as AuthContextProps);