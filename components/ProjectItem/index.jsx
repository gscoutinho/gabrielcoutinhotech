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
            <div className='bg-neutral-100 lg:w-4/5 w-full flex flex-row justify-between my-3 
    hover:rounded-xl hover:border-solid-2 hover:border-neutral-500 hover:shadow-xl'>
                <div className='w-3/5 px-4 flex flex-col content-between'>
                    <h3>{children.title}</h3>

                    <p className='text-md font-light text-left '>{children.description}</p>

                    <div className='flex flex-row flex-wrap my-3 py-3 '>
                        {children.skills.map(item => <span key={item} className='mr-2 mb-2 bg-neutral-700 p-1 px-3 text-neutral-100 rounded-lg font-light text-sm'>{item}</span>)}
                    </div>
                </div>

                <div className='w-2/5 h-full pt-3 pl-3 hidden'>
                    {/* <Image
                        src={children.image}
                        height={250}
                        width={250}
                    /> */}
                </div>
            </div>
        </Link>

    )
}
