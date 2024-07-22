import { Inter } from 'next/font/google';
import '../globals.css';
import React, { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

type LocaleLayoutProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: LocaleLayoutProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<PropsWithChildren<LocaleLayoutProps>>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
