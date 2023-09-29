"use client";
import { User } from "@/interfaces";
import { createContext } from "react";

interface AuthContextProps {
  user: User | null;
  startLoginWithGoolge: () => Promise<void>;
  startLoginWithGithub: () => Promise<void>;
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  loginUser: (email: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextProps);
