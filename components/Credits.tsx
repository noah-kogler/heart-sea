import { useLocale } from 'next-intl';
import CreditsDe from '@/components/de/Credits.mdx';
import CreditsEn from '@/components/en/Credits.mdx';
import React from 'react';

export default function Credits() {
  const locale = useLocale();
  return (
    <div className="prose lg:prose-l prose-invert mt-24">
      {locale === 'de' ? <CreditsDe /> : <CreditsEn />}
    </div>
  );
}
