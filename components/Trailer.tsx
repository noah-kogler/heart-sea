import React from 'react';
import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';

export default function Trailer() {
  const t = useTranslations('Trailer');

  return (
    <div className="my-16">
      <Heading>{t('title')}</Heading>
      <div className="relative mt-8 h-[758px] w-[1365px]">
        <iframe
          src="https://player.vimeo.com/video/985665708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="WdHiM Trailer final mit Logos"
        />
        <script src="https://player.vimeo.com/api/player.js" defer />
      </div>
    </div>
  );
}
