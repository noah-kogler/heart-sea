import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export type LocaleLayoutProps = {
  params: { locale: string };
};

export default async function generateMetadataForPage(
  path: string,
  { params: { locale } }: LocaleLayoutProps,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const alternateLocale = locale === 'en' ? 'de' : 'en';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: { [alternateLocale]: `/${alternateLocale}/${path}` },
    },
  };
}
