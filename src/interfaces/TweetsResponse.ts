import { Tweet, User } from "@/interfaces";

export interface TweetResponse {
  ok: boolean;
  message?: string;
  error?: string;
  results: TweetData[] | TweetData;
}

export interface TweetData {
  user: User;
  tweets?: Tweet[]; 
  tweet?: Tweet;
}
