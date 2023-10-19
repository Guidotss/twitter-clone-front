"use client";

import { useContext } from "react";
import { useRouter } from 'next/navigation'; 
import Image from "next/image";
import { AuthContext, TweetsContext, UiContext } from "@/context";
import { Tweet, User } from "@/interfaces";
import { MoreOptionsIcon } from "..";
import { TweetData } from "./TweetData";
import { MediaUpload } from "../shared/media";
import { TweetsActions } from "./TweetsActions";

interface TweetCardProps {
  tweet: Tweet;
  user: User;
}

export const TweetCard = ({ tweet, user }: TweetCardProps) => {

  const router = useRouter();

  const { openCommentModal } = useContext(UiContext);
  const { setCurrentTweeet, setLike, setRetweet } = useContext(TweetsContext);
  const { user: currentUser } = useContext(AuthContext);

  const handleNavigation = (e:React.MouseEvent) => {
    e.stopPropagation(); 
    router.push(`/tweet/${tweet.id}`);
  }

  const onSetCurrentTweet = (e:React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentTweeet(tweet.id);
    openCommentModal();
  };

  const handleLike = (e:React.MouseEvent) => {
    e.stopPropagation();
    setLike(tweet.id, currentUser?.id!);
  };

  const handleRetweet = (e:React.MouseEvent) => {
    e.stopPropagation(); 
    setRetweet(tweet.id, currentUser?.id!);
  };

  const isLiked = tweet.likes.find((like) => like.userId === currentUser?.id);
  const isRetweeted = tweet.retweets.find(
    (retweet) => retweet.userId === currentUser?.id
  );

  return (
    <div className="flex gap-3 px-5 py-2 hover:bg-gray-700 hover:bg-opacity-10 transition-colors  duration-300 ease-in-out cursor-pointer" onClick={(e) => handleNavigation(e)}>
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
          <MediaUpload gifUrl={tweet.gifUrl} imageUrl={tweet.imageUrl} />

          <TweetsActions
            isRetweeted={!!isRetweeted}
            isLiked={!!isLiked}
            tweet={tweet}
            onSetCurrentTweet={onSetCurrentTweet}
            handleLike={handleLike}
            handleRetweet={handleRetweet}
          />
        </div>
      </div>
    </div>
  );
};
