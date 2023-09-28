"use client";
import { useContext, useState } from "react";
import { UiContext } from "@/context/ui";
import { RegisterForm } from "./form/RegisterForm";
import { CloseIcon, LeftArrowIcon } from "..";
import "animate.css";

export const RegisterModal = () => {
  const [formStep, setFormStep] = useState<number>(1);
  const { isModalOpen, closeModal } = useContext(UiContext);

  const handleCloseModal = () => {
    closeModal();
    setFormStep(1);
  };
  return (
    isModalOpen && (
      <div className="absolute h-full w-full flex flex-col items-center justify-center bg-transparent bg-opacity-40 bg-gray-600 animate__animated animate__fadeIn animate__faster z-10">
        <div className="bg-black w-[30vw] h-[60vh] rounded-xl">
          <div className="flex items-center">
            <div className="ml-2 mt-2 w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-300 ease-in-out">
              <div>
                {formStep === 1 ? (
                  <button className="mt-1 focus:outline-none" onClick={handleCloseModal}>
                    <CloseIcon />
                  </button>
                ) : (
                  <button className="mt-1" onClick={() => setFormStep(1)}>
                    <LeftArrowIcon />
                  </button>
                )}
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold">Paso {formStep} de 2</h3>
          </div>
          <div className="px-20 flex flex-col gap-10">
            <h3 className="text-3xl font-semibold mt-10">Crea tu cuenta</h3>
            <RegisterForm currentStep={formStep} setStep={setFormStep} />
          </div>
        </div>
      </div>
    )
  );
};
