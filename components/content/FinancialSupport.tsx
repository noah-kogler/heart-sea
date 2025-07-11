import { useTranslations } from 'next-intl';
import React from 'react';
import Prose from '@/components/Prose';
import names from '../../data/financial-support-names.json';

export default function FinancialSupport() {
  const t = useTranslations('FinancialSupport');
  const sortedNames = names.sort((a, b) => ('' + a).localeCompare('' + b));
  return (
    <Prose className="text-center prose-ul:list-none">
      <h3>{t('title')}</h3>
      <ul>
        {sortedNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Prose>
  );
}
