import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function ProjectItem({ children }) {
    return (
        <Link
            href={children.href}
            className='w-full flex flex-col items-center'
            scroll={true}
        >
            <div className='mx-6 my-3 pb-6 bg-neutral-50 lg:w-3/5 flex flex-row items-center   
    hover:rounded-xl hover:border-solid-2 hover:border-neutral-500 hover:shadow-xl shadow-lg rounded-lg
    group
    group-hover:bg-sky-300/50'>
                <div className='w-3/5 px-4 flex flex-col content-between mx-2'>
                    <h3>{children.title}</h3>
                    <p className='md:hidden block text-md font-light text-left mt-4 pl-2 pr-2'>{children.shortdescription}</p>
                    <p className='md:text-xl text-md font-light text-left pr-12 pl-8 mt-4 md:block hidden'>{children.description}</p>

                </div>

                <div className='w-2/5 h-full px-0 md:pt-3 md:pl-3 pt-6 flex justify-end pr-3 mt-10'>
                    <Image 
                        src={children.image}
                        width={400}
                        height={400}
                        quality={100}
                        alt={children.title}
                        className='rounded-xl shadow-lg md:w-[250px] md:h-[250px]'
                    
                    />
                </div>
            </div>
        </Link>

    )
}
