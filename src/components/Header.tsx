'use client'
import React, { useEffect, useState } from 'react'
import { navLinks } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram } from 'lucide-react'

function Header() {

    const path = usePathname()
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const scrollHeader = () => setIsScroll(window.scrollY > 100)
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.removeEventListener('scroll', scrollHeader)
        }
    }, [])

    return (
        <header className={`fixed w-full py-4 z-50 text-white ${isScroll ? 'bg-white shadow-lg' : ''}`}>
            <div className="container mx-auto px-3 flex justify-between items-center">
                <Link href={'/'} className='text-3xl font-kanit'><span className={isScroll ? 'text-black' : ''}>Living </span><span className='text-accent'>Lines</span></Link>
                <div className="flex gap-x-10 items-center">
                    {navLinks.map((item, index) => {
                        return <Link key={index} href={item.href} className={`py-2 px-4 rounded-full ${isScroll ? 'text-black' : 'text-white'} ${path == item.href || path.startsWith(item.href) && item.href !== '/'  ? 'bg-gray-200 active-link' : ''}`}>{item.title}</Link>
                    })}
                </div>
                <div className="flex gap-x-3">
                    <Link href={'/'}>
                        <div className="size-8 bg-white rounded-full flex items-center justify-center"><Facebook color='black' /></div>
                    </Link>
                    <Link href={'/'}>
                        <div className="size-8 bg-white rounded-full flex items-center justify-center"><Instagram color='black' /></div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header