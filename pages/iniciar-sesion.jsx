import React from 'react';
import Layout from "../components/layout/Layout";
import {useRouter} from "next/router";

function IniciarSesion(props) {
    const router = useRouter()
    const path = router.asPath.slice(1)
    return (
        <Layout path="iniciar-sesion">
            <h1>Iniciar Sesión</h1>
        </Layout>
    );
}

export default IniciarSesion;
