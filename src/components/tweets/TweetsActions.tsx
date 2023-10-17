import { Tweet } from "@/interfaces";
import { CommentIcon, LikeIcon, RePostIcon } from "..";
import { FC } from "react";

interface Props {
  isRetweeted?: boolean;
  isLiked?: boolean;
  tweet: Tweet;
  onSetCurrentTweet: () => void;
  handleLike: () => void;
  handleRetweet: () => void;
}

export const TweetsActions: FC<Props> = ({
  isLiked,
  isRetweeted,
  tweet,
  onSetCurrentTweet,
  handleLike,
  handleRetweet,
}) => {
  return (
    <ul className="flex gap-16 items-center">
      <li
        className="flex items-center text-gray-700 hover:text-twitter transition-colors duration-300 ease-in-out"
        onClick={onSetCurrentTweet}
      >
        <i className="hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none">
          <CommentIcon />
        </i>
        <span className="font-light">{tweet.comments.length}</span>
      </li>
      <li
        className="flex items-center text-gray-700 hover:text-green-500 transition-colors duration-300 ease-in-out"
        onClick={handleRetweet}
      >
        <i className="hover:bg-green-500 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none">
          <RePostIcon isRetweeted={!!isRetweeted} />
        </i>
        <span className={`font-light ${!!isRetweeted && "text-green-500"}`}>
          {tweet.retweets.length}
        </span>
      </li>
      <li className="flex items-center text-gray-700 hover:text-red-500 transition-colors duration-300 ease-in-out">
        <i
          className="hover:bg-red-500 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none"
          onClick={handleLike}
        >
          <LikeIcon isLiked={!!isLiked} />
        </i>
        <span className={`font-light ${!!isLiked && "text-red-500"}`}>
          {tweet.likes.length}
        </span>
      </li>
    </ul>
  );
};
