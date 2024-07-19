import React from "react";


export default function ArenaLayout ({children,}: any) {
    return (
        <section className="h-full w-full md:mt-32 mt-8 flex flex-col items-center -p-2">
            {children}
        </section>
    )
}