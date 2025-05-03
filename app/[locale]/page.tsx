import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import { mdiPlay } from '@mdi/js';
import Icon from '@mdi/react';
import { Link } from '@/navigation';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import SoundtrackLink from '@/components/content/SoundtrackLink';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('', props);
}

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
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
          <hr />
        </Prose>
        <Prose className="mt-16 w-full text-center">
          <h4>{t('soundtrackTitle')}</h4>
          <p>
            <SoundtrackLink />
          </p>
          <hr />
        </Prose>
        <Prose className="mt-16 text-center">
          <p>
            {t.rich('birgittasFriends', {
              link: (content) => (
                <a href="https://www.birgittasfriends.com" target="_blank" rel="noreferrer">
                  {content}
                </a>
              ),
              linkChr: (content) => (
                <a href="https://www.christiankogler.at/" target="_blank" rel="noreferrer">
                  {content}
                </a>
              ),
            })}
          </p>
        </Prose>
      </MainContainer>
    </>
  );
}
