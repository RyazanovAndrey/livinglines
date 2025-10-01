import SliderCard from '@/components/SliderCard'
import TabsAbout from '@/components/TabsAbout'
import TitleSection from '@/components/TitleSection'
import React from 'react'

function DesignSolutions() {
    return (
        <section className="mt-20">
            <div className="container mx-auto px-3">
                <TitleSection title="Interior & Architecture Design Solutions" sub="About us" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" btnContent='Company info' />
                <div className="grid grid-cols-2 gap-x-20 mt-20">
                    <SliderCard />
                    <div className="">
                        <TabsAbout />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignSolutions