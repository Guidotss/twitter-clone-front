import { type UUID } from "crypto";
import { User } from ".";

export interface Tweet {
  id: UUID;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  retweets: number;
  comments: Comment[];
}

export interface Comment {
  id: UUID;
  content: string;
  userId: UUID;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  retweets: number;
  tweet: Tweet;
}
