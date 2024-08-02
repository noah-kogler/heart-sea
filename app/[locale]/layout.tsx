import { Open_Sans } from 'next/font/google';
import '../globals.css';
import React, { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { NextUIProvider } from '@nextui-org/react';
import { getMessages } from 'next-intl/server';
import Copyright from '@/components/Copyright';
import Header from '@/components/Header';
import classNames from 'classnames';
import { LocaleLayoutProps } from '@/utils/generateMetadataForPage';

const openSans = Open_Sans({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<PropsWithChildren<LocaleLayoutProps>>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={classNames(openSans.className, 'text-foreground dark')}>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <Header />
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
