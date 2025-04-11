import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import MainContainer from '@/components/MainContainer';
import React from 'react';
import Screenings from '@/components/content/Screenings';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('contact', props);
}

export default function ScreeningsPage() {
  return (
    <MainContainer>
      <Screenings />
    </MainContainer>
  );
}
