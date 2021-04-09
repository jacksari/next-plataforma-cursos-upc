import React, {useContext} from 'react';
import pageContext from "../context/pages/pageContext";
import PlanItem from "./PlanItem";

function Plans() {
    const { rangoPremium, planes } = useContext(pageContext)
    return (
        <section className="container">
            <div className="heading">
                <h3>Rango de planes</h3>
                <p>{rangoPremium}</p>
                <br/>
            </div>
            <div className="row flat">
                {
                    planes.map((plan, index) => (
                        <PlanItem plan={plan} key={index} />
                    ))
                }

            </div>
        </section>
    );
}

export default Plans;
