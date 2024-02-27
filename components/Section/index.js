'use client'
import { motion } from 'framer-motion'

export default function Section({ SEC_ID, children, initial_animation }) {
    
    const initial_y = initial_animation === true ? -100 : 0
    const initial_opacity = initial_animation === true ? 0 : 1

    return (
        <motion.section id={SEC_ID} className='my-10 mx-2 px-5 py-10 flex justify-around content-center rounded-md justify-self-center w-full scroll-mt-24'

            initial={{ y: initial_y, x: "0%", opacity: initial_opacity }}
            animate={{ y: 0, x: "0%", opacity: 1 }}
            transition={initial_animation === true ? { duration: 0.5 } : ''}
        >

            {children}

        </motion.section>
    )
}
