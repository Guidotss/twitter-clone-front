import { type UUID } from "crypto";
import { User } from ".";

export interface Tweet { 
    id: UUID;
    content: string; 
    user: User; 
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    retweets: number;
    comments: Comment[];
    userId: UUID;
}

export interface Comment { 
    id: UUID;
    content: string; 
    user: User; 
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    retweets: number;
    tweet: Tweet;
}