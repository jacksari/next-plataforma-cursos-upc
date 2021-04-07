import React from 'react';
import Layout from "../../components/layout/Layout";
import HeaderBreadcrumb from "../../components/layout/HeaderBreadcrumb";
import CourseDetails from "../../components/CourseDetails";

function CursosDetails() {
    return(
        <Layout path="cursos">
            <HeaderBreadcrumb title="Curso 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!"/>
            <CourseDetails/>
        </Layout>
    );
}

export default CursosDetails;
