import React, { useContext } from 'react';
import ReactPlayer from "react-player";
import Link from "next/link";
import pageContext from "../context/pages/pageContext";
import ReactMarkdown from "react-markdown";
import authContext from "../context/auth/authContext";

function CourseDetails() {
    const { courseSelect } = useContext(pageContext)
    const { autenticado } = useContext(authContext)
    if(!courseSelect){
        return ;
    }
    const slug = `/cursos/overview/${courseSelect.slug}`

    return (
        <section className="container">

            <div className="row">

                {
                    courseSelect !== null ? (
                            <>
                                <article className="col-md-8 maincontent ">
                                    <div className="player-wrapper1">
                                        <ReactPlayer
                                            className="react-player"
                                            url={courseSelect.presentacion}
                                            width='100%'
                                            height='100%'
                                        />
                                    </div>
                                    <div className="teacher">
                                        <img src="/img/photo-1.jpg" alt=""/>
                                        <div className="description">
                                            <p className="teacher-name">
                                                Jack
                                            </p>
                                            {
                                                courseSelect.profesor && <p className="title">{courseSelect.profesor.Titulo}</p>
                                            }
                                        </div>
                                    </div>
                                    <ReactMarkdown>{courseSelect.descripcion}</ReactMarkdown>
                                </article>
                                <aside className="col-md-4 sidebar sidebar-right">
                                    {
                                        autenticado ? (
                                            <Link href={slug}>
                                                <a className="btn btn-two">Entrar al curso</a>
                                            </Link>
                                        ) : (
                                            <Link href="/iniciar-sesion">
                                                <a className="btn btn-two">¿Quieres iniciar?, Iniciar Sesión</a>
                                            </Link>
                                        )
                                    }



                                    <div className="row panel">
                                        <div className="col-xs-12">
                                            <h3>{courseSelect.titulo}</h3>
                                            <p>{courseSelect.subtitulo}</p>
                                        </div>
                                        <div className="col-xs-12">
                                            <h3>Fecha de publicación</h3>
                                            <p>{courseSelect.fecha_pub}</p>
                                        </div>
                                    </div>
                                    <div className="row panel">

                                        <div className="col-xs-12">
                                            <h3>Lorem ipsum dolor sit</h3>
                                            <p>
                                                {
                                                    courseSelect.imagen && <img src={`${process.env.backendURL}${courseSelect.imagen.url}`} alt=""/>
                                                }

                                            </p>
                                            <p>Morbi vitae diam felis. Mauris vulputate nisi erat, adipiscing pretium lacus lacinia
                                                quis. Sed consectetur ipsum.</p>
                                        </div>
                                        <div className="col-xs-12">
                                            <h3>Categorías</h3>
                                            {
                                                courseSelect.categorias && courseSelect.categorias.map((cat,index) => (
                                                    <p key={index}>{cat.nombre}</p>
                                                ))
                                            }

                                        </div>
                                    </div>

                                </aside>
                            </>
                    ) : (
                        <div className="spinner"></div>
                    )
                }

            </div>
        </section>
    );
}

export default CourseDetails;
