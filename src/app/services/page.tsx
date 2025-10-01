import Services from "@/sections/Services";
import LineWord from "@/sections/LineWord";
import DesignArchitecture from "@/sections/DesignArchitecture ";
import { Metadata } from "next";
import TitlePage from "@/components/TitlePage";

export const metadata: Metadata = {
    title: "Services",
    description: "Interior & Architecture Design Solutions",
};


export default function Page() {
    return (
        <>
            <TitlePage title="Services"/>
            <Services />
            <LineWord />
            <DesignArchitecture />
        </>
    );
}