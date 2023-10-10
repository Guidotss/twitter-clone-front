"use client";

import { Tweet, User } from "@/interfaces";
import Image from "next/image";
import { CommentIcon, LikeIcon, MoreOptionsIcon, RePostIcon } from "..";
import { useContext } from 'react';
import { TweetsContext, UiContext } from "@/context";

interface TweetCardProps {
  tweet: Tweet;
  user: User;
}

export const TweetCard = ({ tweet, user }: TweetCardProps) => {
  const { openCommentModal } = useContext(UiContext);
  const { setCurrentTweeet } = useContext(TweetsContext);
  let createAt = new Date(tweet.createdAt);
  let now = new Date();
  let diffHours = Math.abs(now.getHours() - createAt.getHours());
  let diffMinutes = Math.abs(now.getMinutes() - createAt.getMinutes());
  let diffSeconds = Math.abs(now.getSeconds() - createAt.getSeconds());

  let time: string = `${diffHours}h`;

  if (diffHours == 0) {
    if (diffMinutes == 0) {
      time = `${diffSeconds}seg`;
    } else {
      time = `${diffMinutes}min`;
    }
  }

  const onSetCurrentTweet = () => {
    setCurrentTweeet(tweet.id);
    openCommentModal(); 
  }

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
          <div className="flex gap-2 items-center">
            <h3>{user.name}</h3>
            <h4 className="text-sx text-gray-600">
              @{user.name.toLocaleLowerCase()}
            </h4>
            <span className="text-gray-600">·</span>
            <span className="text-gray-600">{time}</span>
          </div>
          <button className="hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full focus:outline-none focus:border-none">
            <MoreOptionsIcon />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <span>{tweet.content}</span>
          <ul className="flex gap-16 items-center">
            <li className="flex items-center text-gray-700 hover:text-twitter transition-colors duration-300 ease-in-out" onClick={onSetCurrentTweet}>
              <i className="hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
                <CommentIcon />
              </i>
              <span className="font-light">{tweet.comments.length}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:text-green-500 transition-colors duration-300 ease-in-out">
              <i className="hover:bg-green-500 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
                <RePostIcon />
              </i>
              <span className="font-light">{tweet.retweets.length}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:text-red-500 transition-colors duration-300 ease-in-out">
              <i className="hover:bg-red-500 hover:bg-opacity-10 transition-colors duration-300 ease-in-out p-2 rounded-full">
                <LikeIcon />
              </i>
              <span className="font-light">{tweet.likes.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
