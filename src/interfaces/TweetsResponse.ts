import { Tweet } from "@/interfaces";
import { UUID } from "crypto";

export interface TweetsResponse {
  ok: boolean;
  message?: string;
  error?: string;
  results?: TweetData[];
  tweet?: TweetData;
}

export interface TweetData {
  user: {
    id: UUID;
    name: string;
    imageUrl: string;
  };
  tweets: Tweet[];
}
