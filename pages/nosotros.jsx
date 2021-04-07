import React from 'react';
import Layout from "../components/layout/Layout";
import HeaderBreadcrumb from "../components/layout/HeaderBreadcrumb";
import AboutContent from "../components/AboutContent";
import AboutTeam from "../components/AboutTeam";

function Nosotros(props) {
    return (
        <Layout path="nosotros">
            <HeaderBreadcrumb title="Nosotros" description="Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!"/>
            <AboutContent/>
            <AboutTeam/>
        </Layout>
    );
}

export default Nosotros;
