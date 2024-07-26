import { useTranslations } from 'next-intl';
import React from 'react';
import ContentContainer from '@/components/ContentContainer';

export default function Copyright() {
  const t = useTranslations('Copyright');
  const year = new Date().getFullYear();

  return (
    <ContentContainer className="relative bottom-4 text-sm text-zinc-500">
      <p>
        {t('title')} {year}, {t('name')}
      </p>
      <p>
        {t('address')}, {t('city')}, {t('country')}
      </p>
    </ContentContainer>
  );
}
