// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/pagination"

import "../styles/ImageCarousel.css"
// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            modules={[Scrollbar, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
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




