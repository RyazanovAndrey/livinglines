import CardImage from '@/components/CardImage'
import TitleSection from '@/components/TitleSection'

interface IProps { id: string, image: string, title: string, price: string }

function Gallery({ dataList } : { dataList: IProps[] }) {

    return (
        <section className="py-30">
            <div className="container mx-auto px-3">
                <TitleSection title="Available Properties" />
                <div className="grid grid-cols-4 mt-20 gap-5">
                    {dataList.map((item, i) => (
                        <CardImage key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery