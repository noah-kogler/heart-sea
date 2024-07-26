import { useLocale } from 'next-intl';
import CreditsDe from '@/components/content/de/Credits.mdx';
import CreditsEn from '@/components/content/en/Credits.mdx';
import React from 'react';
import Prose from '@/components/Prose';

export default function Credits() {
  const locale = useLocale();
  return (
    <Prose className={'mt-16 text-center'}>{locale === 'de' ? <CreditsDe /> : <CreditsEn />}</Prose>
  );
}
