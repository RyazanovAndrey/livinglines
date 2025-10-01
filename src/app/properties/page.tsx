import Gallery from "@/sections/Gallery";
import { Metadata } from "next";
import TitlePage from "@/components/TitlePage";
import { getData } from "@/helpers";

export const metadata: Metadata = {
    title: "All Properties",
    description: "Interior & Architecture Design Solutions",
};

export default async function Page() {

    const dataList = await getData('https://68dd0e537cd1948060ac38cf.mockapi.io/data')

    return (
        <>
            <TitlePage title="Properties"/>
            <Gallery dataList={dataList} />
        </>
    );
}