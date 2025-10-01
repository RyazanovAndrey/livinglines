'use client'
import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { sliderList } from '@/data';

function SliderHome() {

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            // autoplay
            loop
        >
            {sliderList.map((item, index) => (
                <SwiperSlide key={index} className='relative text-white'>
                    <div className="absolute top-[30%] left-[20%] z-40 space-y-2 max-w-xl">
                        <div className="uppercase desc-home">{item.desc}</div>
                        <div className="font-kanit text-8xl title-home">{item.title}</div>
                        <p className='content-home'>{item.content}</p>
                        <Link href={'/'} className='border py-3 px-12 rounded-sm inline-flex items-center gap-x-5 btn-home'>{item.btnTitle}<ChevronRight /></Link>
                    </div>
                    <div className="absolute bg-black/60 inset-0"></div>
                    <Image src={item.image} alt='' width={1920} height={800} priority className='object-cover' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderHome