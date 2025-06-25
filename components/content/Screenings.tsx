import { useLocale } from 'next-intl';
import ScreeningsDe from '@/components/content/de/Screenings.mdx';
import ScreeningsEn from '@/components/content/en/Screenings.mdx';
import React from 'react';
import Prose from '@/components/Prose';
import CrossingEuropeImage from '@/components/content/CrossingEuropeImage';

function CrossingEuropeLink() {
  return (
    <div className="not-prose mx-auto mb-0 mt-4 block text-center">
      <a className="inline-block" href="https://www.crossingeurope.at/">
        <img className="w-48" src="/crossing-europe-white.svg" alt="Crossing Europe" />
      </a>
    </div>
  );
}

export default function Screenings() {
  const locale = useLocale();
  const components = { CrossingEuropeLink, CrossingEuropeImage };
  return (
    <Prose className="text-center">
      {locale === 'de' ? (
        <ScreeningsDe components={components} />
      ) : (
        <ScreeningsEn components={components} />
      )}
    </Prose>
  );
}
