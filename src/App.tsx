import React from "react";

import Hero from "./components/Hero";
import Demo from "./components/Demo";

export default function App() {
    return (
        <main>
            <div className="main">
                <div className="app">
                    <Hero />
                    <Demo />
                </div>
            </div>
        </main>
    );
}
