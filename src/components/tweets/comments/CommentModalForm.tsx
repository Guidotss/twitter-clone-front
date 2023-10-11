"use client";
import { User } from "@/interfaces";
import Image from "next/image";
import { MediaOptions } from "../MediaOptions";
import { useContext, useState } from "react";
import { TweetsContext, UiContext } from "@/context";

export const CommentModalForm = ({ user }: { user: User }) => {
  const [content, setContent] = useState<string>("");
  const { currentTweet, createComment } = useContext(TweetsContext);
  const { closeCommentModal } = useContext(UiContext);
  
  const handleSubmit = () => {
    createComment(currentTweet?.tweet?.id!, user.id!, content);
    setContent("");
    closeCommentModal();
  };

  return (
    <>
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <footer className="flex justify-between items-center mt-10">
        <MediaOptions />
        <button
          className={`bg-twitter px-5 py-2 rounded-full focus:outline-none hover:bg-opacity-90 transition duration-300 ease-in-out ${
            content.length == 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }}`}
          onClick={handleSubmit}
          disabled={content.length === 0}
        >
          Responder
        </button>
      </footer>
    </>
  );
};
