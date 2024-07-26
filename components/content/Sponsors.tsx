import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Prose from '@/components/Prose';

export default function Sponsors() {
  const t = useTranslations('Sponsors');
  return (
    <div className="my-16">
      <Prose className="mb-8 text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <div className="bg-bl flex flex-col items-center gap-16 rounded-lg bg-white bg-opacity-85 p-4 sm:flex-row">
        <Link href="https://iocdf.org/" title={t('iocdfTitle')}>
          <Image
            src="/sponsors/iocdf.svg"
            alt={t('iocdfTitle')}
            className="grayscale hover:grayscale-0"
            width={465}
            height={196}
          />
        </Link>
        <Link href="https://www.linz.at/kultur/index.php" title={t('linzTitle')}>
          <Image
            src="/sponsors/linz.svg"
            alt={t('linzTitle')}
            className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
            width={365}
            height={75}
          />
        </Link>
        <Link href="https://www.land-oberoesterreich.gv.at/kultur.htm" title={t('ooeTitle')}>
          <Image
            src="/sponsors/ooe.svg"
            alt={t('ooeTitle')}
            className="grayscale hover:grayscale-0"
            width={468}
            height={176}
          />
        </Link>
        <Link href="https://ph-ooe.at/" title={t('phOoeTitle')}>
          <Image
            src="/sponsors/ph-ooe.svg"
            alt={t('phOoeTitle')}
            className="grayscale hover:grayscale-0"
            width={293}
            height={192}
          />
        </Link>
      </div>
    </div>
  );
}
