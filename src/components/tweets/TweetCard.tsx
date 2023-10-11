"use client";

import { Tweet, User } from "@/interfaces";
import Image from "next/image";
import { CommentIcon, LikeIcon, MoreOptionsIcon, RePostIcon } from "..";
import { useContext } from "react";
import { AuthContext, TweetsContext, UiContext } from "@/context";
import { TweetData } from "./TweetData";

interface TweetCardProps {
  tweet: Tweet;
  user: User;
}

export const TweetCard = ({ tweet, user }: TweetCardProps) => {
  const { openCommentModal } = useContext(UiContext);
  const { setCurrentTweeet, setLike } = useContext(TweetsContext);
  const { user: currentUser } = useContext(AuthContext)

  const onSetCurrentTweet = () => {
    setCurrentTweeet(tweet.id);
    openCommentModal();
  };
  console.log(tweet.likes)

  const handleLike = () => {
    setLike(tweet.id, currentUser?.id!);
  };

  const isLiked = tweet.likes.find((like) => like.userId === currentUser?.id);
  console.log(isLiked);

  return (
    <div className="flex gap-3 px-5 py-2 hover:bg-gray-700 hover:bg-opacity-10 transition-colors duration-300 ease-in-out cursor-pointer">
      <figure>
        <Image
          className="rounded-full p-1"
          src={`https://${user.imageUrl}`}
          alt="profile"
          width={45}
          height={45}
        />
      </figure>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full">
          <TweetData tweet={tweet} user={user} />
          <button className="hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none focus:border-none">
            <MoreOptionsIcon />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <span>{tweet.content}</span>
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
            <li className="flex items-center text-gray-700 hover:text-green-500 transition-colors duration-300 ease-in-out">
              <i className="hover:bg-green-500 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none">
                <RePostIcon />
              </i>
              <span className="font-light">{tweet.retweets.length}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:text-red-500 transition-colors duration-300 ease-in-out">
              <i
                className="hover:bg-red-500 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none"
                onClick={handleLike}
              >
                <LikeIcon 
                  isLiked={!!isLiked}
                />
              </i>
              <span className="font-light">{tweet.likes.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
