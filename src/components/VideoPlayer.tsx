'use client'
import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
    return (
        <div className='flex justify-center mt-7'>
            <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' width={1000} height={600} />
        </div>
    )
}

export default VideoPlayer