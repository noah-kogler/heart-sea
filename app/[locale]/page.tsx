import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import LanguageLink from '@/components/LanguageLink';
import Trailer from '@/components/Trailer';
import Contact from '@/components/Contact';

export default function Home() {
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <>
      <header className="absolute right-4 top-4">
        <LanguageLink locale="en" active={locale === 'en'} /> |{' '}
        <LanguageLink locale="de" active={locale === 'de'} />
      </header>
      <main className="bg-blue-noise">
        <div className="m-auto flex flex-col items-center">
          <h2 className="mb-24 mt-8 text-center text-xl">
            {t('subtitleIntro')}
            <br />
            {t('subtitleNames')}
          </h2>
          <Image src="/bubble.png" alt={t('subjectImageAlt')} width={807} height={762} priority />
          <h1>
            <Image className="mt-24" src="/logo.svg" alt={t('title')} width={1017} height={61} />
          </h1>
          <p className="mt-16 max-w-6xl text-center">{t('text')}</p>
          <Trailer />
          <Contact />
        </div>
      </main>
    </>
  );
}
