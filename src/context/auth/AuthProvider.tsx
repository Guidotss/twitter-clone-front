"use client";
import { FC, useReducer } from "react";
import Cookies from "js-cookie";
import { AuthContext, authReducer } from ".";
import { signInWithGithub, signInWithGoogle } from "@/firebase";
import { User } from "@/interfaces";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthState {
  user: User | null;
}

export const AUTH_INITIAL_STATE: AuthState = {
  user: null,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    const user = {
      name,
      email,
      password,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.ok) {
        dispatch({
          type: "[AUTH] - login",
          payload: data.user,
        });
        Cookies.set("token", data.token);
        console.log(data);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const startLoginWithGoolge = async () => {
    try {
      const result = await signInWithGoogle();
      if (result.ok) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name: result.user?.name,
              email: result.user?.email,
            }),
          }
        );
        const data = await response.json();
        dispatch({
          type: "[AUTH] - login",
          payload: data.user,
        });
        Cookies.set("token", data.token);
      }
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      dispatch({
        type: "[AUTH] - logout",
      });
    }
  };

  const startLoginWithGithub = async () => {
    try {
      const result = await signInWithGithub();
      if (result.ok) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login/github`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name: result.user?.name,
              email: result.user?.email,
            }),
          }
        );
        const data = await response.json();
        dispatch({
          type: "[AUTH] - login",
          payload: data.user,
        });
        Cookies.set("token", data.token);
      }
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      dispatch({
        type: "[AUTH] - logout",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        startLoginWithGoolge,
        startLoginWithGithub,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
