import SliderHome from "@/components/SliderHome";
import SliderLong from "@/components/SliderLong";
import SliderProperties from "@/components/SliderProperies";
import SliderTest from "@/components/SliderTest";
import TitleSection from "@/components/TitleSection";
import { getData } from "@/helpers";
import DesignArchitecture from "@/sections/DesignArchitecture ";
import DesignPropcess from "@/sections/DesignPropcess";
import DesignSolutions from "@/sections/DesignSolutions";
import Gallery from "@/sections/Gallery";
import LineWord from "@/sections/LineWord";
import Services from "@/sections/Services";

export default async function Page() {

  const dataList = await getData('https://68dd0e537cd1948060ac38cf.mockapi.io/data')

  return (
    <>
      <section className="">
        <SliderHome />
      </section>

      <LineWord />
      <DesignSolutions />
      <DesignPropcess />
      <Services />

      <section className="py-30">
        <div className="container mx-auto px-3">
          <TitleSection title="Our properies" sub="View More" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" btnContent='All Services' />
          <div className="mt-20">
            <SliderProperties dataList={dataList} />
          </div>
        </div>
      </section>

      <LineWord />
      <DesignArchitecture />
      <Gallery dataList={dataList} />

      <section className="py-30">
            <div className="container mx-auto px-3">
              <TitleSection title="Client Testimonials" sub="Testimonials" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae neque cumque natus reprehenderit necessitatibus eveniet, et illum ratione iure?" />
              <SliderTest />
            </div>
      </section>

      <SliderLong />
    </>
  );
}