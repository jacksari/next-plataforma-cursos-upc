import React, { useState, useContext, useEffect } from 'react';
import Head from "next/head";
import VideoContainer from "../../../components/VideoContainer";
import VideoTab from "../../../components/VideoTab";
import VideoHeader from "../../../components/VideoHeader";
import pageContext from "../../../context/pages/pageContext";
import {useRouter} from "next/router";
import authContext from "../../../context/auth/authContext";

function Overview() {
    const router = useRouter()
    const { getSecciones, getCourse, getLecciones, getTeacher, courseSelect } = useContext(pageContext)
    const { getHome, getCourses, getNosotros, getTeam, getCategories, getPremium, getPageContacto } = useContext(pageContext)
    useEffect(() => {
        if(router.asPath.slice(8) !== '[i]'){
            getCourse(router.asPath.slice(17))
            getSecciones()
            getLecciones()
            //getTeacher()
            //console.log(router.asPath.slice(17))
        }

    }, [router.asPath.slice(8)]);

    useEffect(() => {
        if(courseSelect){
            getTeacher(courseSelect)
        }
    }, [courseSelect]);

    const { usuarioAutenticado, autenticado, token, usuario } = useContext(authContext)
    useEffect(() => {
        if(!autenticado && token){
            //console.log('foto')
            usuarioAutenticado()
            getHome()
            getCourses()
            getNosotros()
            getTeam()
            getCategories()
            getPremium()
            getPageContacto()
        }
        if(!token){
            router.push('/iniciar-sesion')
        }

    }, []);



    return(
        <>
            <Head
            >
                <title>Overview</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                      crossOrigin="anonymous"/>
            </Head>
            {
                autenticado && usuario ? (
                    <div className="overview">
                        <VideoHeader/>
                        <div className="grid-video">
                            <VideoContainer/>

                            <VideoTab/>
                        </div>
                    </div>
                ) : <p>cargando...</p>
            }
        </>
    );
}

export default Overview;
