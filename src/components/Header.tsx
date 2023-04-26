import React from "react";

export default function Header() {
    return (
        <>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-6xl text-center">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                    OpenAI GPT-2
                </span>
            </h1>
            <h2 className="max-w-2xl mt-5 text-lg text-center text-[#ffffffb2] sm:text-xl">
                Simplify your reading with Summize, an open-source article
                summarizer that transforms lengthy articles into clear and
                concise summaries.
            </h2>
        </>
    );
}
