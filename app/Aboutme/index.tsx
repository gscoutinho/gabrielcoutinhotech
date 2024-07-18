import React, { ReactNode } from 'react'
import Section from '@/components/Section'




export default function Aboutme({ children } : any) {
  const paragraphs = children.linkedin_text.split("\n");

  return (
    <>
      <Section SEC_ID='about' initial_animation={true}>
        <div className='w-full flex-col content-start text-center lg:p-10 p-3'>
          <h2>About me</h2>
          <div className='lg:px-16 md:px-12 sm:px-16 px-16'>
            {
              paragraphs.map((item : any) => {
                return (
                  <p className='text-justify md:text-lg text-md lg:mb-16 mb-4' key={item}>{item}</p>

                )
              })
            }
          </div>
        </div>
      </Section>
    </>
  )
}