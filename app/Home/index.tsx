import React from 'react'
import Section from '@/components/Section'
import Image from 'next/image';


function Home({ children }: any) {

  const AUTHOR_NAME = children.author_name;
  const PHOTO_PATH = children.photo;
  const AUTHOR_ROLE = children.author_role;
  const DESCRIPTION = children.description;
  const INTERESTED_FIELDS = children.interested_fields;

  return (
    <>
      <Section SEC_ID='home' initial_animation={true}>
        <Image
          src={PHOTO_PATH}
          width={300}
          height={250}
          alt='Picture of the author'
          className='mr-5 rounded-full shadow-4xl hover:shadow-8xl transform hover:scale-105 transition duration-300'
        />
        <div className=' w-3/5 relative'>
          <div className='h-full'>

            <h1 className='pl-3 text-left text-5xl font-bold mb-2 mt-2 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-950 inline-block text-transparent bg-clip-text'>{AUTHOR_NAME}</h1>
            <h2 className='font-bold pl-7 text-sky-950 text-2xl'>{AUTHOR_ROLE}</h2>
            <br />
            <p className='text-justify text-lg mt-2 mb-4'>{DESCRIPTION}</p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home