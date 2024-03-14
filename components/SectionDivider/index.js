'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function SectionDivider() {
    return (
        <motion.div
            className="bg-sky-700 my-24 h-36 w-1 rounded-full dark:bg-opacity-20"

            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        >
        </motion.div>
    )
}