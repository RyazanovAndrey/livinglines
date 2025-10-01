'use client'
import React, { useState } from 'react'

interface IList {
    'History': string,
    'Mission': string,
    'Vision': string,
}

function TabsAbout() {

    const [isActive, setIsActive] = useState<string>('History')

    const tabs: string[] = ['History', 'Mission', 'Vision']
    const tabsList: IList = {
        'History': '1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorem, tempora aut possimus voluptatem molestiae hic sequi earum repellendus quisquam.',
        'Mission': '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium!',
        'Vision': ' 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde iste accusantium adipisci aliquam aspernatur, commodi laudantium ex animi. Error molestias provident distinctio unde esse deserunt nulla assumenda nam sunt.',
    }

    return (
        <>
            <div className="flex gap-x-10 border-b-1 border-b-gray-200">
                {tabs.map((item, key) => (
                    <div key={key} onClick={() => setIsActive(item)} className={`cursor-pointer pb-2 ${isActive == item ? 'border-b-4 border-t-gray-200' : ''}`} >{item}</div>
                ))}
            </div>
            <div className="pt-5">
                {tabsList[isActive]}
            </div>
        </>
    )
}

export default TabsAbout