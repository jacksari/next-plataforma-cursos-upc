import React, { useContext, useState } from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import authContext from "../../context/auth/authContext";

function Header({path}) {
    const { autenticado, usuario, logout } = useContext(authContext)
    const [toggle, setToggle] = useState(false);
    return (
        <div className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/logo.png" alt="Techro HTML5 template"/>
                        </a>
                    </Link>

                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav pull-right mainNav">
                        <li className={path === '' ? 'c1 active': 'c1'}>
                            <Link href="/">
                                <a >Inicio</a>
                            </Link>
                        </li>
                        <li className={path === 'nosotros' ? 'c2 active': 'c2'}>
                            <Link href="/nosotros">
                                <a>Nosotros</a>
                            </Link>
                        </li>
                        <li className={path === 'cursos' ? 'c3 active': 'c3'}>
                            <Link href="/cursos">
                                <a >Cursos</a>
                            </Link>
                        </li>
                        <li className={path === 'premium' ? 'c4 active': 'c4'}>
                            <Link href="/premium">
                                <a >Premium</a>
                            </Link>
                        </li>
                        <li className={path === 'contacto' ? 'c5 active': 'c5'}>
                            <Link href="/contacto">
                                <a >Contactanos</a>
                            </Link>
                        </li>
                        {
                            autenticado ? (
                                <>
                                    <li className="auth-header">
                                        <img onClick={()=>setToggle(!toggle)} src={ usuario.image } alt={ usuario.name }/>
                                        <p onClick={()=>setToggle(!toggle)}>{usuario.name}</p>
                                        {
                                            toggle ? (
                                                <div className="caja-auth">
                                                    <Link href="/cursos">
                                                        <a>Cursos</a>
                                                    </Link>
                                                    <Link href="/premium">
                                                        <a>Premium</a>
                                                    </Link>
                                                    <button onClick={()=>logout()} type="submit">Cerrar sesión</button>
                                                </div>
                                            ) : null
                                        }
                                    </li>
                                </>
                            ) : (
                                <li className={path === 'iniciar-sesion' ? 'c6 active': 'c6'}>
                                    <Link href="/iniciar-sesion">
                                        <a href="videos.html">Iniciar Sesión</a>
                                    </Link>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
