import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";

export default function Hero() {
    return (
        <header className="flex flex-col items-center justify-center w-full">
            <Navbar />
            <Header />
        </header>
    );
}
