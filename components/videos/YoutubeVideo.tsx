"use client"

import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({
        videoId 
    }:{
        videoId:string
    }) => {
    // Set up event handlers
    const onReady = (event) => {
      // Access the player instance
      const player = event.target;
  
      // For example, you can automatically play the video
      player.playVideo();
    };
  
    const onError = (error) => {
      console.error('YouTube Player Error:', error);
    };

    const opts = {
      height: '150',
      width: '300',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  
    return (
      <YouTube className='aspect-square'
        videoId={videoId}
        onReady={onReady}
        opts={opts}
        onError={onError}
      />
    );
  };
  
  export default YouTubePlayer;