import React, {useContext} from 'react';
import pageContext from "../context/pages/pageContext";
import TeamItem from "./TeamItem";

function AboutTeam() {
    const { team, teamNosotros } = useContext(pageContext)

    return (
        <section className="team-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="nosotros-h3">Nuestro Team</h3>
                        <p>{teamNosotros}</p>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    {
                        team.map((team, index) => (
                            <TeamItem team={team} key={index}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;
