import React, { useContext, useEffect, useState } from 'react';
import pageContext from "../context/pages/pageContext";

function TabSectionItem({seccion}) {
    const { getLeccionesSections, getLeccion, courseSelect } = useContext(pageContext)
    const [lecciones, setLecciones] = useState([]);
    useEffect(() => {
        //console.log(getLeccionesSections(seccion._id))
        setLecciones(getLeccionesSections(seccion._id))
        console.log('123')
    }, []);

    return (
        <div className="section-item">
            <p>
                <i className="fas fa-directions"></i>
                { seccion.nombre }
            </p>
            <ul>
                {
                    lecciones.map((leccion, index) => (
                        <li key={index}>
                            <button onClick={()=>getLeccion(leccion)}>
                                <i className="far fa-play-circle"></i>
                                {'  '}
                                { leccion.nombre }
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TabSectionItem;
