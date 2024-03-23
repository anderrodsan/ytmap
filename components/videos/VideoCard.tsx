"use client"

import React, { useCallback, useState } from 'react'
import { Card } from '../ui/card'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import YouTube from 'react-youtube';
import YouTubePlayer from './YoutubeVideo';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { globeData } from '@/data/data';
import Video from './Video';

export default function VideoCard({
    data
}:{
    data:any
}) {

  const pathname = usePathname()

  const searchParams = useSearchParams()!;
  const router = useRouter();

  const [index, setIndex] = useState(1)
  const maxLength = globeData.length;
 
  // create a query to filter, eg. /events?status=value
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
 
      return params.toString();
    },
    [searchParams]
  );

  const handleArrowUpClick = () => {
    if (index > 1) {
      setIndex(index - 1);
      
    }
    router.replace(`${pathname}?${createQueryString("id", index.toString())}`)
  };

  const handleArrowDownClick = () => {
    if (index < maxLength) {
      setIndex(index + 1);
      
    }
    router.replace(`${pathname}?${createQueryString("id", index.toString())}`)
  };

  return (
    <div className='flex flex-col items-center gap-5'>
      <button onClick={handleArrowUpClick}>
        <ArrowUp/>
      </button>
        <Video data={data}/>
      <button onClick={handleArrowDownClick}>
        <ArrowDown/>
      </button>
    </div>
    
    
  )
}
