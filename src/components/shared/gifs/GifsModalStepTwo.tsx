import { GIF } from "@/interfaces";
import Image from "next/image";
import { type FC } from "react";
import { LoaderIcon } from "..";

interface Props {
  gifsByCategory: GIF[];
  bottomRef: React.MutableRefObject<HTMLDivElement | null>;
  setGifUrl: React.Dispatch<React.SetStateAction<string>>;
}
export const GifsModalStepTwo: FC<Props> = ({ gifsByCategory, bottomRef, setGifUrl }) => {
  return (
    <div className="grid grid-cols-4">
      {gifsByCategory?.map((gif: GIF, index: number) => (
        <div
          key={gif?.id}
          className={`col-span-${
            Math.ceil(Math.random() * 15) / 4
          } relative cursor-pointer`}
          onClick={() => setGifUrl(gif?.images?.downsized?.url || "")}
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
      <div ref={bottomRef} className="flex justify-center w-full">
        <LoaderIcon />
      </div>
    </div>
  );
};
