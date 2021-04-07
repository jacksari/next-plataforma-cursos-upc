import React from 'react';
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children, path}) {
    return (
        <>
            <Head
            >
                <title>Home</title>
                <link rel="favicon" href="/favicon.png"/>
                <link rel="stylesheet" media="screen" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700"/>
                <link rel="stylesheet" href="/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/bootstrap-theme.css" media="screen"/>
                <link rel="stylesheet" href="/style.css"/>
                <link rel='stylesheet' id='camera-css'  href='/camera.css' type='text/css' media='all'/>
            </Head>
            <Header path={path}/>
            {
                children
            }
            <Footer/>
        </>
    );
}

export default Layout;
