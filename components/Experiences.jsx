import React from 'react';
import ExperienceItem from "./ExperienceItem";

function Experiences() {
    return (
        <div className="container p-5">
            <div className="row">
                <ExperienceItem type="b1"/>
                <ExperienceItem type="b2"/>
                <ExperienceItem type="b3"/>
                <ExperienceItem type="b4"/>
            </div>
        </div>
    );
}

export default Experiences;
