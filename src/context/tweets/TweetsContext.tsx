"use client"
import { createContext } from 'react';

interface TweetsContextProps {
    tweets: string[];
}


export const TweetsContext = createContext({} as TweetsContextProps);