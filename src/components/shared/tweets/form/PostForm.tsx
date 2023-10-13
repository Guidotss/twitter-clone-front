"use client";
import { FormEvent, useContext, useState, useRef, useEffect } from "react";
import { AuthContext, TweetsContext } from "@/context";
import Image from "next/image";
import { MediaOptions } from "@/components/tweets/MediaOptions";
import { CloseIcon, LeftArrowIcon, LoaderIcon } from "../..";
import { useGif } from "@/hooks";
import { GIF, GifData } from "@/interfaces";
import { GifModal } from "../../gifs";



export const PostForm = () => {
  const [content, setContent] = useState<string>("");
  const { createTweet } = useContext(TweetsContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTweet(user?.id!, content);
    setContent("");
  };

  return (
    <>
      <div className="flex gap-5 items-center mt-4 h-24 px-5">
        <div className="flex items-center w-full">
          <figure className="-mt-6">
            {!user?.imageUrl ? (
              <div className="w-10 h-10 rounded-full animate-pulse bg-gray-500 bg-opacity-20" />
            ) : (
              <Image
                src={`https://${user?.imageUrl}`}
                alt="user profile picture"
                width={50}
                height={50}
                className="rounded-full p-1"
              />
            )}
          </figure>
          <textarea
            className="bg-transparent text-xl font-light focus:border-none focus:outline-none w-full px-3 resize-none text-gray-200"
            placeholder="¡¿Qué está pasando?!"
            value={content}
            name="content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-5 px-10">
        <MediaOptions />
        <button
          className={`bg-twitter ${
            !content && "opacity-60"
          } rounded-full px-12 h-10 w-10 flex items-center justify-center font-semibold`}
          onClick={handleSubmit}
          disabled={!content}
        >
          Postear
        </button>
      </div>
      <GifModal />
    </>
  );
};
