import CardImage from '@/components/CardImage'
import TitleSection from '@/components/TitleSection'
import { galleryList } from '@/data'
import React from 'react'

function Gallery() {
    return (
        <section className="py-30">
            <div className="container mx-auto px-3">
                <TitleSection title="Available Properties" />
                <div className="grid grid-cols-4 mt-20 gap-5">
                    {galleryList.map((item, i) => (
                        <CardImage key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery