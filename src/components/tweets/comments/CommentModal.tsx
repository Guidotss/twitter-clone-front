"use client"
import { CloseIcon } from "@/components";
import { UiContext } from "@/context";
import { Space_Grotesk } from "next/font/google";
import { useContext } from "react";
export const CommentModal = () => {
  const { isCommentModalOpen } = useContext(UiContext);

  return (
    isCommentModalOpen && (
      <div className="fixed flex flex-col items-center  h-screen w-full bg-modal">
        <div className="flex flex-col w-[30vw] h-[50vh] bg-black rounded-xl mt-10 p-4">
          <div className="flex items-center justify-between">
            <i className="w-9 hover:bg-gray-200 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
              <CloseIcon/>
            </i>
            <span className="text-sm text-twitter font-semibold cursor-pointer rounded-full hover:bg-twitter hover:bg-opacity-10 px-4 py-2 transition-colors duration-300 ease-in-out">Borradores</span>
          </div>
        </div>
      </div>
    )
  );
};
