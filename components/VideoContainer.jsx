import React, { useContext } from 'react';
import ReactPlayer from "react-player";
import pageContext from "../context/pages/pageContext";
import VideoDefault from "./VideoDefault";

function VideoContainer() {
    const { courseSelect, leccionSelect, teacherSelect } = useContext(pageContext)

    return (
        <div className="video-container">
            {
                leccionSelect ? (
                        <div className="player-wrapper1">
                            <ReactPlayer
                                className="react-player"
                                url={leccionSelect.video}
                                width='100%'
                                height='100%'
                            />
                        </div>
                ) : (<VideoDefault/>)
            }

            <div className="footer-video">
                {
                    courseSelect && (
                        <div className="teacher">
                            {
                                teacherSelect && <img src={teacherSelect.image} alt=""/>
                            }

                            <div className="description">
                                {
                                    teacherSelect && <p className="teacher-name">{teacherSelect.name}</p>
                                }
                                {
                                    courseSelect.profesor && <p className="title">{courseSelect.profesor.Titulo}</p>
                                }
                            </div>
                        </div>
                    )
                }
                <p>
                    {
                        leccionSelect && leccionSelect.nombre
                    }
                </p>
            </div>

        </div>
    );
}

export default VideoContainer;
