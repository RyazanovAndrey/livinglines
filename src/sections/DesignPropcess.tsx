import TitleSection from '@/components/TitleSection'
import { propcessList } from '@/data'
import Image from 'next/image'
import React from 'react'

function DesignPropcess() {
    return (
        <section className="mt-30 bg-section py-30">
            <div className="container mx-auto px-3">
                <TitleSection title="Our Design Process" sub="Process" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" btnContent='Company info' />
                <div className="grid grid-cols-4 mt-20 gap-x-5">
                    {propcessList.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-5">
                            <div className="relative bottom-0 bg-white w-[120px] h-[120px] rounded-full p-3 flex items-center justify-center cursor-pointer group hover:bottom-1 transition-all">
                                <div className="group-hover:rotate-y-[180deg] transition-all duration-500">
                                    <Image src={item.image} alt="" width={70} height={70} className="" />
                                </div>
                                <span className="absolute top-0 right-0 bg-black size-8 rounded-full text-white flex items-center justify-center">{index + 1}</span>
                            </div>
                            <div className="">{item.title}</div>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DesignPropcess