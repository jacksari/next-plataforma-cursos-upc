import React, { useContext } from 'react';
import ReactPlayer from "react-player";
import pageContext from "../context/pages/pageContext";

function VideoDefault() {
    const { courseSelect, videoHome } = useContext(pageContext)
    return (
        <div className="video-default">
            {
                courseSelect && !videoHome && <h1>Bienvevido al {courseSelect.titulo}</h1>
            }
            <div className="player-wrapper1">
                <ReactPlayer
                    className="react-player"
                    url="/video/fondo.mp4"
                    width='100%'
                    height='100%'
                    playing
                    muted
                    loop
                />
            </div>

        </div>
    );
}

export default VideoDefault;
