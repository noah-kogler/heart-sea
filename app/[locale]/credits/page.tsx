import React from 'react';
import MainContainer from '@/components/MainContainer';
import Credits from '@/components/content/Credits';
import Sponsors from '@/components/content/Sponsors';

export default function CreditsPage() {
  return (
    <MainContainer>
      <Credits />
      <Sponsors />
    </MainContainer>
  );
}
