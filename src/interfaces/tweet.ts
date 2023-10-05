import { type UUID } from "crypto";
import { User } from ".";

export interface Tweet {
  id: UUID;
  content: string;
  likes: User[];
  createdAt: Date;
  updatedAt: Date;
  retweets: Tweet[];
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
