import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import MainContainer from '@/components/MainContainer';
import Prose from '@/components/Prose';
import Heading from '@/components/Heading';
import React from 'react';
import Image from 'next/image';
import { mdiFileJpgBox, mdiFilePdfBox, mdiFilePngBox, mdiFolderZip, mdiVideoBox } from '@mdi/js';
import Line from '@/components/Line';
import DownloadLink from '@/components/DownloadLink';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('downloads', props);
}

export default function DownloadsPage() {
  const t = useTranslations('DownloadsPage');
  const locale = useLocale();
  const images = [
    { number: 1, webSize: '156 kB', printSize: '4.4 MB' },
    { number: 2, webSize: '158 kB', printSize: '5 MB' },
    { number: 3, webSize: '200 kB', printSize: '4 MB' },
    { number: 4, webSize: '237 kB', printSize: '5.5 MB' },
    { number: 5, webSize: '273 kB', printSize: '5.7 MB' },
    { number: 6, webSize: '132 kB', printSize: '3.5 MB' },
    { number: 7, webSize: '307 kB', printSize: '5.9 MB' },
    { number: 8, webSize: '254 kB', printSize: '5.4 MB' },
  ];

  return (
    <MainContainer>
      <Prose className="mb-8 text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <DownloadLink
        href={`https://www.christiankogler.at/wdhim-downloads/press-kit-${locale}.zip`}
        icon={mdiFolderZip}
        label={t('pressKit')}
        size="47.6 MB"
      />
      <hr className="my-8 h-px border-0 bg-gray-600" />
      <Prose className="text-center">
        <h3>{t('stills')}</h3>
      </Prose>
      <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-7 lg:grid-cols-3">
        {images.map((img) => (
          <li key={img.number} className="flex flex-col items-center gap-2">
            <a href={`/downloads/stills/web/wdhim-still-${img.number}.jpg`}>
              <Image
                src={`/downloads/stills/web/wdhim-still-${img.number}.jpg`}
                width={512}
                height={270}
                alt={`wdhim-still-${img.number}`}
              />
            </a>
            <ul className="flex items-center gap-2">
              <li>
                <DownloadLink
                  href={`/downloads/stills/web/wdhim-still-${img.number}.jpg`}
                  icon={mdiFileJpgBox}
                  label="web"
                  variant="small"
                  size={img.webSize}
                />
              </li>
              <li>
                <DownloadLink
                  href={`/downloads/stills/print/wdhim-still-${img.number}.png`}
                  icon={mdiFilePngBox}
                  label="print"
                  variant="small"
                  size={img.printSize}
                />
              </li>
            </ul>
          </li>
        ))}
      </ul>
      {locale === 'de' && (
        <>
          <Line />
          <Prose className="text-center">
            <h3>{t('pressTextTitle')}</h3>
            <p className="whitespace-pre-line text-justify">{t('pressText')}</p>
          </Prose>
        </>
      )}
      <Line />
      <Prose className="text-center">
        <h3>{t('biographies')}</h3>
      </Prose>
      <Prose className="mt-8 text-center">
        <h4>{t('biographyChristianTitle')}</h4>
      </Prose>
      <div className="m-0 mt-6 flex flex-col items-center gap-6 lg:flex-row">
        <Image
          src="/downloads/biographies/bio-1.jpg"
          alt={t('biographyImg1Alt')}
          width={300}
          height={200}
          className="mt-2 h-[200px] w-[300px]"
        />
        <Prose className="text-justify">{t('biographyChristian')}</Prose>
      </div>
      <Prose className="mt-8 text-center">
        <h4>{t('biographyEricTitle')}</h4>
      </Prose>
      <div className="m-0 mt-6 flex flex-col items-center gap-6 lg:flex-row">
        <Prose className="text-justify">{t('biographyEric')}</Prose>
        <Image
          src="/downloads/biographies/bio-2.jpg"
          alt={t('biographyImg2Alt')}
          width={300}
          height={225}
          className="mt-2 h-[225px] w-[300px]"
        />
      </div>
      <Line />
      <Prose className="text-center">
        <h3>{t('synopsis')}</h3>
        <p className="text-justify">{t('synopsisText')}</p>
      </Prose>
      <Line />
      <Prose className="text-center">
        <h3>{t('posters')}</h3>
      </Prose>
      <div className="mt-6 flex gap-5">
        <div className="flex flex-col gap-y-2">
          <a href={`/downloads/posters/wdhim-poster.png`}>
            <Image
              src="/downloads/posters/wdhim-poster.png"
              alt={t('posterAlt')}
              width={512}
              height={724}
            />
          </a>
          <DownloadLink
            href="https://www.christiankogler.at/wdhim-downloads/wdhim-poster.pdf"
            label={t('posterDownload')}
            icon={mdiFilePdfBox}
            size="178 MB"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <a href={`/downloads/posters/wdhim-poster-special.png`}>
            <Image
              src="/downloads/posters/wdhim-poster-special.png"
              alt={t('posterSpecialAlt')}
              width={512}
              height={721}
            />
          </a>
          <DownloadLink
            href="https://www.christiankogler.at/wdhim-downloads/wdhim-poster-special.pdf"
            label={t('posterSpecialDownload')}
            icon={mdiFilePdfBox}
            size="7.1 MB"
          />
        </div>
      </div>
      <Line />
      <Prose className="text-center">
        <h3>{t('press')}</h3>
      </Prose>
      <div className="mt-6 flex flex-col gap-y-6">
        <DownloadLink
          href="/downloads/press/ooe-nachrichten.pdf"
          label={t('pressOoeNachrichten')}
          icon={mdiFilePdfBox}
          size="334 kB"
        />
        <DownloadLink
          href="/downloads/press/kulturbericht.jpeg"
          label={t('pressKulturbericht')}
          icon={mdiFileJpgBox}
          size="64 kB"
        />
      </div>
      <Line />
      <Prose className="text-center">
        <h3>{t('trailer')}</h3>
      </Prose>
      <div className="mt-6 flex flex-col gap-y-6">
        <DownloadLink
          href="https://www.christiankogler.at/wdhim-downloads/wdhim-trailer-7mbit.mp4"
          label={t('trailer7Mbit')}
          icon={mdiVideoBox}
          size="119 MB"
        />
        <DownloadLink
          href="https://www.christiankogler.at/wdhim-downloads/wdhim-trailer-30mbit.mp4"
          label={t('trailer30Mbit')}
          icon={mdiVideoBox}
          size="447 MB"
        />
      </div>
    </MainContainer>
  );
}
