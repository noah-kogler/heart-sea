import { useLocale } from 'next-intl';
import CreditsDe from '@/components/content/de/Credits.mdx';
import CreditsEn from '@/components/content/en/Credits.mdx';
import React from 'react';
import Prose from '@/components/Prose';
import SoundtrackLink from '@/components/content/SoundtrackLink';

export default function Credits() {
  const locale = useLocale();
  const components = { SoundtrackLink };
  return (
    <Prose className="mt-24 text-center">
      {locale === 'de' ? (
        <CreditsDe components={components} />
      ) : (
        <CreditsEn components={components} />
      )}
    </Prose>
  );
}
