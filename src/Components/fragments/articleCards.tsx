import Image from "next/image"
import article from "@/src/Components/Data/article.json"
import Button from "../elements/Button/Button"

const ArticleCards = () => {
    return (
        <div className="md:flex md:gap-3">
            {article.map((src, index) => (
                <div key={index} className="flex flex-col gap-3 md:justify-between">
                        <Image 
                            src={src.image}
                            width={500}
                            height={500}
                            alt="article"
                        />
                        <h1 className="font-semibold">{src.title}</h1>
                        <div>
                            <Button
                                variant="underline underline-offset-5 pb-5">
                                    Read More →
                            </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticleCards