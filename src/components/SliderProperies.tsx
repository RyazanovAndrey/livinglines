'use client'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryList } from '@/data';

import 'swiper/css';
import 'swiper/css/navigation';
import CardImage from './CardImage';

function SliderProperties() {

    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                loop
            >
                {galleryList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardImage {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SliderProperties