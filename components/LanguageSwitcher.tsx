'use client';

import React from 'react';
import { Link, usePathname } from '@/navigation';
import { locales } from '@/i18n';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <span className="uppercase">
      {locales.map((locale, index) => (
        <>
          {index !== 0 && <span> | </span>}
          {locale === currentLocale ? (
            locale
          ) : (
            <Link href={pathname} locale={locale} className="underline">
              {locale}
            </Link>
          )}
        </>
      ))}
    </span>
  );
}
