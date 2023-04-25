import React from "react";
import { useState, useEffect } from "react";

import { useLazyGetSummaryQuery } from "../services/article";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function Demo() {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });

    const [allArticles, setAllArticles] = useState([{ summary: "", url: "" }]);

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articleFromLocalStorage = JSON.parse(
            localStorage.getItem("article") ?? "[]"
        );
        if (articleFromLocalStorage) {
            setAllArticles(articleFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("article", JSON.stringify(updatedAllArticles));
        }
    };

    return (
        <section className="w-full max-w-4xl mt-16">
            <div className="flex flex-col w-full gap-2">
                <h2 className="mt-4 text-lg font-semibold text-white">
                    Provider URL to summarize
                </h2>
                <form
                    className="relative flex items-center justify-center"
                    onSubmit={handleSubmit}
                >
                    <LinkIcon className="absolute left-0 w-5 ml-3 text-white" />
                    <input
                        className="block w-full p-10 py-4 pl-10 pr-12 overflow-hidden text-base font-medium leading-7 text-white no-underline bg-white rounded-xl bg-opacity-5"
                        onChange={(event) => {
                            setArticle({ ...article, url: event.target.value });
                        }}
                        type="url"
                        placeholder="Enter a URL"
                        value={article.url}
                        required
                    />
                </form>
                <h2 className="mt-10 text-lg font-semibold text-white">
                    Search history
                </h2>
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
                        <svg
                            className="w-10 h-10 mr-3 -ml-1 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    ) : error ? (
                        // @ts-ignore
                        <p className="text-red-500">{error?.data.error}</p>
                    ) : (
                        article.summary && (
                            <div className="flex flex-col gap-3">
                                <h2 className="text-lg font-semibold text-white">
                                    Article Summary
                                </h2>
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
