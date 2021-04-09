import React from 'react';
import {  SwiperSlide } from 'swiper/react';

function SlideItem({slider}) {
    //console.log(slider)
    const { titulo, subitulo, imagen } = slider;
    const img = `${process.env.backendURL}${imagen.url}`;
    console.log(img)
    return (
        <SwiperSlide>
            <img src={img} alt=""/>
            <div className="container-slider">
                <h1>{ titulo }</h1>
                <p>{ subitulo }</p>
            </div>
        </SwiperSlide>
    );
}

export default SlideItem;
