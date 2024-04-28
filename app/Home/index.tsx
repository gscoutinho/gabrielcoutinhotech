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
            width={350}
            height={350}
            quality={100}
            alt='Picture of the author'
            className='mr-5 rounded-full shadow-4xl hover:shadow-8xl transform hover:scale-105 transition duration-300 hidden 2xl:block'
          />
          <div className=' lg:w-3/5 w-full relative'>
            <div className='h-full'>

              <h1 className='lg:pl-3 pl-1 lg:text-left lg:text-5xl text-4xl text-center font-bold lg:mb-2 lg:mt-2 mt-4 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-950 inline-block text-transparent bg-clip-text'>{AUTHOR_NAME}</h1>
              <h2 className='font-bold lg:pl-7 pl-3 text-sky-950 lg:text-2xl text-lg mb-4'>{AUTHOR_ROLE}</h2>
              <br />
              <p className='text-justify text-lg lg:mt-2 lg:mb-4 mt-1 p-5'>{DESCRIPTION}</p>
            </div>
          </div>
      </Section>
    </>
  )
}

export default Home