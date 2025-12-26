import Button from "../elements/Button/Button";
import ArticleCards from "../fragments/articleCards";

const ArticleLayouts = () => {
    return (
        <div className="px-7 md:px-34">
            <div className="flex justify-between py-7">
                <h1 className="text-3xl font-semibold">
                    Articles
                </h1>
                <Button
                    variant="underline underline-offset-5 text-sm">
                        More Articles →
                </Button>
            </div>
            <ArticleCards />
        </div>
    );
};

export default ArticleLayouts;