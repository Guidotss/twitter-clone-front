"use client";
import { TweetData, Tweet, User } from "@/interfaces";
import { createContext } from "react";

interface TweetsContextProps {
  isLoading: boolean;
  currentTweet?: TweetData; 
  tweetsData: TweetData[];
  
  createTweet: (userId: string, content: string ) => Promise<void>;
  createComment(tweetId: string, userId: string, content: string): Promise<void>;
  setLike: (tweetId: string, userId: string) => Promise<void>;
  setRetweet: (tweetId: string, userId: string) => Promise<void>
  setCurrentTweeet: (id: string) => void;
}

export const TweetsContext = createContext({} as TweetsContextProps);
