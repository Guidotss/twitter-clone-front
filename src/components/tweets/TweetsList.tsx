"use client";

import { TweetsContext } from "@/context";
import { useContext } from "react";

export const TweetsList = () => {
  const { tweetsData } = useContext(TweetsContext);
  
  return (
    <div className="flex flex-col w-full items-center mt-10">
    </div>
  );
};
