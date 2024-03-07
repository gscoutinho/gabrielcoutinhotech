'use server'

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactForm from "@/lib/email/contactform";


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: any) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')
    const email_receiver = 'eng.gabrielcoutinho@outlook.com.br'

    if (!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email",
        };
    }

    if(!validateString(message, 2500)){
        return {
            error:"Invalid message."
        }
    }

    let data;

    try{
        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email_receiver,
            subject: `Message from contact form of personal site: ${senderEmail}`,
            reply_to: senderEmail,
            react: React.createElement(ContactForm, {
                message: message,
                senderEmail: senderEmail,
            }),
        })
    } catch(error: unknown){
        return{
            error: getErrorMessage(error),
        }
    }

    return {
        data
    }
};