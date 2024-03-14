import React, { ReactNode } from 'react'
import Section from '@/components/Section'




export default function Aboutme({ children } : any) {
  const paragraphs = children.linkedin_text.split("\n");

  return (
    <>
      <Section SEC_ID='about' initial_animation={true}>
        <div className='w-full flex-col content-start text-center'>
          <h2>About me</h2>
          <div>
            {
              paragraphs.map((item : any) => {
                return (
                  <p className='text-justify text-lg mb-16' key={item}>{item}</p>

                )
              })
            }
          </div>
        </div>
      </Section>
    </>
  )
}