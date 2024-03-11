import SectionTitle from '@/components/SectionTitle'
import Section from '@/components/Section'
import React from 'react'
import TimeLine from '@/components/TimeLine'

import { experiencesData } from '@/lib/data';

function Experience() {
  return (
    <>
      <Section SEC_ID='experience' initial_animation={true}>
        <div className='flex flex-col w-full text-center flex-start'>
          <SectionTitle>Experience</SectionTitle>

          <TimeLine>{experiencesData}</TimeLine>
        </div>




      </Section>
    </>
  )
}

export default Experience