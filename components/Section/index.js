'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'


export default function Section({ SEC_ID, children, initial_animation }) {
    
    const initial_y = initial_animation === true ? -100 : 0
    const initial_opacity = initial_animation === true ? 0 : 1

    const {ref} = useSectionInView(SEC_ID);

    return (
        <motion.section id={SEC_ID} className='lg:my-5 lg:mx-2 lg:px-5 lg:py-10 my-3 px-1 flex justify-around content-center rounded-md justify-self-center w-full scroll-mt-48'
            ref={ref}
            initial={{ y: initial_y, x: "0%", opacity: initial_opacity }}
            animate={{ y: 0, x: "0%", opacity: 1 }}
            transition={initial_animation === true ? { duration: 0.5 } : ''}
        >

            {children}

        </motion.section>
    )
}
