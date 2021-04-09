import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pageContext from "../context/pages/pageContext";

const index = {
    'z-index': '10'
}

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
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => {}}
                        autoplay={true}
                        loop={true}
                    >
                        {
                            sliders ? (
                                sliders.map((slider, index) => {
                                    const { titulo, subitulo, imagen } = slider;
                                    const img = `${process.env.backendURL}${imagen.url}`;
                                    return (
                                        <SwiperSlide key={index} >
                                            <img src={img} alt=""/>
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
