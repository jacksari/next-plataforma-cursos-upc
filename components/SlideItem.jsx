import React from 'react';
import {  SwiperSlide } from 'swiper/react';

function SlideItem({slider}) {
    //console.log(slider)
    const { titulo, subitulo, imagen } = slider;
    return (
        <SwiperSlide>
            <img src={imagen.url} alt=""/>
            <div className="container-slider">
                <h1>{ titulo }</h1>
                <p>{ subitulo }</p>
            </div>
        </SwiperSlide>
    );
}

export default SlideItem;
