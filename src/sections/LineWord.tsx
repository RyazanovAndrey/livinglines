import { lineWords } from '@/data'
import React from 'react'

function LineWord() {
    return (
        <section className="overflow-hidden py-5 flex">
            <div className="flex justify-between gap-x-3 pr-5 line-animation">
                {lineWords.map((item, index) => (
                    <div key={index} className="card-item">{item}</div>
                ))}
            </div>
            <div className="flex justify-between gap-x-3 pr-5 line-animation">
                {lineWords.map((item, index) => (
                    <div key={index} className="card-item">{item}</div>
                ))}
            </div>
        </section>
    )
}

export default LineWord