import React from "react";

import { LinkIcon } from "@heroicons/react/20/solid";

type props = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    setArticle: React.Dispatch<
        React.SetStateAction<{
            url: string;
            summary: string;
        }>
    >;
    article: {
        url: string;
        summary: string;
    };
};

export default function Form({ handleSubmit, setArticle, article }: props) {
    return (
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
    );
}
