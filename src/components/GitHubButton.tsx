import React from "react";

export default function GitHubButton() {
    return (
        <div className="relative w-40 group">
            <button className="w-full text-base font-medium text-white no-underline transition-all duration-300 bg-black border-transparent rounded dark:text-black dark:bg-white md:leading-6 ">
                <a
                    className="block py-3"
                    href="https://github.com/maciejadamski89/summarizer-article-ai"
                    target="_blank"
                >
                    GitHub
                </a>
            </button>
            <div className="absolute top-0 w-full h-full px-12 transition-all duration-300 bg-red-100 rounded-full opacity-0 -z-10 blur-xl group-hover:opacity-70 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gradients_translatingGlow__wxytK"></div>
        </div>
    );
}
