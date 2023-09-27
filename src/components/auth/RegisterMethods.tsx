"use client";
import { use, useContext } from "react";
import { GitHubIcon, GoogleIcon } from "..";
import { AuthContext } from "@/context/auth";

export const RegisterMethods = () => {
    
    const { startLoginWithGoolge, startLoginWithGithub } = useContext(AuthContext);

    const handleLoginWithGoogle = async () => {
        await startLoginWithGoolge(); 
    }
    const handleLoginWithGithub = async () => {
        await startLoginWithGithub(); 
    }

  return (
    <>
      <ul className="flex flex-col gap-y-4 mt-10">
        <li>
          <button className="bg-white px-12 py-[6px] rounded-full flex gap-x-4 items-center focus:outline-none" onClick={handleLoginWithGoogle}>
            <figure>
              <GoogleIcon />
            </figure>
            <span className="text-gray-600 font-semibold text-sm">
              Registrarse con google
            </span>
          </button>
        </li>
        <li>
          <button className="bg-white px-12 py-[6px] rounded-full flex gap-x-4 items-center focus:outline-none" onClick={handleLoginWithGithub}>
            <figure>
              <GitHubIcon />
            </figure>
            <span className="text-gray-600 font-semibold text-sm">
              Registrarse con github
            </span>
          </button>
        </li>
      </ul>
      <div className="flex items-center gap-x-2 mt-3">
        <div className="h-[.5px] w-32 bg-gray-500" />
        <span className="2xl:-mt-1">o</span>
        <div className="h-[.5px] w-32 bg-gray-500" />
      </div>
      <button className="bg-twitter 2xl:w-72 rounded-full py-2 mt-2 hover:bg-opacity-95 transition-colors duration-300 ease-in-out focus:outline-none">
        <span className=" text-[14px] font-bold">Crear Cuenta</span>
      </button>
    </>
  );
};
