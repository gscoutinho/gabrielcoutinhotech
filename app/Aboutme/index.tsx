import React from 'react'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'

export default function Aboutme({ children }) {
  const paragraphs = children.linkedin_text.split("\n");

  return (
    <>
      <Section SEC_ID='about' initial_animation={true}>
        <div className='w-full flex-col content-start text-center'>
          <SectionTitle>About me</SectionTitle>
          <div>
            {
              paragraphs.map((item : any) => {
                return (
                  <p className='text-justify text-lg mb-4' key={item}>{item}</p>

                )
              })
            }
          </div>
        </div>
      </Section>
    </>
  )
}