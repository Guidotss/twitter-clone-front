"use client"
import { FC, useReducer } from 'react';
import { TweetsContext, tweetsReducer } from '.';

interface TweetsProviderProps { 
    children : React.ReactNode;
}

export interface TweetsState {
    tweets: string[];
}

const TWEETS_INITIAL_STATE: TweetsState = {
    tweets: [],
}


export const TweetsProvider: FC<TweetsProviderProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer(tweetsReducer,TWEETS_INITIAL_STATE); 

    return (
        <TweetsContext.Provider value={{
            ...state
        }}>
            {children}
        </TweetsContext.Provider>
    )
}