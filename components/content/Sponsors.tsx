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
      <div className="grid grid-cols-1 place-items-stretch gap-8 sm:grid-cols-3">
        <Link
          href="https://ph-ooe.at/"
          title={t('phOoeTitle')}
          className="group flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/ph-ooe.svg"
            alt={t('phOoeTitle')}
            className="grayscale group-hover:grayscale-0"
            width={293}
            height={192}
          />
        </Link>
        <Link
          href="https://www.land-oberoesterreich.gv.at/kultur.htm"
          title={t('ooeTitle')}
          className="group flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/ooe.svg"
            alt={t('ooeTitle')}
            className="grayscale group-hover:grayscale-0"
            width={468}
            height={176}
          />
        </Link>
        <Link
          href="https://www.linz.at/kultur/index.php"
          title={t('linzTitle')}
          className="group flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/linz.svg"
            alt={t('linzTitle')}
            className="opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0"
            width={365}
            height={75}
          />
        </Link>
        <Link
          href="https://iocdf.org/"
          title={t('iocdfTitle')}
          className="group flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/iocdf.svg"
            alt={t('iocdfTitle')}
            className="grayscale group-hover:grayscale-0"
            width={465}
            height={196}
          />
        </Link>
        <Link
          href="https://www.blautoene.at"
          title={t('blautoeneTitle')}
          className="group flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/blautoene.png"
            alt={t('blautoeneTitle')}
            className="opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0"
            width={300}
            height={70}
          />
        </Link>
        <Link
          href="https://www.vfx.at/"
          title={t('viennafxTitle')}
          className="group flex items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/viennafx.png"
            alt={t('viennafxTitle')}
            className="grayscale group-hover:grayscale-0"
            width={300}
            height={141}
          />
        </Link>
        <Link
          href="https://www.zweifelsfrei.ch/"
          title={t('zweifelsfreiTitle')}
          className="group flex h-[204px] items-center rounded-lg bg-white bg-opacity-85 p-8 hover:bg-opacity-100"
        >
          <Image
            src="/sponsors/zweifelsfrei.png"
            alt={t('zweifelsfreiTitle')}
            className="grayscale group-hover:grayscale-0"
            width={450}
            height={108}
          />
        </Link>
      </div>
    </>
  );
}
