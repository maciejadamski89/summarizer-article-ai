import React from "react";

export default function Label({ title }: { title: string }) {
    return <h2 className="mt-10 text-lg font-semibold text-white">{title}</h2>;
}
