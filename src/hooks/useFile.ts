"use client";
import { useEffect, useState } from "react";
import { loadFile } from "@/utils";

export const useFile = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);

  useEffect(() => {
    if (image) {
      handleLoadFile(image);
    }
  }, [image]);

  const handleLoadFile = async (file: File) => {
    try {
      setIsLoadingImage(true);
      const response = await loadFile(file);
      setImageUrl(response.secure_url);
      setIsLoadingImage(false);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    image,
    isLoadingImage,
    imageUrl,
    
    setImage,
    setImageUrl,
  };
};
