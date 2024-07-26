'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function SubmitButton() {
  const t = useTranslations('SubmitButton');
  const { pending } = useFormStatus();

  return (
    <Button className="mt-8" type="submit" disabled={pending}>
      {pending ? t('sending') : t('sendLabel')}
    </Button>
  );
}
