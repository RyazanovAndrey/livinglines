'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

function SliderLong() {

    const sliderContent: string[] = ['/livinglines/images/social-slide-1.jpg', '/livinglines/images/social-slide-2.jpg', '/livinglines/images/social-slide-3.jpg', '/livinglines/images/social-slide-5.jpg']

    return (
        <Swiper
            loop
            slidesPerView={2}
            grabCursor={true}
            className='overflow-hidden h-[400px]'
        >
            {sliderContent.map((item, i) => (
                <SwiperSlide key={i}>
                    <Image src={item} width={960} height={300} alt='' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderLong