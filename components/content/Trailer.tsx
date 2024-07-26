import React from 'react';
import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import Prose from '@/components/Prose';

export default function Trailer() {
  const t = useTranslations('Trailer');

  return (
    <div className="flex flex-col items-stretch self-stretch">
      <Prose className="w-full text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <iframe
        src="https://player.vimeo.com/video/985665708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={t('title')}
        className="mt-8 aspect-video w-full"
      />
      <script src="https://player.vimeo.com/api/player.js" defer />
    </div>
  );
}
