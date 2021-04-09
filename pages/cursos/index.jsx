import React from 'react';
import Layout from "../../components/layout/Layout";
import HeaderBreadcrumb from "../../components/layout/HeaderBreadcrumb";
import Courses from "../../components/Courses";
import Categories from "../../components/Categories";

function Index(props) {
    return (
        <Layout path="cursos">
            <HeaderBreadcrumb title="Cursos" description="Listado de cursos en las diversas categorías que podrás llevar en la plataforma."/>
            <Courses/>
            <Categories/>
        </Layout>
    );
}

export default Index;
