import TitleSection from '@/components/TitleSection'
import { solutionList } from '@/data'
import Image from 'next/image'
import React from 'react'

function Services() {
    return (
        <section className="py-30">
            <div className="container mx-auto px-3">
                <TitleSection title="Interior Design Solution" sub="Our Services" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" btnContent='All Services' />
                <div className="grid grid-cols-3 mt-20 gap-5">
                    {solutionList.map((item, index) => (
                        <div key={index} className="relative top-0 border-1 border-gray-500/20 rounded-2xl p-5 cursor-pointer hover:-top-1 hover:shadow-xl/10 transition-all">
                            <Image alt="" src={item.image} width={100} height={100} />
                            <div className="text-2xl">{item.title}</div>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services