import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import pageContext from "../context/pages/pageContext";
import SliderBola from "./SliderBola";
SwiperCore.use([Autoplay]);


function HeaderHome() {
    const { sliders, videoHome } = useContext(pageContext)
    //console.log(sliders)

    return (
        <header id="head">
            {
                videoHome ? (
                    <div className="swiper-container-index">
                        <img src="/img/slides/img1.jpg" alt=""/>
                    </div>
                ) : (
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => {}}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                    >
                        {
                            sliders ? (
                                sliders.map((slider, index) => {
                                    const { titulo, subitulo, imagen } = slider;
                                    const img = `${process.env.backendURL}${imagen.url}`;
                                    const numSlider = index + 1;
                                    //console.log(numSlider)
                                    return (
                                        <SwiperSlide key={index} >
                                            <img src={img} alt=""/>
                                            <div className="num-sliders">
                                                <SliderBola sliders={sliders} num={numSlider}/>
                                            </div>
                                            <div className="container-slider">
                                                <h1>{ titulo }</h1>
                                                <p>{ subitulo }</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            ) : null
                        }
                    </Swiper>
                )
            }

        </header>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default HeaderHome;
