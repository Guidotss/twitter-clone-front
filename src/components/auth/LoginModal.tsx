"use client";
import { useContext, useState } from "react";
import { UiContext } from "@/context/ui";
import { CloseIcon, TwitterIcon } from "..";
import { RegisterMethods } from "./RegisterMethods";
import { FormInput } from "./form/FormInput";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginModal = () => {
  const { closeLoginModal, openRegisterModal, isLoginModalOpen } =
    useContext(UiContext);
  const [{ email, password }, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleCloseModal = () => {
    closeLoginModal();
  };

  const handleOpenRegisterModal = () => {
    closeLoginModal();
    openRegisterModal();
  };

  return (
    isLoginModalOpen && (
      <div className="absolute h-full w-full flex flex-col items-center justify-center bg-transparent bg-opacity-40 bg-gray-400 animate__animated animate__fadeIn animate__faster z-10">
        <div className="bg-black 2xl:w-[30vw] 2xl:h-[75vh] lg:w-[40vw]  rounded-xl overflow-y-auto">
          <div className="flex items-center">
            <div className="ml-2 mt-2 w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-300 ease-in-out">
              <button
                className="mt-1 focus:outline-none"
                onClick={handleCloseModal}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex w-full items-center justify-center mt-2 mr-4">
              <figure>
                <TwitterIcon height="35px" />
              </figure>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <h3 className="text-3xl font-bold tracking-wide">
              Inicia sesión en X
            </h3>
            <div className="flex flex-col items-center">
              <RegisterMethods isInLoginModal />
              <form className="mt-5">
                <FormInput
                  field={email}
                  name="email"
                  setForm={setForm}
                  errorMessage="Correo no valido"
                  placeholder="Correo"
                  style="2xl:w-[300px]"
                />
                <FormInput
                  field={password}
                  name="password"
                  setForm={setForm}
                  errorMessage="Contraseña no valida"
                  placeholder="************"
                  style="2xl:w-[300px] mt-16"
                />
                <button className="rounded-full bg-slate-50 text-black font-bold text-md w-full mt-16 py-2 hover:bg-opacity-80 transition-colors duration-300 ease-in-out">
                  Iniciar sesión
                </button>
                <button className="rounded-full  text-white border-[1px] border-gray-700 font-bold text-md w-full mt-5 py-2 hover:bg-gray-700 hover:bg-opacity-30 transition-colors duration-300 ease-in-out">
                  ¿Olvidaste tu contraseña
                </button>
              </form>
              <div className="flex text-md font-light gap-2 mt-16">
                <span>¿No tienes una cuenta?</span>
                <button
                  className="text-twitter"
                  onClick={handleOpenRegisterModal}
                >
                  Registrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
