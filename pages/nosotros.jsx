import React, { useContext } from 'react';
import Layout from "../components/layout/Layout";
import HeaderBreadcrumb from "../components/layout/HeaderBreadcrumb";
import AboutContent from "../components/AboutContent";
import AboutTeam from "../components/AboutTeam";
import pageContext from "../context/pages/pageContext";

function Nosotros() {
    const { titleNosotros, subtitleNosotros } = useContext(pageContext)
    return (
        <Layout path="nosotros">
            <HeaderBreadcrumb title={titleNosotros} description={subtitleNosotros}/>
            <AboutContent/>
            <AboutTeam/>
        </Layout>
    );
}

export default Nosotros;
