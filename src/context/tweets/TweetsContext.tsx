"use client";
import { TweetData, Tweet, User } from "@/interfaces";
import { createContext } from "react";

interface TweetsContextProps {
  isLoading: boolean;
  currentTweet?: TweetData; 
  createTweet: (userId: string, content: string ) => Promise<void>;
  setCurrentTweeet: (id: string) => void;
  tweetsData: TweetData[];
}

export const TweetsContext = createContext({} as TweetsContextProps);
