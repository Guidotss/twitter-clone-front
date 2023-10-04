"use client";
import { Tweet } from "@/interfaces";
import { createContext } from "react";

interface TweetsContextProps {
  isLoading: boolean;
  createTweet: ({
    userId,
    content,
  }: {
    userId: string;
    content: string;
  }) => Promise<void>;

  tweets: Tweet[];
}

export const TweetsContext = createContext({} as TweetsContextProps);
