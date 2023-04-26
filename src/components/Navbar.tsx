import React from "react";

import GitHubButton from "./GitHubButton";
import Brand from "./Brand";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full py-3 mb-10 border-b-2 border-white border-opacity-5">
            <Brand />
            <GitHubButton />
        </nav>
    );
}
