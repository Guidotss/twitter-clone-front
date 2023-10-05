"use client";
import { TweetData, Tweet, User } from "@/interfaces";
import { createContext } from "react";

interface TweetsContextProps {
  isLoading: boolean;
  createTweet: (userId: string, content: string ) => Promise<void>;

  tweetsData: TweetData[];
}

export const TweetsContext = createContext({} as TweetsContextProps);
