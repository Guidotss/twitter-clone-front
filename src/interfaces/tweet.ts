export interface Tweet {
  id: string;
  content: string;
  gifUrl?: string;
  likes: Like[];
  createdAt: Date;
  updatedAt: Date;
  retweets: Retweet[];
  comments: Comment[];
}

export interface Like {
  id: string;
  userId: string;
  tweetId: string;
  createdAt: Date;
}

export interface Retweet extends Like {}

export interface Comment {
  id: string;
  userId: string;
  tweetId: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  retweets: number;
}
