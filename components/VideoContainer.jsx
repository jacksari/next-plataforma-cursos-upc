import React from 'react';
import ReactPlayer from "react-player";

function VideoContainer() {
    return (
        <div className="video-container">
            <div className="player-wrapper1">
                <ReactPlayer
                    className="react-player"
                    url='https://www.youtube.com/watch?v=sT0jGBa7VQA'
                    width='100%'
                    height='100%'
                />
            </div>
            <div className="footer-video">
                <div className="teacher">
                    <img src="/img/photo-1.jpg" alt=""/>
                    <div className="description">
                        <p className="teacher-name">
                            Jack Sari
                        </p>
                        <p className="title">Web developer</p>
                    </div>
                </div>
                <p>Leccion 1</p>
            </div>

        </div>
    );
}

export default VideoContainer;
