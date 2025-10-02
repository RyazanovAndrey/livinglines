import TitlePage from "@/components/TitlePage";

export default function Page() {
    return (
        <>
            <TitlePage title="Contact"/>
            <div className="container mx-auto px-3 py-30">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h3 className="text-5xl font-kanit">Our contact</h3>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, delectus alias. Porro dolorum neque natus pariatur velit, laudantium soluta quae.</p>
                        <div className="grid grid-cols-3 gap-x-3 mt-10">
                            <div className="border p-3 rounded-md border-gray-300">tel: +91 12345678987</div>
                            <div className="border p-3 rounded-md border-gray-300">email: livinglines@gmail.com</div>
                            <div className="border p-3 rounded-md border-gray-300">adress: </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}