"use client";
import { FC, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { TweetsContext, tweetsReducer } from ".";
import { Tweet } from "@/interfaces";
import { TweetsResponse } from "@/interfaces";

interface TweetsProviderProps {
  children: React.ReactNode;
}

export interface TweetsState {
  tweets: Tweet[];
  isLoading: boolean;
}

const TWEETS_INITIAL_STATE: TweetsState = {
  tweets: [],
  isLoading: false,
};

export const TweetsProvider: FC<TweetsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tweetsReducer, TWEETS_INITIAL_STATE);

  useEffect(() => {
    loadTweets();
  }, []);

  const loadTweets = async () => {
    dispatch({
      type: "[Tweets] - loading",
    });
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
          payload: data.results!,
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createTweet = async ({
    userId,
    content,
  }: {
    userId: string;
    content: string;
  }) => {
    const newTweet = {
      userId,
      content,
    };

    try {
      dispatch({ type: "[Tweets] - loading" });
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tweets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTweet),
        }
      );
      const data: TweetsResponse = await response.json();

      if (data.ok) {
        dispatch({
          type: "[Tweets] - create-tweet",
          payload: data.tweet!,
        });
        return;
      }
      toast.error(data.error!, {
        duration: 4000,
        style: {
          background: "#333",
          color: "#fff",
        },
        icon: "❌",
      });
    } catch (error) {
      console.log(error);
      toast.error("An error has ocurred");
    }
  };

  return (
    <TweetsContext.Provider
      value={{
        ...state,

        createTweet,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
