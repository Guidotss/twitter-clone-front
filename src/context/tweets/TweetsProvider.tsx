"use client";
import { FC, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { TweetsContext, tweetsReducer } from ".";
import { Tweet } from "@/interfaces";
import { TweetsResponse } from "../auth/TweetsResponse";

interface TweetsProviderProps {
  children: React.ReactNode;
}

export interface TweetsState {
  tweets: Tweet[];
}

const TWEETS_INITIAL_STATE: TweetsState = {
  tweets: [],
};

export const TweetsProvider: FC<TweetsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tweetsReducer, TWEETS_INITIAL_STATE);

  useEffect(() => { 
    loadTweets();
  },[]); 

  const loadTweets = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tweets`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: TweetsResponse = await response.json();

      if (data.ok) {
        dispatch({
          type: "[Tweets] - load-tweets",
          payload: data.tweets!,
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TweetsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
