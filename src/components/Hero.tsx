import React from "react";

export default function Hero() {
    return (
        <header className="flex flex-col items-center justify-center w-full">
            <nav className="flex items-center justify-between w-full py-3 mb-10 border-b-2 border-white border-opacity-5">
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                    Summarizer AI
                </h1>
                <div className="relative w-40 group">
                    <button className="w-full text-base font-medium text-white no-underline transition-all duration-300 bg-black border-transparent rounded dark:text-black dark:bg-white md:leading-6 ">
                        <a className="block py-3" href="/pack/docs">
                            GitHub
                        </a>
                    </button>
                    <div className="absolute top-0 w-full h-full px-12 transition-all duration-300 bg-red-100 rounded-full opacity-0 -z-10 blur-xl group-hover:opacity-70 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gradients_translatingGlow__wxytK"></div>
                </div>
                {/* <button className="text-base font-medium text-black no-underline transition-all duration-300 bg-white border-transparent rounded md:leading-6">
                    <a className="block px-12 py-3" href="/pack/docs">
                        GitHub
                    </a>
                </button>
                <div class="absolute bg-red-100 w-full h-full top-0 -z-10 rounded-full transition-all duration-300 blur-xl group-hover:opacity-70 opacity-0 gradients_translatingGlow__wxytK"></div> */}
            </nav>
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
        </header>
    );
}
