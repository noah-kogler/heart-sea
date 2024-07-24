import React from 'react';
import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import { Link } from '@/navigation';

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <div className="text-center">
      <Heading>{t('title')}</Heading>
      <p>{t('name')}</p>
      <p>{t('address')}</p>
      <p>{t('city')}</p>
      <p>{t('country')}</p>
      <Link href="/contact">{t('emailLinkLabel')}</Link>
    </div>
  );
}
