"use client"

import React from 'react'
import YouTubePlayer from './YoutubeVideo'
import { Card } from '../ui/card'
import { motion } from 'framer-motion'

export default function Video({
    data
}:{
    data:any
}) {

  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.3,
        }}
        exit={{ opacity: 0 }}
    >
        <Card className='p-5 cursor-pointer space-y-5 h-[500px] w-[600px]'>
            <p className='font-bold'>{data.title}</p>
            <div>
                {/*<YouTubePlayer videoId={data.url}/>*/}
            </div>
        </Card>
    </motion.div> 
    
  )
}
