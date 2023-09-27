"use client"
import { User } from '@/interfaces';
import { createContext } from 'react';


interface AuthContextProps {
    user : User | null; 
    startLoginWithGoolge : () => Promise<void>
    startLoginWithGithub : () => Promise<void>
}


export const AuthContext = createContext({} as AuthContextProps);