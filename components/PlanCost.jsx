import React, {useContext} from 'react';
import pageContext from "../context/pages/pageContext";

function PlanCost() {
    const { costoPremium } = useContext(pageContext)
    return (
        <div className="container">
            <div className="row">
                <section className="col-sm-12 maincontent">
                    <h3>Costo</h3>
                    <p>{costoPremium}</p>
                </section>
            </div>
        </div>
    );
}

export default PlanCost;
