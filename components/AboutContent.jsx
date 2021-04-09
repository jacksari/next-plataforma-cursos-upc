import React, {useContext} from 'react';
import pageContext from "../context/pages/pageContext";
import ArchivosItem from "./ArchivosItem";

function AboutContent() {
    const { nosotrosNosotros, archivosNosotros, courses } = useContext(pageContext)
    return (
        <section className="container">
            <div className="row">
                <section className="col-sm-8 maincontent">
                    <h3>Sobre Nosotros</h3>
                    <p>
                        <img src="/img/about.jpg" alt="" className="img-rounded pull-right" width="300"/>
                        {nosotrosNosotros}
                    </p>
                    <h3>Nuestros Archivos</h3>
                    {
                        archivosNosotros.map((archivo, index) => (
                            <ArchivosItem archivo={archivo} key={index}/>
                        ))
                    }

                </section>
                <aside className="col-sm-4 sidebar sidebar-right">

                    <div className="panel">
                        <h4>Últimos Cursos</h4>
                        <ul className="list-unstyled list-spaces">
                            {
                                courses.map((course, index) => {
                                    const li = `/cursos/${course.slug}`
                                    return (
                                        <li key={index}><a href={li}>{course.titulo}</a><br/>
                                            <span className="small text-muted">{course.subtitulo}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>

                </aside>

            </div>
        </section>
    );
}

export default AboutContent;
