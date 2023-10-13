"use client";
import { useGif } from "@/hooks";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, LeftArrowIcon, LoaderIcon } from "..";
import { GIF, GifData } from "@/interfaces";
import Image from "next/image";

export const GifModal = () => {
  const {
    categoryGifs,
    gifModalStep,
    gifsByCategory,
    currentCategory,
    handleSearch,
    handleSearchByCategory,
    setGifModalStep,
  } = useGif();
  const [term, setTerm] = useState<string>("");
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [isObserving, setIsObserving] = useState<boolean>();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleSearchByCategory(currentCategory);
          observer.unobserve(bottomRef.current!);
          setIsObserving(false);
        }
      }, options);
    });
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
      
    };
  }, [isObserving]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-modal flex flex-col items-center">
      <div className="bg-black lg:w-[30vw] lg:h-[71vh] mt-20 rounded-2xl px-[2px] overflow-y-scroll">
        <form
          className="flex gap-5 px-5 py-2 z-10 fixed bg-black w-[30vw] rounded-t-2xl "
          onSubmit={(e) => handleSearch(e, term)}
        >
          {gifModalStep === 1 ? (
            <button className="rounded-full hover:bg-gray-500 hover:bg-opacity-20 px-3 transition-colors duration-300 ease-in-out">
              <CloseIcon />
            </button>
          ) : (
            <button
              className="rounded-full hover:bg-gray-500 hover:bg-opacity-20 px-3 transition-colors duration-300 ease-in-out"
              onClick={() => setGifModalStep(1)}
            >
              <LeftArrowIcon />
            </button>
          )}
          <input
            className="bg-transparent border-[1px] border-gray-500 rounded-full px-5 py-2 font-light focus:border-twitter focus:border-2 outline-none w-full text-gray-200 transition-all duration-100 ease-linear"
            placeholder="Search GIF"
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
        <section>
          {gifModalStep === 1 ? (
            <div className="grid grid-cols-4 gap-1 mt-10">
              {categoryGifs?.map((gif: GifData, index: number) => (
                <div
                  key={gif.gif?.id}
                  className={`${
                    index === categoryGifs.length - 1
                      ? "col-span-4"
                      : "col-span-2"
                  } relative cursor-pointer`}
                  onClick={() => handleSearchByCategory(gif.name)}
                >
                  <Image
                    src={gif?.gif?.images.downsized.url || ""}
                    loader={({ src }) => src}
                    alt={gif?.gif?.title}
                    width={20}
                    height={20}
                    className={`h-[17vh] w-full object-cover ${
                      index === categoryGifs.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                    priority
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 w-full  text-start px-2 py-1">
                    <span className="text-white font-semibold text-lg">
                      {gif.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4">
              {gifsByCategory?.map((gif: GIF, index: number) => (
                <div
                  key={gif?.id}
                  className={`col-span-${
                    Math.ceil(Math.random() * 15) / 4
                  } relative cursor-pointer`}
                >
                  <Image
                    src={gif?.images?.downsized?.url || ""}
                    loader={({ src }) => src}
                    alt={gif?.title}
                    width={20}
                    height={20}
                    className={`h-[16vh] w-full object-cover`}
                    unoptimized
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
        <div ref={bottomRef} className="flex justify-center w-full">
          <LoaderIcon />
        </div>
      </div>
    </div>
  );
};
