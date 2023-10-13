import { GIF, GIFCategoryResponse } from "@/interfaces";

export const getCategoryGif = async () => {
  const url = `https://api.giphy.com/v1/gifs/categories?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}`;
  try {
    const response = await fetch(url);
    return (await response.json()) as GIFCategoryResponse;
  } catch (error) {
    console.log(error);
  }
};

export const getGifsByCategory = async (category: string, offset: number) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${category}&limit=25&offset=${offset}&rating=g&lang=en`;
  try {
    const response = await fetch(`${url}${category}`);
    return (await response.json()) as GIFCategoryResponse;
  } catch (error) {
    console.log(error);
  }
};
