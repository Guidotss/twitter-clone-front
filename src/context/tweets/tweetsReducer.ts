import { TweetData, Tweet, GifsUser, Like, Retweet } from "@/interfaces";
import { TweetsState } from ".";

type TweetsActionType =
  | { type: "[Tweets] - loading" }
  | { type: "[Tweets] - load-tweets"; payload: TweetData[] }
  | { type: "[Tweets] - create-tweet"; payload: TweetData }
  | { type: "[Tweets] - set-current-tweet"; payload: string }
  | {
      type: "[Tweets] - create-comment";
      payload: { tweet: Tweet; comment: Comment };
    }
  | {
      type: "[Tweets] - set-like";
      payload: {
        tweetId: string;
        userId: string;
        like: Like;
        isLiked: boolean;
      };
    }
  | {
      type: "[Tweets] - set-retweet";
      payload: {
        tweetId: string;
        userId: string;
        retweet: Retweet;
        isRetweeted: boolean;
      };
    };

export const tweetsReducer = (
  state: TweetsState,
  action: TweetsActionType
): TweetsState => {
  switch (action.type) {
    case "[Tweets] - loading":
      return {
        ...state,
        isLoading: true,
      };
    case "[Tweets] - load-tweets":
      return {
        ...state,
        isLoading: false,
        tweetsData: action.payload,
      };
    case "[Tweets] - create-tweet":
      return {
        ...state,
        isLoading: false,
        tweetsData: [action.payload, ...state.tweetsData],
      };
    case "[Tweets] - set-current-tweet":
      return {
        ...state,
        currentTweet: state.tweetsData.find(
          (tweet: TweetData) => tweet.tweet?.id === action.payload
        ),
      };
    case "[Tweets] - create-comment":
      return {
        ...state,
        tweetsData: state.tweetsData.map((tweetData: TweetData) => {
          if (tweetData.tweet?.id === action.payload.tweet?.id) {
            return {
              ...tweetData,
              tweet: {
                ...tweetData.tweet,
                comments: [...tweetData.tweet.comments, action.payload.comment],
              },
            };
          } else {
            return tweetData;
          }
        }) as TweetData[],
      };
    case "[Tweets] - set-like":
      return {
        ...state,
        tweetsData: state.tweetsData.map((tweetData: TweetData) => {
          if (tweetData.tweet?.id === action.payload.tweetId) {
            if (action.payload.isLiked) {
              return {
                ...tweetData,
                tweet: {
                  ...tweetData.tweet,
                  likes: [...tweetData.tweet.likes, action.payload.like],
                },
              };
            } else {
              return {
                ...tweetData,
                tweet: {
                  ...tweetData.tweet,
                  likes: tweetData.tweet.likes.filter(
                    (like: Like) => like.userId !== action.payload.userId
                  ),
                },
              };
            }
          } else {
            return tweetData;
          }
        }),
      };

    case "[Tweets] - set-retweet":
      return {
        ...state,
        tweetsData: state.tweetsData.map((tweetData: TweetData) => {
          if (tweetData.tweet?.id === action.payload.tweetId) {
            if (action.payload.isRetweeted) {
              return {
                ...tweetData,
                tweet: {
                  ...tweetData.tweet,
                  retweets: [
                    ...tweetData.tweet.retweets,
                    action.payload.retweet,
                  ],
                },
              };
            } else {
              return {
                ...tweetData,
                tweet: {
                  ...tweetData.tweet,
                  retweets: tweetData.tweet.retweets.filter(
                    (retweet: Retweet) =>
                      retweet.userId !== action.payload.userId
                  ),
                },
              };
            }
          } else {
            return tweetData;
          }
        }) as TweetData[],
      };
    default:
      return state;
  }
};
