import React, { useContext } from 'react';
import Link from "next/link";
import pageContext from "../context/pages/pageContext";

function VideoHeader() {
    const { courseSelect } = useContext(pageContext)
    return (
        <div className="header-overiew">
            {
                courseSelect && <h1>{courseSelect.titulo}</h1>
            }
            <Link href="/cursos">
                <a className="button">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </Link>
        </div>
    );
}

export default VideoHeader;
