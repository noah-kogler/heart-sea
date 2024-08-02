import MainContainer from '@/components/MainContainer';
import React from 'react';
import Trailer from '@/components/content/Trailer';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('trailer', props);
}

export default function TrailerPage() {
  return (
    <MainContainer>
      <Trailer />
    </MainContainer>
  );
}
