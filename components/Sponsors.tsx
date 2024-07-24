import { useTranslations } from 'next-intl';
import Heading from '@/components/Heading';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sponsors() {
  const t = useTranslations('Sponsors');
  return (
    <div className="text-center">
      <Heading>{t('title')}</Heading>
      <Link href="https://iocdf.org/" title={t('iocdfTitle')}>
        <Image src="/sponsors/iocdf.svg" alt={t('iocdfTitle')} width={465} height={196} />
      </Link>
      <Link href="https://www.linz.at/kultur/index.php" title={t('linzTitle')}>
        <Image src="/sponsors/linz.svg" alt={t('linzTitle')} width={365} height={75} />
      </Link>
      <Link href="https://www.land-oberoesterreich.gv.at/kultur.htm" title={t('ooeTitle')}>
        <Image src="/sponsors/ooe.svg" alt={t('ooeTitle')} width={468} height={176} />
      </Link>
      <Link href="https://ph-ooe.at/" title={t('phOoeTitle')}>
        <Image src="/sponsors/ph-ooe.svg" alt={t('phOoeTitle')} width={586} height={384} />
      </Link>
    </div>
  );
}
