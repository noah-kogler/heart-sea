import React from 'react';
import VercelLogo from '@/components/content/VercelLogo';
import World4YouLogo from '@/components/content/World4YouLogo';

export default function Webhosting() {
  return (
    <div className="flex justify-center gap-8">
      <VercelLogo />
      <World4YouLogo />
    </div>
  );
}
