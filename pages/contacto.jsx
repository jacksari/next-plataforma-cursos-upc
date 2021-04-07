import React from 'react';
import Layout from "../components/layout/Layout";
import HeaderBreadcrumb from "../components/layout/HeaderBreadcrumb";
import ContactoForm from "../components/ContactoForm";

function Contacto(props) {
    return (
        <Layout path="contacto">
            <HeaderBreadcrumb title="Contacto" description="Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!"/>
            <ContactoForm/>
        </Layout>
    );
}

export default Contacto;
