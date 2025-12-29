import Image from "next/image";
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";

const MainCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:px-6 md:py-10 lg:px-34">

            {/* Living Room */}
            <div className="col-span-1 row-span-2 bg-gray-100 rounded-lg p-6 flex flex-col">
                <h2 className="text-3xl font-semibold">Living Room</h2>
                <Link
                    href="#"
                    className="flex items-center pt-2 group underline underline-offset-5 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                        Shop Now
                        <IoIosArrowRoundForward size={25} className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out"/>
                </Link>
                <Image 
                    src="/assets/1.png" 
                    width={300} 
                    height={300}
                    alt="Chair" 
                    className="mt-auto" 
                />
            </div>

            {/* Bedroom */}
            <div className="bg-gray-100 rounded-lg p-6 flex items-end">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Bedroom
                    </h2>
                    <Link
                        href="#"
                        className="flex items-center pt-2 group underline underline-offset-5 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                            Shop Now
                            <IoIosArrowRoundForward size={25} className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                    </Link>
                </div>
                <Image 
                    src="/assets/2.png" 
                    width={400} 
                    height={400}
                    alt="Drawer" 
                    className="mt-auto" 
                />
            </div>

            {/* Kitchen */}
            <div className="bg-gray-100 rounded-lg p-6 flex items-end">
                <div>
                    <h2 className="text-3xl font-semibold">Kitchen</h2>
                    <Link
                        href="#"
                        className="flex items-center pt-2 group underline underline-offset-5 hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                    >
                        Shop Now
                        <IoIosArrowRoundForward size={25} className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                    </Link>
                </div>
                <Image 
                    src="/assets/3.png" 
                    width={400} 
                    height={400}
                    alt="Toaster" 
                    className="mt-auto" 
                />
            </div>
        </div>
    )
}

export default MainCard