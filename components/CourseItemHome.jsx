import React from 'react';
import Link from "next/link";

function CourseItemHome({course}) {
    const { imagen, titulo, subtitulo, categorias, slug } = course;
    const sl = `/cursos/${slug}`
    return (
        <Link href={sl}>
            <a>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="newsBox">
                        <div className="thumbnail">
                            <figure>
                            {
                                imagen && <img src={imagen.url} alt=""/>
                            }
                            </figure>
                            <div className="caption maxheight2">
                                <div className="box_inner">
                                    <div className="box">
                                        <p className="title">{titulo}</p>
                                        <p>{subtitulo}</p>
                                    </div>
                                    <div className="box_categories">
                                        {
                                            categorias.map((categoria, index) => (
                                                <p key={index}>{categoria.nombre}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default CourseItemHome;
