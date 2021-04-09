import React, { useContext } from 'react';
import Link from "next/link";
import pageContext from "../context/pages/pageContext";
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

function AboutHome() {
    const { nosotrosHome } = useContext(pageContext)
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="title-box clearfix "><h2 className="title-box_primary">Sobre nosotros</h2></div>
                    <ReactMarkdown>{nosotrosHome}</ReactMarkdown>
                    <Link href="/nosotros">
                        <a title="read more" className="btn-inline " target="_self">Leer más</a>
                    </Link>
                </div>


                <div className="col-md-4">
                    <div className="title-box clearfix "><h2 className="title-box_primary">Conoce más de nosotros</h2></div>
                    <div className="list styled custom-list">
                        <ul>
                            <li>
                                <Link href="/cursos">
                                    <a>Cursos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/nosotros">
                                    <a>Nosotros</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/premium">
                                    <a>Premium</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactos">
                                    <a>Contactos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/iniciar-sesion">
                                    <a>Iniciar sesión</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/registro">
                                    <a>Registrar usuario</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHome;
