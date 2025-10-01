import Gallery from "@/sections/Gallery";
import { Metadata } from "next";
import TitlePage from "@/components/TitlePage";

export const metadata: Metadata = {
    title: "All Properties",
    description: "Interior & Architecture Design Solutions",
};


export default function Page() {
    return (
        <>
            <TitlePage title="Properties"/>
            <Gallery />
        </>
    );
}