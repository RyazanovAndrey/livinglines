'use client'
import React, { useState } from 'react'

function TabsAbout() {

    const [toggleTab, setToggleTab] = useState<string>('History')
    const tabs: string[] = ['History', 'Mission', 'Vision']

    return (
        <>
            <div className="flex gap-x-10 border-b-1 border-b-gray-200">
                <ul className='flex gap-x-10 border-b-1 border-b-gray-200'>
                    {tabs.map((item, i) => (
                        <li onClick={() => setToggleTab(item)} key={i} className={`cursor-pointer pb-2 ${toggleTab == item ? 'border-b-4 border-t-gray-200' : ''}`}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="pt-5">
                {toggleTab == 'History' && (
                    <p>1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorem, tempora aut possimus voluptatem molestiae hic sequi earum repellendus quisquam.</p>
                )}
                {toggleTab == 'Mission' && (
                        <p>2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorem, tempora aut possimus voluptatem molestiae hic sequi earum repellendus quisquam.</p>
                )}
                {toggleTab == 'Vision' && (
                        <p>3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorem, tempora aut possimus voluptatem molestiae hic sequi earum repellendus quisquam.</p>
                )}
            </div>
        </>
    )
}

export default TabsAbout