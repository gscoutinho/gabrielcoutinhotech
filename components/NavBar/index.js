'use client'

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useActiveSectionContext } from "@/context/active-section-context";


export default function NavBar({ children }) {

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <header className='z-[999] relative'>
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-6xl shadow-black/[0.03] backdrop-blur-sm"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex mt-2 fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 bg-white rounded-full">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">

          {children.map(item => (
            <motion.li
              className='h-3/4 flex items-center justify-center relative'
              key={item.label}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition
                ${activeSection === item.label ? 'text-gray-950' : ''}
                `}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.label);
                  setTimeOfLastClick(Date.now());
                }}
              >{item.label}
                {
                  item.label === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}

                    ></motion.span>
                  )}

              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
