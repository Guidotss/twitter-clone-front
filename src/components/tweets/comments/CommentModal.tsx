"use client";
import { CloseIcon } from "@/components";
import { AuthContext, TweetsContext, UiContext } from "@/context";
import Image from "next/image";

import { useContext } from "react";
import { TweetData } from "../TweetData";
import Link from "next/link";
import { MediaOptions } from "../MediaOptions";
export const CommentModal = () => {
  const { isCommentModalOpen, closeCommentModal } = useContext(UiContext);
  const { currentTweet } = useContext(TweetsContext);
  const { user } = useContext(AuthContext);

  return (
    isCommentModalOpen && (
      <div className="fixed flex flex-col items-center  h-screen w-full bg-modal animate__animated animate__fadeIn animate__faster">
        <div className="flex flex-col w-[30vw] min-h-[35vh] gap-5 bg-black rounded-xl mt-10 p-4">
          <header className="flex items-center justify-between">
            <i
              className="w-9 hover:bg-gray-200 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full"
              onClick={closeCommentModal}
            >
              <CloseIcon />
            </i>
            <span className="text-sm text-twitter font-semibold cursor-pointer rounded-full hover:bg-twitter hover:bg-opacity-10 px-4 py-2 transition-colors duration-300 ease-in-out">
              Borradores
            </span>
          </header>
          <section className="flex flex-col justify-center">
            <div className="flex gap-2">
              <figure>
                <Image
                  src={`https://${currentTweet?.user.imageUrl}`}
                  alt="user profile picture"
                  width={50}
                  height={50}
                  className="rounded-full p-1"
                />
              </figure>
              <TweetData
                tweet={currentTweet?.tweet!}
                user={currentTweet?.user!}
              />
            </div>
            <article className="ml-[60px]">
              <p>{currentTweet?.tweet?.content}</p>
              <div className="flex">
                <span className="text-gray-500 text-[15px]">
                  Respondiendo a{" "}
                </span>
                <Link
                  href={`/profile/user_id`}
                  className="text-twitter ml-2 text-[15px] cursor-pointer"
                >
                  @{currentTweet?.user?.email.split("@")[0]}
                </Link>
              </div>
            </article>
            <div className="w-[2px] h-20 bg-gray-700 ml-6 -mt-10" />
          </section>
          <section className="flex flex-col justify-center ml-1">
            <div className="flex gap-2">
              <figure>
                <Image
                  src={`https://${user?.imageUrl}`}
                  alt="user profile picture"
                  width={50}
                  height={50}
                  className="rounded-full p-1"
                />
              </figure>
              <textarea
                className="w-full bg-transparent text-gray-300 text-xl outline-none resize-none mt-3"
                placeholder="Postea tu respuesta"
              />
            </div>
            <footer className="flex justify-between items-center mt-10">
              <MediaOptions/>
              <button className="bg-twitter px-5 py-2 rounded-full">Responder</button>
            </footer>
          </section>
        </div>
      </div>
    )
  );
};
