import { useTranslations } from 'next-intl';
import React from 'react';
import MainContainer from '@/components/MainContainer';
import Credits from '@/components/content/Credits';
import Sponsors from '@/components/content/Sponsors';

export default function CreditsPage() {
  const t = useTranslations('CreditsPage');

  return (
    <MainContainer>
      <Credits />
      <Sponsors />
    </MainContainer>
  );
}
