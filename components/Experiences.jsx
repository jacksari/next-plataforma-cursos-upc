import React, {useContext} from 'react';
import ExperienceItem from "./ExperienceItem";
import pageContext from "../context/pages/pageContext";

function Experiences() {
    const { experiencias } = useContext(pageContext)
    return (
        <div className="container p-5">
            <h2><span>Experiencias</span></h2>
            <div className="row">
                {
                    experiencias.map((experiencia, index) => {
                        const type = `b${index + 1}`
                        return (
                            <ExperienceItem type={type} key={index} experiencia={experiencia}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Experiences;
