import React from "react";
import { useState, useEffect } from "react";

import { useLazyGetSummaryQuery } from "../services/article";

import Form from "./Form";
import Loader from "./Loader";
import Label from "./Label";

type Article = {
    url: string;
    summary: string;
};

export default function Core() {
    const [article, setArticle] = useState<Article>({
        url: "",
        summary: "",
    });

    const [allArticles, setAllArticles] = useState<Article[]>([
        { summary: "", url: "" },
    ]);

    const [errorMessage, setErrorMessage] = useState<string | null>("");

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articleFromLocalStorage: Article[] = JSON.parse(
            localStorage.getItem("article") ?? "[]"
        );

        if (articleFromLocalStorage) {
            setAllArticles(articleFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        try {
            const { data } = await getSummary({ articleUrl: article.url });

            if (!data) {
                throw new Error("No data received from the API server.");
            }

            if (!data.summary) {
                throw new Error("No summary in data response.");
            }

            const newArticle = { ...article, summary: data.summary };
            setArticle(newArticle);

            const updatedAllArticles = [newArticle, ...allArticles];
            setAllArticles(updatedAllArticles);

            localStorage.setItem("article", JSON.stringify(updatedAllArticles));
        } catch (exception) {
            console.error(exception);
            setErrorMessage(
                `An error occurred while fetching the summary.
                Reson: ${exception} .Please try again.`
            );
        }
    };

    return (
        <section className="w-full max-w-4xl mt-16">
            <div className="flex flex-col w-full gap-2">
                <Label title="Provider URL with article to summarize" />
                <Form
                    handleSubmit={handleSubmit}
                    setArticle={setArticle}
                    article={article}
                />
                <Label title="Search history" />
                <div className="flex flex-col gap-1 overflow-y-auto max-h-60">
                    {allArticles.map((article, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(article)}
                            className="flex flex-row items-center justify-start w-full gap-4 p-4 overflow-hidden text-base font-medium leading-7 text-white no-underline bg-white rounded-xl bg-opacity-5"
                        >
                            <p className="text-sm font-medium">
                                {article?.url}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center max-w-full my-10">
                    {isFetching ? (
                        <div className="flex flex-col items-center justify-center">
                            <p className="mb-3 text-sm text-gray-400 font-base">
                                Please wait. It's take a while.
                            </p>
                            <Loader />
                        </div>
                    ) : error ? (
                        // @ts-ignore
                        <p className="text-red-400">{error?.data.error}</p>
                    ) : errorMessage ? (
                        <p className="text-red-400">{errorMessage}</p>
                    ) : (
                        article.summary && (
                            <div className="flex flex-col gap-3">
                                <Label title="Article Summary" />
                                <div className="w-full p-10 py-4 pl-10 pr-12 overflow-hidden text-base font-medium leading-7 text-gray-400 no-underline bg-white rounded-xl bg-opacity-5">
                                    <p>{article.summary}</p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
