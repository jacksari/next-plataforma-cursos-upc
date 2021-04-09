import React, { useContext } from 'react';
import Layout from "../components/layout/Layout";
import HeaderBreadcrumb from "../components/layout/HeaderBreadcrumb";
import ContactoForm from "../components/ContactoForm";
import pageContext from "../context/pages/pageContext";

function Contacto() {
    const { titleContacto, subtitleContacto } = useContext(pageContext)
    return (
        <Layout path="contacto">
            <HeaderBreadcrumb title={titleContacto} description={subtitleContacto}/>
            <ContactoForm/>
        </Layout>
    );
}

export default Contacto;
