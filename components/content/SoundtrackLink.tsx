import React from 'react';
import { useTranslations } from 'next-intl';

export default function SoundtrackLink() {
  const t = useTranslations('SoundtrackLink');

  return (
    <a href="https://listen.music-hub.com/39v1vS" target="_blank" rel="noreferrer">
      {t('label')}
    </a>
  );
}
