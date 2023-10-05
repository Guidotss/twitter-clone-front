import { Results, Tweet } from "@/interfaces";
import { TweetsState } from ".";

type TweetsActionType =
  | { type: "[Tweets] - loading" }
  | { type: "[Tweets] - load-tweets"; payload: Results[] }
  | { type: "[Tweets] - create-tweet"; payload: Tweet };

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
        tweets: action.payload.map((result) => result.tweets).flat(),
      };
    case "[Tweets] - create-tweet":
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      };
    default:
      return state;
  }
};
