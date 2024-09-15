"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailForm from "@/email/email-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  console.log(senderEmail);
  
if (!validateString(senderEmail, 500)) {
  return{
    error: 'Invalid sender email',
  };
}
if (!validateString(message, 5000)) {
  return{
    error: 'Invalid message',
  };
}

let data;
try {
  data = await resend.emails.send({
    from:'Contact Form <onbording@resend.dev>',
    to: 'felipechicaiza47@gmail.com',
    subject: 'New message from your portfolio',
    reply_to: senderEmail as string,
    react: React.createElement(EmailForm, {message: message as string, senderEmail: senderEmail as string}),
  });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
  return {
    data,
  }
}