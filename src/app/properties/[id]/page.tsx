import TitlePage from "@/components/TitlePage";
import { galleryList } from "@/data";
import Image from "next/image";

type TProps = {
    params: Promise<{ id: string }>
}

interface IList {
    id: string,
    image: string,
    title: string,
    price: number
}

export default async function Page({ params } : TProps) {

    const { id } = await params
    const data: IList | undefined = galleryList.find(item => item.id == id)

    return (
        <>
            <TitlePage title="About" />
            <section className="py-20">
                <div className="container mx-auto px-3">
                    <div className="grid grid-cols-2 gap-x-20">
                        <div className="">
                            {/* <div className="w-[700px] h-[400px] bg-gray-500"></div> */}
                            <div className="w-[700px] h-[400px] overflow-hidden">
                                <Image src={data?.image} width={700} height={400} alt="" priority />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="space-y-5">
                                <div className="font-kanit text-5xl">{data?.title}</div>
                                <div className="text-2xl">$ {data?.price.toLocaleString('ru-Ru')}</div>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum nemo voluptatum delectus quia similique eligendi corporis iusto alias necessitatibus rem possimus ratione adipisci atque at reiciendis molestias odio totam labore consequuntur aperiam nisi error, voluptatem in. Optio, laboriosam velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-3 mb-20">
                <div className="text-3xl font-kanit mb-5">Description</div>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat veritatis ex cumque laboriosam, libero, maxime expedita at, atque cum dolorum minima excepturi iste dolor quidem vero sequi? Rerum, quas reiciendis!</p>
            </section>
        </>

    );
}