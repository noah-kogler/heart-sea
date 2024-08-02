import React from 'react';
import Heading from '@/components/Heading';
import { useTranslations } from 'next-intl';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import ContactFormWithCaptcha from '@/components/ContactFormWithCaptcha';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('contact', props);
}

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <MainContainer>
      <Prose className="text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <ContactFormWithCaptcha />
    </MainContainer>
  );
}
