'use client';

import React, { useState } from 'react';
import Heading from '@/components/Heading';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/content/ContactForm';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import dynamic from 'next/dynamic';

const Recaptcha = dynamic(() => import('@/components/Recaptcha'), {
  ssr: false,
});

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [captchaToken, setCaptchaToken] = useState<string>();
  return (
    <MainContainer>
      <Prose className="text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <ContactForm captchaToken={captchaToken} />
      <Recaptcha setCaptchaToken={setCaptchaToken} />
    </MainContainer>
  );
}
