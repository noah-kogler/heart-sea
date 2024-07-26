import { useTranslations } from 'next-intl';
import React from 'react';

export default function Copyright() {
  const t = useTranslations('Copyright');
  const year = new Date().getFullYear();

  return (
    <div className="absolute bottom-4 w-full text-center text-sm text-zinc-500">
      <p>
        {t('title')} {year}, {t('name')}
      </p>
      <p>
        {t('address')}, {t('city')}, {t('country')}
      </p>
    </div>
  );
}
