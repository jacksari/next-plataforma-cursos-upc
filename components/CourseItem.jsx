import React from 'react';
import Link from "next/link";

function CourseItem({course}) {
    const { imagen, titulo, slug } = course;
    const img = `${process.env.backendURL}${imagen.url}`;
    const sl = `/cursos/${slug}`
    return (
        <li className="col-lg-3 col-sm-4 col-xs-6">
            <Link href={sl}>
                <a title={titulo}>
                    <img src={img} alt={titulo} className="img-responsive img-course" height="130px"/>
                    <h2>{titulo}</h2>
                    <span className="play-button"></span>
                    <span className="duration">03:15</span>
                </a>
            </Link>
        </li>
    );
}

export default CourseItem;
