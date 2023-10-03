import { Tweet } from "@/interfaces";

export interface TweetsResponse {
    ok: boolean;
    message?: string;
    error?: string;
    tweets?: Tweet[];
    tweet?: Tweet;
}