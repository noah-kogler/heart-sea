import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Trailer from '@/components/content/Trailer';
import Contact from '@/components/content/Contact';
import Credits from '@/components/content/Credits';
import Sponsors from '@/components/content/Sponsors';
import ContentContainer from '@/components/ContentContainer';
import Prose from '@/components/Prose';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <ContentContainer className="items-center">
        <h1>
          <Image className="mt-24" src="/logo.svg" alt={t('title')} width={1017} height={61} />
        </h1>
        <h2 className="mb-24 mt-8 text-center text-xl">
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
        <Trailer />
        <Contact />
        <Credits />
        <Sponsors />
      </ContentContainer>
    </>
  );
}
