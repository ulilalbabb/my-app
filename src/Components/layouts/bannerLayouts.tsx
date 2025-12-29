import Image from "next/image"
import Button from "../elements/Button/Button"

const BannerLayouts = () => {
    return (
        <div className="bg-slate-100 md:flex">
                    <Image
                        src="/assets/banner.png" 
                        width={500} 
                        height={500} 
                        alt="banner"
                        className="w-full md:w-1/2" 
                    />
            <div className="pl-7 py-10 md:pl-14 md:pt-20 flex flex-col gap-2 md:gap-5">
                <h1 className="text-blue-500 font-bold">
                    SALE UP TO 50% OFF
                </h1>
                <h2 className="font-semibold text-3xl">
                    HUNDREDS of <br />New lower prices!
                </h2>
                <p className="pr-5">
                    It's more affordable than ever to give every room a makeover.
                </p>
                <div>
                    <Button
                        variant="underline underline-offset-5 decoration-2"
                    >
                        Shop Now →
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BannerLayouts