import TitleSection from '@/components/TitleSection'
import { architectureList } from '@/data'
import Image from 'next/image'
import React from 'react'

function DesignArchitecture() {
    return (
        <section className="bg-section py-30">
            <div className="container mx-auto px-3">
                <TitleSection title="Architecture Design Solutions" sub="All services" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" btnContent='All Services' />
                <div className="grid grid-cols-3 mt-20 gap-5">
                    {architectureList.map((item, index) => (
                        <div key={index} className="relative top-0 border-1 border-gray-500/20 rounded-2xl p-5 cursor-pointer hover:-top-1 hover:shadow-xl/10 transition-all">
                            <Image alt="" src={item.image} width={70} height={70} />
                            <div className="text-2xl">{item.title}</div>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DesignArchitecture 