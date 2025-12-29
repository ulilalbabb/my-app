import Image from "next/image"
import article from "@/src/Components/Data/article.json"
import Button from "../elements/Button/Button"
import { IoIosArrowRoundForward } from "react-icons/io";

const ArticleCards = () => {
    return (
        <div className="md:flex md:gap-3">
            {article.map((src, index) => (
                <div key={index} className="flex flex-col gap-3 md:justify-between overflow-hidden relative">
                        <Image 
                            src={src.image}
                            width={500}
                            height={500}
                            alt="article"
                            className="hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                        <h1 className="font-semibold">{src.title}</h1>
                        <div>
                            <Button
                                variant="flex items-center group underline underline-offset-5 pb-5 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                                    Read More 
                                    <IoIosArrowRoundForward size={25} className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                            </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticleCards