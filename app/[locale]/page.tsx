import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import { mdiPlay } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('', props);
}

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <a
        className="absolute left-6 top-24 flex h-44 w-44 origin-center -rotate-12 items-center justify-center rounded-full border-3 border-white bg-black bg-opacity-50 drop-shadow-xl hover:bg-opacity-100"
        href="http://kck.st/4dciMww"
        title={t('supportTitle')}
      >
        <div className="-mt-2 ml-5 mr-5 text-center text-[15px] font-bold">
          {t('supportRequest')}
          <br />
          {t('supportRequest2')}
          <div className="mb-1.5 mt-4 bg-black">
            <Image
              src="/kickstarter.svg"
              className="fill-black"
              alt={t('supportKickstarterAlt')}
              width={1280}
              height={136}
            />
          </div>
          {t('supportCampaign')}
        </div>
      </a>
      <MainContainer className="mt-36 items-center xl:mt-0">
        <h1 className="text-center font-serif text-7xl uppercase">{t('title')}</h1>
        <h2 className="mb-16 mt-8 text-center font-serif text-2xl uppercase text-white">
          {t('subtitleIntro')}
          <br />
          {t('subtitleNames')}
        </h2>
        <Link href="/trailer" className="group rounded-full">
          <div className="relative">
            <Image
              src="/bubble.png"
              alt={t('subjectImageAlt')}
              className="w-[500px] animate-pulse-slow transition-transform group-hover:scale-105"
              width={807}
              height={762}
              priority
            />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 opacity-70 group-hover:opacity-100">
              <Icon path={mdiPlay} size={1} title={t('trailerLabel')} className="mr-2" />
              <span>{t('trailerLabel')}</span>
            </div>
          </div>
        </Link>
        <Prose className="mt-16 text-center">
          <p>{t('text')}</p>
        </Prose>
      </MainContainer>
    </>
  );
}
