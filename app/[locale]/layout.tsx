import { Inter } from 'next/font/google';
import '../globals.css';
import React, { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { NextUIProvider } from '@nextui-org/react';
import { getMessages } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Copyright from '@/components/Copyright';

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
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <header className="absolute right-4 top-4">
              <LanguageSwitcher />
            </header>
            {children}
            <footer>
              <Copyright />
            </footer>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
