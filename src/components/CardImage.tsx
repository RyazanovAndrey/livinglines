import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type TProps = {
    id: string,
    image: string,
    title: string,
    price: string,
}

function CardImage({ id, image, title, price }: TProps) {

    return (
        <Link href={`/properties/${id}`}>
            <div className="relative group overflow-hidden transition-all cursor-pointer">
                <Image src={'/livinglines' + image} alt='' width={500} height={500} className='group-hover:scale-105 transition-all' />
                <div className="absolute -bottom-5 flex w-full px-4 justify-between items-center font-bold text-white group-hover:bottom-2 transition-all duration-300 z-40">
                    <div className="">{title}</div>
                    <div className="">$ {price}</div>
                </div>
                <div className="absolute bg-gradient-to-t from-black/80 inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
        </Link>
    )
}

export default CardImage