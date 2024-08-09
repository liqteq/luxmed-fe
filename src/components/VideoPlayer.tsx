'use client'
import React from 'react'
import ReactPlayer from 'react-player'
const VideoPlayer = () => {
    let videosrc = '/Videos/luxmedVideo.mp4'
    return (
        <div className='flex justify-center mt-3'>
            <ReactPlayer url={videosrc} width={1000} height={500} controls={true} />
            <source src={videosrc} type="video/mp4" />
        </div>
    )
}

export default VideoPlayer