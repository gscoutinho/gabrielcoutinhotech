import React, {ReactNode} from 'react'


export default function GamesLayout({
children,
}: Readonly<{children: React.ReactNode}>){
return (
    <section className='mt-28 lg:w-2/4 w-full bg-gradient-to-br bg-white rounded-2xl shadow-2xl'>
        {children}
    </section>
)
}