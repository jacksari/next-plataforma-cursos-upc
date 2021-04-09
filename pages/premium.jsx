import React, { useContext } from 'react';
import Layout from "../components/layout/Layout";
import HeaderBreadcrumb from "../components/layout/HeaderBreadcrumb";
import PlanCost from "../components/PlanCost";
import Plans from "../components/Plans";
import pageContext from "../context/pages/pageContext";

function Premium() {
    const { titlePremium, subtitlePremium } = useContext(pageContext)
    return (
        <Layout path="premium">
            <HeaderBreadcrumb title={titlePremium} description={subtitlePremium}/>
            <PlanCost/>
            <Plans/>
        </Layout>
    );
}

export default Premium;
