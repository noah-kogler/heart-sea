import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import Heading from '@/components/Heading';
import React from 'react';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('press', props);
}

export default function PressPage() {
  const t = useTranslations('PressPage');

  return (
    <MainContainer>
      <Prose className="text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <Prose className="mt-6">
        <ul>
          <li>
            <a href="/press/ooe-nachrichten.pdf">{t('ooeNachrichten')}</a>
          </li>
          <li>
            <a href="/press/kulturbericht.jpeg">{t('kulturbericht')}</a>
          </li>
        </ul>
      </Prose>
    </MainContainer>
  );
}
