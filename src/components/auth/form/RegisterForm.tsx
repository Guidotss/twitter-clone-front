"use client";
import { useContext, useState } from "react";
import { FormInput } from "./FormInput";
import { AuthContext } from "@/context/auth";
import { useRouter } from 'next/navigation'; 

type RegisterForm = {
  name: string;
  email: string;
};

interface RegisterFormProps {
  currentStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const RegisterForm = ({ currentStep, setStep }: RegisterFormProps) => {
  const router = useRouter(); 
  const { registerUser } = useContext(AuthContext);
  const [{ name, email }, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
  });

  const [{ password, passwordConfirmation }, setPassword] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const handleNextStep = () => {
    if (!email.includes("@")) return;

    setStep(2);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) return;
    const ok = await registerUser(name, email, password);
    if(ok) { 
      router.push('/');
    }
  };

  return (
    <form className="flex flex-col 2xl:gap-y-20 lg:gap-y-10">
      {currentStep === 1 ? (
        <>
          <FormInput
            field={name}
            type="text"
            name="name"
            placeholder="Nombre"
            setForm={setForm}
            errorMessage="¿Cómo te llamas?"
            style="lg:w-[380px]"
          />
          <FormInput
            field={email}
            type="email"
            name="email"
            placeholder="Correo electrónico"
            setForm={setForm}
            errorMessage="¿Cuál es tu correo electrónico?"
            style="lg:w-[380px]"
          />
          <button
            className={`bg-slate-200 text-black font-semibold text-lg rounded-full py-3  ${
              name.length === 0 || email.length === 0
                ? "opacity-50"
                : "hover:opacity-90 transition-colors duration-300 ease-in-out"
            } focus:outline-none`}
            type="button"
            disabled={name.length === 0 || email.length === 0}
            onClick={handleNextStep}
          >
            Siguiente
          </button>
        </>
      ) : (
        <>
          <div>
            <input
              className={`bg-transparent border-[1px] border-gray-500 2xl:w-[430px] lg:w-[380px] rounded-md px-5 py-4 text-gray-500 text-md font-light focus:outline-none focus:border-twitter transition-colors duration-300 ease-in-out
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
              className={`bg-transparent border-[1px] border-gray-500 2xl:w-[430px] lg:w-[380px] rounded-md px-5 py-4 text-gray-500 text-md font-light focus:outline-none focus:border-twitter transition-colors duration-300 ease-in-out
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
            className={`bg-twitter text-white font-semibold text-lg rounded-full py-3 2xl:mt-10 ${
              password.length === 0 ||
              passwordConfirmation.length === 0 ||
              password !== passwordConfirmation
                ? "opacity-50"
                : "hover:opacity-90 transition-colors duration-300 ease-in-out"
            } focus:outline-none`}
            type="button"
            disabled={
              password.length === 0 ||
              passwordConfirmation.length === 0 ||
              password !== passwordConfirmation
            }
            onClick={handleRegister}
          >
            Registrarse
          </button>
        </>
      )}
    </form>
  );
};
