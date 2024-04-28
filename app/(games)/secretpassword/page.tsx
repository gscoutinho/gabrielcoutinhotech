'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

function SecretPassword() {

  const [secretpassword, setSecretpassword] = useState<Array<number>>([])
  const [guess, setGuess] = useState(Array(4).fill(0))
  const [dgt, setDgt] = useState(0)
  const [result, setResult] = useState(false)
  const [log, setLog] = useState<Array<{ index: number, value: Array<number>, rightNums: number, rightPos: number }>>([])



  return (
    <div className='flex flex-col items-center'>
      <h2>The Secret Password</h2>
      <motion.div
        className={`${secretpassword.length !== 0 ? 'hidden' : 'block'}`}
        transition={{
          y: {
            duration: 1.2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 0.3

          }
        }}
        animate={{
          y: ["-25%", "20%", "-25%"],
        }}
      >
        <button onClick={() => {
          setResult(false)
          setSecretpassword(getSecretPassword(4))
        }}
          className='mb-2 py-2 px-5 rounded-full h-24 w-24
      bg-gradient-to-br from-sky-300 via-sky-500 to-sky-800 border-b-2 border-b-sky-800 border-r-2 border-r-sky-800 border-t-1 border-t-sky-200 border-l-1 border-l-sky-100
      text-xl text-neutral-800 shadow-md
      hover:scale-110
      '
        >Start</button>
      </motion.div>
      <motion.div className={`pb-5 flex flex-col items-center ${secretpassword.length !== 0 ? 'block' : 'hidden'}`}
        animate={{ opacity: ["0%", "100%"] }}
        transition={{ ease: "easeOut", duration: 4 }}
      >
        <div className='flex flex-row m-2'>
          {
            guess.map((item, idx) => <button key={idx}
              className={`mr-5 mt-4 px-5 py-4
            text-2xl text-neutral-900
            rounded-xl border-b-5 hover:scale-110
             ${idx === dgt ? 'bg-gradient-to-br from-sky-100 via-sky-300 to-sky-500' : 'bg-gradient-to-br from-neutral-50 via-neutral-200 to-neutral-300'}`}
              onClick={() => setDgt(idx)}
            >{item}</button>)
          }
        </div>

        <div className={` ${log.length === 0 ? 'hidden' : 'block'}
      m-5 px-4 py-2 w-140 
      overflow-y-auto max-h-48
      `}>
          <table className="min-w-full divide-y divide-gray-200 text-center shadow-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attempt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guess password
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Right Numbers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Right Position
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {log.map((element, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap">{element.index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{element.value.map((item, idx) => <text key={idx} className='mx-1 py-1 px-2 border-b-2 rounded-lg bg-gradient-to-br from-neutral-50 via-neutral-200 to-neutral-300 text-neutral-900'>{item}</text>)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{element.rightNums}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{element.rightPos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`flex flex-row flex-wrap w-64 justify-center ${result ? 'hidden': 'block'}`}>
          {
            [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((item, idx) => <button key={idx}
              className='mr-5 mt-4 px-5 py-4 
          bg-gradient-to-br from-neutral-50 via-neutral-200 to-neutral-300
          text-xl rounded-lg'
              onClick={() => {
                const teste = guess
                teste[dgt] = item
                setGuess(teste)
                setDgt(dgt === 3 ? 0 : dgt + 1)
              }}

            >{item}</button>)
          }
          <button className='bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700
          border-b-3 border-r-3 border-l-2 border-t-2 border-b-emerald-700 border-r-emerald-700 border-t-emerald-200 border-l-emerald-200
          mr-5 mt-4 px-8 h-16 rounded-lg
          text-lg text-neutral-900'

            onClick={() => {
              let rightNum = 0
              let rightPosi = 0

              for (let i = 0; i < guess.length; i++) {
                secretpassword.find(element => element === guess[i]) === guess[i] ? rightNum++ : rightNum = rightNum

                if (guess[i] === secretpassword[i]) {
                  rightPosi++
                }

                setLog([...log, { index: log.length, value: [guess[0], guess[1], guess[2], guess[3]], rightNums: rightNum, rightPos: rightPosi }])

              }

              if (rightPosi === 4) {
                setResult(true)
                setSecretpassword([])
                setLog([])
              }
            }}
          >Guess</button>

        </div>
      </motion.div>
      <p className={`w-full text-center ${result ? 'block': 'hidden'}`}>Congratulations! You won The Secret Password!! Let's play again! Hit the start button!</p>
      <p className='text-neutral-900 w-96 text-center py-5'>{secretpassword.length !== 0 ? '' : 'You are about to start The Secret Password! The rules? Well, you need to figure out by yourself.'}</p>
    </div>
  )
}

function getSecretPassword(arrayLength: number): Array<number> {
  let arr: Array<number> = []

  for (let i = 0; i < arrayLength; i++) {
    arr[i] = getMeRandom(0, 9)

    while (arr.filter(item => item === arr[i]).length > 1) {
      arr[i] = getMeRandom(0, 9)
    }
  }

  return arr
}

function getMeRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)); // The maximum is inclusive and the minimum is inclusive
}


export default SecretPassword
