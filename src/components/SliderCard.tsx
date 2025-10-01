'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderImg } from '@/data';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

export function SliderCard() {

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {sliderImg.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image src={item} width={500} height={300} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default SliderCard