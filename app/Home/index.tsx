import React from 'react'
import Section from '@/components/Section'
import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin } from "react-icons/bs";

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

            <h1 className='lg:pl-6 pl-8 lg:text-left text-center lg:text-5xl text-3xl font-bold lg:mb-2 lg:mt-2 -mt-8 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-950 inline-block text-transparent bg-clip-text'>{AUTHOR_NAME}</h1>
            <h2 className='font-bold lg:pl-7 pl-12 -mt-1 text-sky-950 lg:text-2xl text-lg mb-1'>{AUTHOR_ROLE}</h2>
            <br />
            <p className='text-justify lg:text-lg text-md py-3 sm:px-12 px-16 md:px-16'>{DESCRIPTION}</p>
          </div>
          <div className='flex flex-row justify-end md:pr-16 pr-8 gap-4'>
            <Link href="https://www.linkedin.com/in/eng-gabriel-coutinho/"
            target='_blank'
            className='my-2 p-2 px-4 h-10 bg-neutral-50 text-sky-950 font-bold border-2 border-neutral-100 rounded-full self-end flex gap-4 items-center transition-all focus:scale-110 hover:scale-110 hover:bg-sky-600'
            >LinkedIn
            <BsLinkedin size={20}/>
            </Link>
            <Link href="/#contactme"
            className='my-2 p-2 px-6 h-10 bg-sky-950 text-neutral-50 rounded-full self-end flex gap-4 items-center transition-all focus:scale-110 hover:scale-110 hover:bg-sky-400'
            >Contact me</Link>
          </div>

        </div>
      </Section>
    </>
  )
}

export default Home