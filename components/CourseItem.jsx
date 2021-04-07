import React from 'react';
import Link from "next/link";

function CourseItem() {
    return (
        <li className="col-lg-3 col-sm-4 col-xs-6">
            <Link href="/cursos/dasd">
                <a title="Claudio Bravo, antes su debut con el Barça en la Liga">
                    <img src="/img/mqdefault.jpg" alt="Barca" className="img-responsive" height="130px"/>
                    <h2>Claudio Bravo, antes su debut con el Barça en la Liga</h2>
                    <span className="play-button"></span>
                    <span className="duration">03:15</span>
                </a>
            </Link>
        </li>
    );
}

export default CourseItem;
