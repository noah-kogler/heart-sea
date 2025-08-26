import React from 'react';
import Image from 'next/image';

export default function VercelLogo() {
  return (
    <a href="https://vercel.com" className="flex items-center gap-1 no-underline">
      <Image src="/hosting/vercel.svg" alt="Vercel" width={20} height={20} />
      <span>Vercel</span>
    </a>
  );
}
