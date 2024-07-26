import React from 'react';
import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import { Link } from '@/navigation';
import Prose from '@/components/Prose';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <>
      <Prose className={'mt-16 text-center'}>
        <Heading>{t('title')}</Heading>
      </Prose>
      <Link
        href="/contact"
        className="mt-4 flex flex-row items-center text-lg underline opacity-75 hover:opacity-100"
      >
        <Icon path={mdiEmail} size={1} className="mr-2" />
        <span>{t('emailLinkLabel')}</span>
      </Link>
    </>
  );
}
