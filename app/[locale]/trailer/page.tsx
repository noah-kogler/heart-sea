import MainContainer from '@/components/MainContainer';
import React from 'react';
import Trailer from '@/components/content/Trailer';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import DownloadLink from '@/components/DownloadLink';
import { mdiVideoBox } from '@mdi/js';
import { useTranslations } from 'next-intl';
import Line from '@/components/Line';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('trailer', props);
}

export default function TrailerPage() {
  const t = useTranslations('TrailerPage');

  return (
    <MainContainer>
      <Trailer />
      <Line />
      <Prose className="text-center">
        <h3>{t('download')}</h3>
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
