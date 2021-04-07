import React, { useState } from 'react';
import ReactPlayer from "react-player";
import Head from "next/head";
import Link from "next/link";
import VideoContainer from "../../../components/VideoContainer";
import VideoTab from "../../../components/VideoTab";
import VideoHeader from "../../../components/VideoHeader";

function Overview() {

    return(
        <>
            <Head
            >
                <title>Home</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                      crossOrigin="anonymous"/>
            </Head>
            <div className="overview">
                <VideoHeader/>
                <div className="grid-video">
                    <VideoContainer/>

                    <VideoTab/>
                </div>
            </div>
        </>
    );
}

export default Overview;
