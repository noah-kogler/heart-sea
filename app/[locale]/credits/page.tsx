import React from 'react';
import MainContainer from '@/components/MainContainer';
import Credits from '@/components/content/Credits';
import Sponsors from '@/components/content/Sponsors';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import FinancialSupport from '@/components/content/FinancialSupport';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('credits', props);
}

export default function CreditsPage() {
  return (
    <MainContainer>
      <Sponsors />
      <Credits />
      <FinancialSupport />
    </MainContainer>
  );
}
