import createMiddleware from 'next-intl/middleware';
import { locales } from '@/i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/trailer', '/contact', '/credits', '/(de|en)/:path*'],
};
