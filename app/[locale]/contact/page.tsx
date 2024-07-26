'use client';

import React, { useState } from 'react';
import Heading from '@/components/Heading';
import { useLocale, useTranslations } from 'next-intl';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from '@/components/content/ContactForm';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import { Link } from '@/navigation';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import useMountedCheck from '@/hooks/useMountedCheck';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [captchaToken, setCaptchaToken] = useState<string>();
  const isMountedRef = useMountedCheck();
  const locale = useLocale();

  function onCaptchaVerify(token: string) {
    if (isMountedRef.current && !captchaToken) {
      setCaptchaToken(token);
    }
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ldb0RgqAAAAAPOXW-Rflqs1uttTDgY2xtKRv7HW"
      language={locale}
      container={{
        element: 'captcha-container',
        parameters: {
          badge: 'bottomleft',
          theme: 'dark',
        },
      }}
    >
      <MainContainer>
        <Prose className="text-center">
          <Heading>{t('title')}</Heading>
        </Prose>
        <ContactForm captchaToken={captchaToken} />
        <GoogleReCaptcha onVerify={onCaptchaVerify} />
      </MainContainer>
      <div id="captcha-container" />
    </GoogleReCaptchaProvider>
  );
}
