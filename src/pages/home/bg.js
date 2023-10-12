import React from 'react'
import './bg.css';

function Bg() {
  return (
    <div>
        <div className="bg-video-wrap">
        <video src="https://res.cloudinary.com/dqpyrzzw7/video/upload/v1670342340/rapt_athvsj.mp4" loop muted autoPlay>
        </video>
        <div className="overlay">
        </div>
      </div>  
    </div>
  )
}

export default Bg;  
