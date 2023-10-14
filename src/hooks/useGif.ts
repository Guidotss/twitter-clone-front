import { useState, useEffect, useRef } from "react";
import { GIF, GifData } from "@/interfaces";
import { getCategoryGif, getGifsByCategory } from "@/utils";

export const useGif = () => {
  const [categoryGifs, setCategoryGifs] = useState<GifData[]>();
  const [gifsByCategory, setGifsByCategory] = useState<GIF[]>();
  const [gifModalStep, setGifModalStep] = useState<number>(1);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [isObserving, setIsObserving] = useState<boolean>();
  const bottomRef = useRef<null | HTMLDivElement>(null);


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
        }
      }, options);
    });
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  });

  useEffect(() => {
    getGifs();
  }, []);

  useEffect(() => {
    if (gifModalStep === 1) {
      setGifsByCategory([]);
      setOffset(0);
    }
  }, [gifModalStep]);

  const getGifs = async () => {
    const gifsResponse = await getCategoryGif();
    const gifs = gifsResponse?.data.splice(0, 7);
    setCategoryGifs(gifs);
  };

  const handleSearch = (e: React.FormEvent, term: string) => {
    e.preventDefault();
    console.log(term);
  };

  const handleSearchByCategory = async (category: string) => {
    const gifsResponse = await getGifsByCategory(category, offset);
    const gifs = gifsResponse?.data as unknown as GIF[];
    setGifModalStep(2);
    setCurrentCategory(category);
    setOffset(offset + 25);
    setGifsByCategory(gifsByCategory ? [...gifsByCategory, ...gifs] : gifs);
  };

  return {
    categoryGifs,
    gifModalStep,
    gifsByCategory,
    currentCategory,
    isObserving,
    bottomRef,

    handleSearch,
    handleSearchByCategory,
    setGifModalStep,
    setIsObserving,
  };
};
