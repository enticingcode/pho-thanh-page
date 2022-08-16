// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from "swiper"

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"

import "../styles/ImageCarousel.css"
// Import Swiper styles
import 'swiper/css';

let imgSlider = () => {
    return (
        <Swiper
            modules={[Scrollbar, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='slide-1'></SwiperSlide>
            <SwiperSlide className='slide-2'></SwiperSlide>
            <SwiperSlide className='slide-3'></SwiperSlide>
            ...
        </Swiper>
    );
};

export default imgSlider





