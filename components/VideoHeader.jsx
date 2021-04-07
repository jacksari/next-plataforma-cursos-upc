import React from 'react';
import Link from "next/link";

function VideoHeader() {
    return (
        <div className="header-overiew">
            <h1>Curso 1</h1>
            <Link href="/cursos">
                <a className="button">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </Link>
        </div>
    );
}

export default VideoHeader;
