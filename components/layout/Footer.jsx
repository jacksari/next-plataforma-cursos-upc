import React, { useContext } from 'react';
import pageContext from "../../context/pages/pageContext";
import Link from "next/link";

function Footer() {
    const { categories, courses, planes, direccionContacto, correoContacto, telefonoContacto } = useContext(pageContext)
    return (
        <footer id="footer">

            <div className="container">
                <div className="row">
                    <div className="footerbottom">
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>
                                    Categorías
                                </h4>
                                <div className="menu-course">
                                    <ul className="menu">
                                        {
                                            categories.map((category, index) => (
                                                <li key={index}>
                                                    {category.nombre}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>
                                    Cursos
                                </h4>
                                <div className="menu-course">
                                    <ul className="menu">
                                        {
                                            courses.map((course, index) => (
                                                <li key={index}>{ course.titulo }</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>
                                    Planes
                                </h4>
                                <div className="menu-course">
                                    <ul className="menu">
                                        {
                                            planes.map((plan, index) =>(
                                                <li key={index}>
                                                    <Link href="/premium">
                                                        <a>
                                                            { plan.title}  -  {plan.moneda}{plan.precio}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>Contacto</h4>
                                <p>Contactanos para más información de los cursos</p>
                                <div className="contact-info">
                                    <i className="fa fa-map-marker"></i>  {direccionContacto}<br/>
                                    <i className="fa fa-phone"></i>  {telefonoContacto}<br/>
                                    <i className="far fa-envelope"></i>  {correoContacto}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social text-center">
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>

                <div className="clear"></div>
            </div>
            <div className="footer2">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 panel">
                            <div className="panel-body">
                                <p className="simplenav">
                                    <Link href="/">
                                        <a>Inicio</a>
                                    </Link>
                                     |
                                    <Link href="/nosotros">
                                        <a>Nosotros</a>
                                    </Link>
                                    |
                                    <Link href="/cursos">
                                        <a>Cursos</a>
                                    </Link>
                                    |
                                    <Link href="/premium">
                                        <a>Planes</a>
                                    </Link>
                                    |
                                    <Link href="/contacto">
                                        <a>Contactanos</a>
                                    </Link>
                                    |
                                    <Link href="/iniciar-sesion">
                                        <a>Iniciar Sesión</a>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 panel">
                            <div className="panel-body">
                                <p className="text-right">
                                    Copyright &copy; 2021. ALL RIGHT RESERVED DEVELOPER BY<a className="jacksari" href="https://jacksari.com/" target="_blank">JACKSARI</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
