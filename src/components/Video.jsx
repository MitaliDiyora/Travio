import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Video = () => {
    return (
        <>
            <div className="video-main">
                <div className="container">
                    <div className="text-content">
                        <h2>Explore Your Travel</h2>
                        <p>Your New Traveling Idea</p>
                    </div>
                    <div className="play-btn">
                        <Link> <BsPlayCircle />  
                        <span class="border-animation border-1"></span>
                        <span class="border-animation border-2"></span>
                        <span class="border-animation border-3"></span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video