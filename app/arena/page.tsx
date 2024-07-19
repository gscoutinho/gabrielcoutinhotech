import React from "react";
import Image from "next/image";

import ProjectItem from "@/components/ProjectItem";
import { arenaGames } from "@/lib/data";

export default function Arena({ children, }: any) {
    return (
        <>
            <h2 className="text-center w-full">Arena!</h2>
            <div className="flex flex-col lg:flex-row w-full md:w-3/5 gap-12 p-8 rounded-lg shadow-b-lg shadow-lg -mt-24 items-center">
                <div className="md:text-lg text-md flex flex-col gap-6 md:gap-8 p-4 md:p-8 rounded-lg">
                    <p className="leading-relaxed text-gray-700 lg:block hidden">
                        Welcome to Arena, your ultimate destination for challenging and captivating puzzle games. Whether you're a casual gamer or a puzzle enthusiast, Arena offers a diverse collection of games designed to test your wits and keep you entertained for hours.
                    </p>
                    <p className="leading-relaxed text-gray-700 lg:block hidden">
                        At Arena, we pride ourselves on offering a wide variety of puzzle games that cater to all skill levels and preferences. From classic brain teasers and logic puzzles to modern, innovative games that push the boundaries of creativity and problem-solving, there's something for everyone. Each game is designed to engage your mind, challenge your thinking, and provide a satisfying gaming experience.
                    </p>

                </div>
                <Image
                    src="/arena_place.png"
                    alt="Arena place"
                    width={250}
                    height={250}
                    style={{ objectFit: 'cover' }}
                    priority={true}
                    placeholder="empty"
                    className="shadow-3xl rounded-3xl opacity-85 md:w-[400px] md:h-[400px]"
                />
                <p className="leading-relaxed text-gray-700 lg:hidden block">
                    Welcome to Arena, your ultimate destination for challenging and captivating puzzle games.
                </p>
            </div>

            <div id="" className="h-96 shadow-xl mt-16 w-full bg-gradient-to-t from-gray-950 to-gray-800 text-neutral-200">
                
            </div>


            <div className='flex flex-col items-center w-full bg-neutral-100/75 shadow-2xl h-full border-t-2 border-neutral-50/75'>
                <div className=''>
                    {
                        arenaGames.map((item, idx) => <ProjectItem key={idx}>{item}</ProjectItem>)
                    }
                </div>
            </div>
        </>



    )
}