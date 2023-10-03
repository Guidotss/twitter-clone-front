import { type UUID } from "crypto";
import { User } from ".";

export interface Tweets { 
    id: UUID;
    content: string; 
    user: User; 
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    retweets: number;
    comments: Comment[];
}

export interface Comment { 
    id: UUID;
    content: string; 
    user: User; 
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    retweets: number;
    tweet: Tweets;
}