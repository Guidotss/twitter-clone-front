"use client";
import { useContext, useState, useEffect } from "react";
import { UiContext } from "@/context";
import { useGif } from "@/hooks";
import { GifsModalStepOne } from "./GifsModalStepOne";
import { GifsModalStepTwo } from "./GifsModalStepTwo";
import { GifsModalForm } from "./GifsModalForm";


interface Props  {
  setGifUrl: React.Dispatch<React.SetStateAction<string>>;
}
export const GifModal = ({ setGifUrl } : Props) => {
  const {
    categoryGifs,
    gifModalStep,
    gifsByCategory,
    bottomRef,
    handleSearch,
    handleSearchByCategory,
    setGifModalStep,
  } = useGif();
  const [term, setTerm] = useState<string>("");
  const { closeGifsModal, isGifsModalOpen } = useContext(UiContext);

  const handleGifsModal = () => {
    closeGifsModal();
  };

  useEffect(() => {
    if (!isGifsModalOpen) return;
    
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isGifsModalOpen]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-modal flex flex-col items-center animate__animated animate__fadeIn animate__faster">
      <div className="bg-black 2xl:w-[30vw] 2xl:h-[71vh] lg:w-[40vw] lg:h-[90vh] 2xl:mt-20 rounded-2xl px-[2px] overflow-y-scroll">
        <GifsModalForm
          handleGifsModal={handleGifsModal}
          handleSearch={handleSearch}
          setGifModalStep={setGifModalStep}
          gifModalStep={gifModalStep}
          term={term}
          setTerm={setTerm}
        />
        <section className="lg:mt-14">
          {gifModalStep === 1 ? (
            <GifsModalStepOne
              categoryGifs={categoryGifs!}
              handleSearchByCategory={handleSearchByCategory}
            />
          ) : (
            <GifsModalStepTwo
              gifsByCategory={gifsByCategory!}
              bottomRef={bottomRef}
              setGifUrl={setGifUrl}
              closeGifModal={closeGifsModal}
            />
          )}
        </section>
      </div>
    </div>
  );
};
