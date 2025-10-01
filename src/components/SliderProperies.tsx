'use client'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CardImage from './CardImage';

interface IProps { id: string, image: string, title: string, price: string }

function SliderProperties({ dataList }: { dataList: IProps[] }) {

    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                loop
            >
                {dataList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardImage {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SliderProperties