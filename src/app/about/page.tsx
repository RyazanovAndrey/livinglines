import Image from "next/image";
import { Metadata } from "next";
import TitleSection from "@/components/TitleSection";
import DesignPropcess from "@/sections/DesignPropcess";
import Gallery from "@/sections/Gallery";
import TitlePage from "@/components/TitlePage";
import { getData } from "@/helpers";

export const metadata: Metadata = {
    title: "About us",
    description: "Interior & Architecture Design Solutions",
};

export default async function Page() {

    const res = await fetch('https://68dd0e537cd1948060ac38cf.mockapi.io/data')
    const dataList = await res.json()

    return (
        <>
            <TitlePage title="About"/>
            <section className="pt-30">
                <div className="container mx-auto px-3">
                    <TitleSection title="Interior & Exterior Solutions" sub="About us" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" />
                    <div className="mt-20 flex gap-x-20 items-center">
                        <div className="w-1/2 h-[300px] overflow-hidden">
                            <Image src={'/images/ab-vision-image1.jpeg'} width={500} height={500} alt="" />
                        </div>
                        <div className="w-1/2">
                            <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quod voluptatum ex commodi sint tenetur eveniet maxime distinctio nemo magnam? Eveniet incidunt debitis explicabo culpa sit beatae maxime architecto adipisci?</p>
                            <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque quod dolor voluptates magni iste nobis perspiciatis ad quisquam magnam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container mx-auto px-3">
                    <div className="mt-20 flex gap-x-20 items-center">
                        <div className="w-1/2">
                            <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quod voluptatum ex commodi sint tenetur eveniet maxime distinctio nemo magnam? Eveniet incidunt debitis explicabo culpa sit beatae maxime architecto adipisci?</p>
                            <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque quod dolor voluptates magni iste nobis perspiciatis ad quisquam magnam.</p>
                        </div>
                        <div className="w-1/2 h-[300px] overflow-hidden">
                            <Image src={'/images/ab-vision-image1.jpeg'} width={500} height={500} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <DesignPropcess />

            <Gallery dataList={dataList} />
        </>
    );
}