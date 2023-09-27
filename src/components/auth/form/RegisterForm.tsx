"use client";
import { useState } from "react";
import { FormInput } from "./FormInput";

type RegisterForm = {
  name: string;
  email: string;
};

interface RegisterFormProps {
  currentStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const RegisterForm = ({ currentStep, setStep }: RegisterFormProps) => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
  });

  const [{ password, passwordConfirmation }, setPassword] = useState({
    password: "",
    passwordConfirmation: "",
  });

  return (
    <form className="flex flex-col gap-y-20">
      {currentStep === 1 ? (
        <>
          <FormInput
            field={form.name}
            name="name"
            placeholder="Nombre"
            setForm={setForm}
            errorMessage="¿Cómo te llamas?"
          />
          <FormInput
            field={form.email}
            name="email"
            placeholder="Correo electrónico"
            setForm={setForm}
            errorMessage="¿Cuál es tu correo electrónico?"
          />
          <button
            className={`bg-slate-200 text-black font-semibold text-lg rounded-full py-3 mt-28 ${
              form.name.length === 0 || form.email.length === 0
                ? "opacity-50"
                : "hover:opacity-90 transition-colors duration-300 ease-in-out"
            } focus:outline-none`}
            type="button"
            disabled={form.name.length === 0 || form.email.length === 0}
            onClick={() => setStep(2)}
          >
            Siguiente
          </button>
        </>
      ) : (
        <>
          <div>
            <input
              className={`bg-transparent border-[1px] border-gray-500 2xl:w-[430px] rounded-md px-5 py-4 text-gray-500 text-md font-light focus:outline-none focus:border-twitter transition-colors duration-300 ease-in-out
              ${password.length < 10 ? "border-gray-300" : "border-red-500"}
            }`}
              placeholder="Contraseña"
              name="password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              className={`bg-transparent border-[1px] border-gray-500 2xl:w-[430px] rounded-md px-5 py-4 text-gray-500 text-md font-light focus:outline-none focus:border-twitter transition-colors duration-300 ease-in-out
              ${password.length < 10 ? "border-gray-300" : "border-red-500"}
            }`}
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              type="password"
              value={passwordConfirmation}
              onChange={(e) =>
                setPassword((prev) => ({
                  ...prev,
                  passwordConfirmation: e.target.value,
                }))
              }
            />
            {password !== passwordConfirmation && (
              <span className="text-xs font-light text-red-500">
                Las contraseñas no coinciden
              </span>
            )}
          </div>
          <button
            className={`bg-twitter text-white font-semibold text-lg rounded-full py-3 mt-10 ${
              password.length === 0 || passwordConfirmation.length === 0
                ? "opacity-50"
                : "hover:opacity-90 transition-colors duration-300 ease-in-out"
            } focus:outline-none`}
            type="button"
            disabled={form.name.length === 0 || form.email.length === 0}
            onClick={() => setStep(1)}
          >
            Registrarse
          </button>
        </>
      )}
    </form>
  );
};
