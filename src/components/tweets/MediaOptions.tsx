import { GifIcon, ImageIcon } from "..";

export const MediaOptions = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <i className="flex hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
        <ImageIcon width="22px" height="22px" />
      </i>
      <i className="flex hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
        <GifIcon width="22px" height="22px" />
      </i>
    </div>
  );
};
