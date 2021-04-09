import React, {useContext} from 'react';
import ExperienceItem from "./ExperienceItem";
import pageContext from "../context/pages/pageContext";
import styles from "../styles/course.module.css";
import Modal from "react-modal";
import ReactPlayer from "react-player";

function Testimonios() {
    const { testimonios } = useContext(pageContext)
    return (
        <div className="container p-5">
            <h2><span>Testimonios</span></h2>
            <div className="row">
                {
                    testimonios.map((testimonio, index) => {
                        const clase = `testimonio-item-div f${index + 1}`;
                        return (
                            <div className="col-md-3 testimonio-item" key={index}>
                                <div className={clase}>
                                    <h4>{testimonio.usuario}</h4>
                                    <p className="description">{testimonio.descripcion}</p>
                                    <p className="fecha">{testimonio.fecha}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Testimonios;
