"use client"
import { GifIcon, ImageIcon } from "../..";

export const PostForm = () => {
  return (
    <>
      <div className="flex gap-5 items-center mt-4 h-24 px-5">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full self-start" />
          <textarea
            className="bg-transparent text-xl font-light focus:border-none focus:outline-none w-full px-3 resize-none text-gray-200 "
            placeholder="¡¿Qué está pasando?!"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-5 px-10">
        <div className="flex gap-2">
          <i className="flex hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
            <ImageIcon width="22px" height="22px" />
          </i>
          <i className="flex hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
            <GifIcon width="22px" height="22px" />
          </i>
        </div>
        <button className="bg-twitter rounded-full px-12 h-10 w-10 flex items-center justify-center font-semibold">
          Postear
        </button>
      </div>
    </>
  );
};