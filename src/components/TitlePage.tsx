
type TProps = {
    title: string
}

function TitlePage({ title }: TProps) {
    return (
        <section className="relative h-[200px] overflow-hidden bg-gray-200 w-full flex items-center justify-center" style={{ backgroundImage: `url('/livinglines/images/banner-2.jpg')`}}>
            <div className='text-4xl text-white font-kanit'>{title}</div>
        </section>
    )
}

export default TitlePage