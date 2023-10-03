"use client"
import { Tweet } from '@/interfaces';
import { createContext } from 'react';

interface TweetsContextProps {
    tweets: Tweet[]; 
}


export const TweetsContext = createContext({} as TweetsContextProps);