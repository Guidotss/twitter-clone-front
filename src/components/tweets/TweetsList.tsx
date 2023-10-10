"use client";
import { useContext } from "react";
import { TweetsContext } from "@/context";
import { TweetCard } from "./TweetCard";
import { LoaderIcon } from "..";

export const TweetsList = () => {
  const { tweetsData,isLoading } = useContext(TweetsContext);

  if(isLoading) return (
    <div className="flex flex-col w-full items-center  mt-10">
      <LoaderIcon />
    </div>
  )
  
  return (
    <div className="flex flex-col w-full items-center mt-10">
      {tweetsData.map(({ tweet, user }, index) => (
        <div key={tweet?.id} className={`flex flex-col ${index == 0 && "border-t-[1px]"} border-b-[1px] border-gray-700 w-full`}>
          <TweetCard tweet={tweet!} user={user} />
        </div>
      ))}
    </div>
  );
};
  