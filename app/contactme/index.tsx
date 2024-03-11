'use client'

import Section from '@/components/Section'
import { FaPaperPlane } from 'react-icons/fa'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { sendEmail } from '@/lib/actions/sendEmail'

import toast from 'react-hot-toast'

function ContactMe({ children }: any) {

    const { pending } = useFormStatus();

    return (
        <>
            <Section SEC_ID='contactme' initial_animation={true}>
                <div className=' w-full flex flex-col content-start text-center'>
                    <h2>Contact me</h2>
                    <div className='flex flex-col'>
                        <h3 className='mb-5'>Send me a message!</h3>

                        <form className='my-3 flex flex-col items-center'

                            action={async (formData) => {
                                const { data, error } = await sendEmail(formData)


                                if (error) {

                                    toast.error(error);
                                    return
                                }

                                toast.success("Email sent successfuly!")
                            }}>
                            <input type='email' className='h-12 px-4 my-2 w-3/5 border-solid rounded-lg border-2 border-neutral-100' placeholder='Your email'
                                required
                                name='senderEmail'
                                maxLength={500}
                            />
                            <textarea className='py-4 px-2 my-2 w-3/5 border-solid rounded-lg border-2 border-neutral-100' placeholder='Your message'
                                name='message'
                                maxLength={2500}
                                required
                            />
                            <div className='w-3/5 flex flex-col'>
                                <button type='submit' className='my-2 p-2 px-6 bg-sky-950 text-neutral-50 rounded-full self-end flex gap-4 items-center transition-all focus:scale-110 hover:scale-110 hover:bg-sky-400'
                                    disabled={pending}
                                >{pending
                                    ? <span className='animate-pulse'>Processing...</span>
                                :<span className=''>Submit</span>}<FaPaperPlane className='transition-all hover:translate-x-1 focus:translate-x-1' /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default ContactMe