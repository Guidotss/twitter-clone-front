"use client";

import { TweetsContext } from "@/context";
import { useContext } from "react";

export const TweetsList = () => {
  const { tweets } = useContext(TweetsContext);
  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <h3>{tweet.content}</h3>
        </div>
      ))}
    </div>
  );
};
