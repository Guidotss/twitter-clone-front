import { Tweet } from "@/interfaces";
import { UUID } from "crypto";

export interface TweetsResponse {
    ok: boolean;
    message?: string;
    error?: string;
    results?: Results[];
    tweet?: Tweet;
}

export interface Results { 
    id:UUID,
    name: string,
    imageUrl: string,
    tweets: Tweet[]; 
}