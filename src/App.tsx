import React from "react";

import Hero from "./components/Hero";
import Core from "./components/Core";

export default function App() {
    return (
        <main>
            <div className="main">
                <div className="app">
                    <Hero />
                    <Core />
                </div>
            </div>
        </main>
    );
}
