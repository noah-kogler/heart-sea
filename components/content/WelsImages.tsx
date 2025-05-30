import Image from 'next/image';
import React from 'react';

export default function WelsImages() {
  return (
    <div className="not-prose mt-6 grid justify-items-center gap-4 lg:grid-cols-3">
      <Image src="/images/wels1.jpg" width={330} height={220} alt="Wels Screening 1" />
      <Image src="/images/wels2.jpg" width={330} height={220} alt="Wels Screening 2" />
      <Image src="/images/wels3.jpg" width={330} height={220} alt="Wels Screening 3" />
    </div>
  );
}
