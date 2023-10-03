"use client"
import { Tweet } from '@/interfaces';
import { createContext } from 'react';

interface TweetsContextProps {
    isLoading: boolean;
    tweets: Tweet[]; 
   
}


export const TweetsContext = createContext({} as TweetsContextProps);