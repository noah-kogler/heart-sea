import withMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withMDX()({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}));
