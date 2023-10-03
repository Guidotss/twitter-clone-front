import { Tweet } from "@/interfaces";
import { TweetsState } from ".";

type TweetsActionType = { type: "[Tweets] - load-tweets"; payload: Tweet[] };

export const tweetsReducer = (
  state: TweetsState,
  action: TweetsActionType
): TweetsState => {
  switch (action.type) {
    case "[Tweets] - load-tweets":
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
};
