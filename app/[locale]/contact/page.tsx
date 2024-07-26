'use client';

import React, { useState } from 'react';
import Heading from '@/components/Heading';
import { useTranslations } from 'next-intl';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [captchaToken, setCaptchaToken] = useState<string>();

  function onCaptchaVerify(token: string) {
    if (!captchaToken) {
      setCaptchaToken(token);
    }
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Ldb0RgqAAAAAPOXW-Rflqs1uttTDgY2xtKRv7HW">
      <main>
        <Heading>{t('title')}</Heading>
        <ContactForm captchaToken={captchaToken} />
        <GoogleReCaptcha onVerify={onCaptchaVerify} />
      </main>
    </GoogleReCaptchaProvider>
  );
}
