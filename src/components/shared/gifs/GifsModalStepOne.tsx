import { GifData } from "@/interfaces";
import Image from "next/image";
import { type FC } from "react";


interface Props {
    categoryGifs: GifData[];
    handleSearchByCategory: (category: string) => void;
}
export const GifsModalStepOne:FC<Props> = ({ categoryGifs, handleSearchByCategory }) => {
  return (
    <div className="grid grid-cols-4 gap-1 2xl:mt-10">
      {categoryGifs?.map((gif: GifData, index: number) => (
        <div
          key={gif.gif?.id}
          className={`${
            index === categoryGifs.length - 1 ? "col-span-4" : "col-span-2"
          } relative cursor-pointer`}
          onClick={() => handleSearchByCategory(gif.name)}
        >
          <Image
            src={gif?.gif?.images.downsized.url || ""}
            loader={({ src }) => src}
            alt={gif?.gif?.title}
            width={20}
            height={20}
            className={`2xl:h-[17vh] lg:h-[20vh] w-full object-cover ${
              index === categoryGifs.length - 1 ? "rounded-b-2xl" : ""
            }`}
            priority
            unoptimized
          />
          <div className="absolute bottom-0 left-0 w-full  text-start px-2 py-1">
            <span className="text-white font-semibold text-lg">{gif.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
