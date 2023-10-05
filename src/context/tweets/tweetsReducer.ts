import { TweetData, Tweet, User } from "@/interfaces";
import { TweetsState } from ".";

type TweetsActionType =
  | { type: "[Tweets] - loading" }
  | { type: "[Tweets] - load-tweets"; payload: TweetData[] }
  | { type: "[Tweets] - create-tweet"; payload: TweetData };

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
        tweetsData: [action.payload, ...state.tweetsData],
      };
    default:
      return state;
  }
};
