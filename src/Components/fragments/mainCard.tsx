import card from "@/src/Components/Data/mainCart.json"
import Image from "next/image";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";

const MainCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-34">

            {/* Living Room */}
            <div className="col-span-1 row-span-2 bg-gray-100 rounded-lg p-6 flex flex-col">
                <h2 className="text-3xl font-semibold">Living Room</h2>
                <Link
                    href="#"
                    className="text-sm text-gray-600 flex items-center gap-1 mt-1 hover:underline">
                        Shop Now →
                </Link>
                <Image 
                    src="/assets/1.png" 
                    width={300} 
                    height={300}
                    alt="Chair" 
                    className="mt-auto" />
            </div>

            {/* Bedroom */}
            <div className="bg-gray-100 rounded-lg p-6 flex items-end">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Bedroom
                    </h2>
                    <Link
                        href="#"
                        className="text-sm text-gray-600 flex items-center gap-1 mt-1 hover:underline">
                            Shop Now →
                    </Link>
                </div>
                <Image 
                    src="/assets/2.png" 
                    width={300} 
                    height={300}
                    alt="Drawer" className="mt-auto" />
            </div>

            {/* Kitchen */}
            <div className="bg-gray-100 rounded-lg p-6 flex items-end">
                <div>
                    <h2 className="text-3xl font-semibold">Kitchen</h2>
                    <Link
                        href="#"
                        className="text-sm text-gray-600 flex items-center gap-1 mt-1 hover:underline"
                    >
                        Shop Now →
                    </Link>
                </div>
                <Image 
                    src="/assets/2.png" 
                    width={300} 
                    height={300}
                    alt="Toaster" className="mt-auto" />
            </div>
        </div>
    )
}

export default MainCard