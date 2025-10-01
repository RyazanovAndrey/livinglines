import { ArrowRight } from 'lucide-react'

type TPropsTitle = {
    title: string,
    desc?: string,
    sub?: string,
    btnContent?: string
}

function TitleSection({ title, desc, sub, btnContent }: TPropsTitle) {
    return (
        <div className="grid grid-cols-2 gap-x-20">
            <h2 className="text-5xl font-kanit">{title}</h2>
            <div className="space-y-5">
                {sub && <div className="relative after:absolute after:top-[100%] after:left-0 after:w-full after:h-0.5 after:bg-accent inline-block font-bold uppercase">{sub}</div>}
                {desc && <p>{desc}</p>}
                {btnContent && <button className='flex items-center gap-x-2 cursor-pointer'>{btnContent}<ArrowRight size={16} /></button>}
            </div>
        </div>
    )
}

export default TitleSection