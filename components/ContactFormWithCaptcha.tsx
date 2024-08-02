'use client';

import React, { useState } from 'react';
import ContactForm from '@/components/content/ContactForm';
import dynamic from 'next/dynamic';

const Recaptcha = dynamic(() => import('@/components/Recaptcha'), {
  ssr: false,
});

export default function ContactFormWithCaptcha() {
  const [captchaToken, setCaptchaToken] = useState<string>();

  return (
    <>
      <ContactForm captchaToken={captchaToken} />
      <Recaptcha setCaptchaToken={setCaptchaToken} />
    </>
  );
}
