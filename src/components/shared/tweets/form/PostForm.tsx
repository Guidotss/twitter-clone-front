"use client";
import { FormEvent, useContext, useState } from "react";
import Image from "next/image";
import { AuthContext, TweetsContext, UiContext } from "@/context";
import { MediaOptions } from "@/components/tweets/MediaOptions";
import { GifModal } from "@/components/shared/gifs";
import { useFile } from "@/hooks/useFile";
import { MediaUpload } from "@/components/shared/media";

export const PostForm = () => {
  const [content, setContent] = useState<string>("");
  const [gifUrl, setGifUrl] = useState<string>("");
  const { imageUrl, isLoadingImage, setImage, setImageUrl } = useFile();

  const { createTweet } = useContext(TweetsContext);
  const { user } = useContext(AuthContext);
  const { isGifsModalOpen, openGifsModal } = useContext(UiContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTweet(user?.id!, content, gifUrl,imageUrl);
    setContent("");
    setGifUrl("");
    setImageUrl("");
  };

  const handleGifsModal = () => {
    openGifsModal();
  };

  return (
    <>
      <div className="flex gap-5 items-center mt-4 h-24 px-5">
        <div className="flex items-center w-full 2xl:mt-5">
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
      <MediaUpload
        gifUrl={gifUrl}
        imageUrl={imageUrl}
        isLoadingImage={isLoadingImage}
      />
      <div className="flex justify-between items-center mb-5 px-10">
        <MediaOptions openGifsModal={handleGifsModal} uploadImage={setImage} />
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
      {isGifsModalOpen && <GifModal setGifUrl={setGifUrl} />}
    </>
  );
};
