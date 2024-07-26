import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <MainContainer className="items-center">
        <h1>
          <Image src="/logo.svg" alt={t('title')} width={1017} height={61} />
        </h1>
        <h2 className="mb-16 mt-8 text-center text-xl">
          {t('subtitleIntro')}
          <br />
          {t('subtitleNames')}
        </h2>
        <Image
          src="/bubble.png"
          alt={t('subjectImageAlt')}
          className="w-[500px]"
          width={807}
          height={762}
          priority
        />
        <Prose className="mt-16 text-center">
          <p>{t('text')}</p>
        </Prose>
      </MainContainer>
    </>
  );
}
