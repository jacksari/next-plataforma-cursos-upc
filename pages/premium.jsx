import React from 'react';
import Layout from "../components/layout/Layout";
import HeaderBreadcrumb from "../components/layout/HeaderBreadcrumb";
import PlanCost from "../components/PlanCost";
import Plans from "../components/Plans";

function Premium(props) {
    return (
        <Layout path="premium">
            <HeaderBreadcrumb title="Planes" description="Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!"/>
            <PlanCost/>
            <Plans/>
        </Layout>
    );
}

export default Premium;
