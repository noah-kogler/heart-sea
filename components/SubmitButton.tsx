'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { mdiEmail } from '@mdi/js';
import Icon from '@mdi/react';

export default function SubmitButton() {
  const t = useTranslations('SubmitButton');
  const { pending } = useFormStatus();

  return (
    <Button
      startContent={<Icon path={mdiEmail} size={1} className="mr-2" />}
      className="mt-8 self-center"
      type="submit"
      disabled={pending}
      size="lg"
    >
      {pending ? t('sending') : t('sendLabel')}
    </Button>
  );
}
