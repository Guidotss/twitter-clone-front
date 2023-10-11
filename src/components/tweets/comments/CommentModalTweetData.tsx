"use client";

import Image from "next/image";
import { TweetData } from "../TweetData";
import { TweetData as ITweetData } from "@/interfaces";
import Link from "next/link";

interface Props {
  currentTweet: ITweetData;
}

export const CommentModalTweetData = ({ currentTweet }: Props) => {
  return (
    <>
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
        <TweetData tweet={currentTweet?.tweet!} user={currentTweet?.user!} />
      </div>
      <article className="ml-[60px]">
        <p>{currentTweet?.tweet?.content}</p>
        <div className="flex">
          <span className="text-gray-500 text-[15px]">Respondiendo a </span>
          <Link
            href={`/profile/user_id`}
            className="text-twitter ml-2 text-[15px] cursor-pointer"
          >
            @{currentTweet?.user?.email.split("@")[0]}
          </Link>
        </div>
      </article>
      <div className="w-[2px] h-20 bg-gray-700 ml-6 -mt-10" />
    </>
  );
};
