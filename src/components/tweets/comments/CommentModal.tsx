"use client";
import { useContext } from "react";
import { AuthContext, TweetsContext, UiContext } from "@/context";
import { CloseIcon } from "@/components";
import { CommentModalForm } from "./CommentModalForm";
import { CommentModalTweetData } from "./CommentModalTweetData";

export const CommentModal = () => {
  const { isCommentModalOpen, closeCommentModal } = useContext(UiContext);
  const { currentTweet } = useContext(TweetsContext);
  const { user } = useContext(AuthContext);

  return (
    isCommentModalOpen && (
      <div className="fixed flex flex-col items-center  h-screen w-full bg-modal animate__animated animate__fadeIn animate__faster">
        <div 
          className="flex flex-col w-[30vw] min-h-[35vh] gap-5 bg-black rounded-xl mt-10 p-4"
          about="Comment Modal"
        >
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
            <CommentModalTweetData currentTweet={currentTweet!} />
          </section>
          <section className="flex flex-col justify-center ml-1">
            <CommentModalForm user={user!} />
          </section>
        </div>
      </div>
    )
  );
};
