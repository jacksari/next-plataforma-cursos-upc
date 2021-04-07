import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



function HeaderHome() {

    return (
        <header id="head">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {}}
                autoplay={true}
                loop={true}
            >
                <SwiperSlide>
                    <img src="/img/slides/img1.jpg" alt=""/>
                    <div className="container-slider">
                        <h1>Start Online Education</h1>
                        <p>Free Online education template for elearning and online education institute.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img2.jpg" alt=""/>
                    <div className="container-slider">
                        <h1>Start Online Education</h1>
                        <p>Free Online education template for elearning and online education institute.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/slides/img3.jpg" alt=""/>
                    <div className="container-slider">
                        <h1>Start Online Education</h1>
                        <p>Free Online education template for elearning and online education institute.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
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
