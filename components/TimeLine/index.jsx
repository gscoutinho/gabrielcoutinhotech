'use client'

import React from 'react'
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { motion } from 'framer-motion'


function Line() {
    return <div className='bg-sky-800/10 w-2 h-full absolute z-[995] left-1/2' />
}

function End() {
    return (
        <>
            <div className='flex flex-row w-full justify-between'>
                <div className='p-3 ml-2 w-2/5'></div>
                <div className='p-3 ml-2 z-[996] bg-white rounded-full border-solid border-4 border-sky-800/20'> <FaStar /></div>
                <div className='p-3 ml-2 w-2/5'></div>
            </div>
        </>
    )

}

function TimeLine({ children }) {
    return (

        <div className='w-full h-full relative'>
            <Line />
            {
                children.map((item, index) => (

                    <React.Fragment key={index}>
                        <EntryBlock

                            entryType={item.entryType}
                            location={item.location}
                            entryTitle={item.title}
                            description={item.description}
                            date={item.date}
                            arrowside={(index + 1) % 2 === 1 ? 'right' : 'left'}
                        />
                    </React.Fragment>

                ))
            }
            <End />
        </div>

    )
}


function EntryBlock({ entryTitle, location, description, arrowside, date, entryType }) {

    const montionBlock = (type, arrowside) => {

        if (type === 'card') {
            return {
                initial: {
                    y: "0%",
                    x: arrowside === 'right' ? -200 : arrowside === 'left' ? 200 : 0,
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    x: 0,
                    opacity: 1
                },
                duration: {
                    duration: 0.75
                }
            }
        } else if (type === 'date') {
            return {
                initial: {
                    y: "0%",
                    x: arrowside === 'right' ? 200 : arrowside === 'left' ? -200 : 0,
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    x: 0,
                    opacity: 1
                },
                duration: {
                    duration: 2
                }
            }
        }
    }

    return (
        <div className={`flex ${arrowside === 'right' ? 'md:flex-row flex-col-reverse' : 'md:flex-row-reverse flex-col-reverse'} w-full justify-between items-center mt-16 mb-48 group`}


        >
            <motion.div className='bg-neutral-100 w-4/5 md:w-2/5 flex flex-col px-4 relative transition-all duration-250  shadow-lg
            group-hover:bg-sky-400/75 group-hover:rounded-lg group-hover:shadow-4xl md:mt-0 mt-6'
                initial={montionBlock('card', arrowside).initial}
                animate={montionBlock('card', arrowside).animate}
                transition={montionBlock('card', arrowside).duration}
            >
                
                    <h3 className='font-bold text-left my-4'>{entryTitle}</h3>
                    <p className='text-left mb-4 font-light'>{location}</p>
                    <p className='text-left mb-4 font-light'>{description}</p>
                
                <div className={`md:block hidden absolute bottom-1/2   z-[999] ${arrowside === 'right' ? '-right-3' : '-left-3'}`}>
                    {

                        arrowside === 'right'
                            ? <BiSolidRightArrow color='#e5e5e5' />
                            : arrowside === 'left'
                                ? <BiSolidLeftArrow color='#e5e5e5' />
                                : ''
                    }
                </div>
            </motion.div>
            <div className='p-3 ml-2 z-[996] bg-white rounded-full border-solid border-4 border-sky-800/20 group-hover:border-sky-400 duration-250'>
                {
                    entryType === 'work'
                        ? <FaBriefcase size={25} color={'#075985'} />
                        : entryType === 'study'
                            ? <FaGraduationCap size={25} color={'#075985'} />
                            : <FaStar size={25} color={'#075985'} />
                }

            </div>
            <motion.p className={`${arrowside === 'right' ? 'text-left' : 'text-right'} w-2/5 font-extralight group-hover:font-normal duration-500 group-hover:scale-110`}
                initial={montionBlock('date', arrowside).initial}
                animate={montionBlock('date', arrowside).animate}
                duration={montionBlock('date', arrowside).duration}
            >{date}</motion.p>
        </div>
    )
}



export default TimeLine