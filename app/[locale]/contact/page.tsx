'use client';

import React, { useState } from 'react';
import Heading from '@/components/Heading';
import { useTranslations } from 'next-intl';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from '@/components/content/ContactForm';
import ContentContainer from '@/components/ContentContainer';
import Prose from '@/components/Prose';
import { Link } from '@/navigation';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import useMountedCheck from '@/hooks/useMountedCheck';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [captchaToken, setCaptchaToken] = useState<string>();
  const isMountedRef = useMountedCheck();

  function onCaptchaVerify(token: string) {
    console.log('onCaptchaVerify');
    if (isMountedRef.current && !captchaToken) {
      setCaptchaToken(token);
    }
    console.log('offCaptchaVerify');
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Ldb0RgqAAAAAPOXW-Rflqs1uttTDgY2xtKRv7HW">
      <ContentContainer className="mb-16">
        <div className="mt-24 flex items-center">
          <Link href="/" className="mr-8">
            <Icon path={mdiChevronLeft} title={t('backLinkTitle')} size={2} />
          </Link>
          <Prose>
            <Heading>{t('title')}</Heading>
          </Prose>
        </div>
        <ContactForm captchaToken={captchaToken} />
        <GoogleReCaptcha onVerify={onCaptchaVerify} />
      </ContentContainer>
    </GoogleReCaptchaProvider>
  );
}
