'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { testList } from '@/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

function SliderTest () {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      grabCursor={true}
      className='mt-20'
      loop
    >
        {testList.map((item, i) => (
            <SwiperSlide key={i}>
                <div className="bg-gray-100 p-5 rounded-md space-y-5">
                    <Image src={'/images/qoute.svg'} alt='' width={50} height={50}/>
                    <p>{item.content}</p>
                    <div className="flex items-center justify-between">
                        <Image src={'/images/User.jpg'} alt='' width={50} height={50} />
                        <div className="">
                            <p className='font-semibold'>{item.name}</p>
                            <p>{item.city}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderTest