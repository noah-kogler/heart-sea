import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Prose from '@/components/Prose';

export default function Sponsors() {
  const t = useTranslations('Sponsors');
  return (
    <>
      <Prose className="mb-8 text-center">
        <Heading>{t('title')}</Heading>
      </Prose>
      <div className="grid grid-cols-1 place-items-stretch gap-8 sm:grid-cols-4">
        <Link
          href="https://ph-ooe.at/"
          title={t('phOoeTitle')}
          className="flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/ph-ooe.svg"
            alt={t('phOoeTitle')}
            className="grayscale hover:grayscale-0"
            width={293}
            height={192}
          />
        </Link>
        <Link
          href="https://www.land-oberoesterreich.gv.at/kultur.htm"
          title={t('ooeTitle')}
          className="flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/ooe.svg"
            alt={t('ooeTitle')}
            className="grayscale hover:grayscale-0"
            width={468}
            height={176}
          />
        </Link>
        <Link
          href="https://www.linz.at/kultur/index.php"
          title={t('linzTitle')}
          className="flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/linz.svg"
            alt={t('linzTitle')}
            className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
            width={365}
            height={75}
          />
        </Link>
        <Link
          href="https://iocdf.org/"
          title={t('iocdfTitle')}
          className="flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/iocdf.svg"
            alt={t('iocdfTitle')}
            className="grayscale hover:grayscale-0"
            width={465}
            height={196}
          />
        </Link>
      </div>
    </>
  );
}
