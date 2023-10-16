"use client";
import { FC, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { TweetsContext, tweetsReducer } from ".";
import { TweetData, Tweet, User } from "@/interfaces";

interface TweetsProviderProps {
  children: React.ReactNode;
}

export interface TweetsState {
  tweetsData: TweetData[];
  currentTweet?: TweetData;
  isLoading: boolean;
}

const TWEETS_INITIAL_STATE: TweetsState = {
  tweetsData: [],
  currentTweet: undefined,
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
      const data = await response.json();

      if (data.ok) {
        dispatch({
          type: "[Tweets] - load-tweets",
          payload: data.results! as TweetData[],
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createTweet = async (userId: string, content: string, gifUrl?: string) => {
    console.log(gifUrl); 
    try {
      dispatch({ type: "[Tweets] - loading" });
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tweets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, content, gifUrl }),
        }
      );
      const data = await response.json();

      if (data.ok) {
        dispatch({
          type: "[Tweets] - create-tweet",
          payload: data.results as TweetData,
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

  const setCurrentTweeet = (id: string) => {
    dispatch({
      type: "[Tweets] - set-current-tweet",
      payload: id,
    });
  };

  const createComment = async (
    tweetId: string,
    userId: string,
    content: string
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tweets/comments/${tweetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, content }),
        }
      );
      const data = await response.json();
      if (data.ok) {
        dispatch({
          type: "[Tweets] - create-comment",
          payload: {
            tweet: state.currentTweet?.tweet!,
            comment: data.comment,
          },
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setLike = async (tweetId: string, userId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tweets/likes/${tweetId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );
      const data = await response.json();

      if (data.ok) {
        dispatch({
          type: "[Tweets] - set-like",
          payload: {
            tweetId,
            like: data.like,
            isLiked: data.isLiked,
            userId,
          },
        });
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const setRetweet = async (tweetId: string, userId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tweets/retweets/${tweetId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );
      const data = await response.json();
      if (data.ok) {
        dispatch({ 
          type:"[Tweets] - set-retweet",
          payload: {
            tweetId,
            retweet: data.retweet,
            isRetweeted: data.isRetweeted,
            userId
          }
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

        createTweet,
        setCurrentTweeet,
        createComment,
        setLike,
        setRetweet,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
