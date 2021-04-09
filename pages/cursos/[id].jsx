import React, { useContext, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import HeaderBreadcrumb from "../../components/layout/HeaderBreadcrumb";
import CourseDetails from "../../components/CourseDetails";
import pageContext from "../../context/pages/pageContext";
import {useRouter} from "next/router";

function CursosDetails() {
    const router = useRouter()
    const { getCourse, courseSelect, getTeacher } = useContext(pageContext)
    useEffect(() => {
        if(router.asPath.slice(8) !== '[i]'){
            getCourse(router.asPath.slice(8))
        }


    }, [router.asPath.slice(8)]);

    useEffect(() => {
        if(courseSelect){
            getTeacher(courseSelect)
        }
    }, [courseSelect]);

    return(
        <Layout path="cursos">
            {
                courseSelect ? (
                        <>
                            <HeaderBreadcrumb title={courseSelect.titulo} description={courseSelect.subtitulo}/>
                            <CourseDetails/>
                        </>
                ) : (
                    <div className="spinner"></div>
                )
            }
        </Layout>
    );
}

export default CursosDetails;
