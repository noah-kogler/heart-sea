import { Button, Input, Textarea } from '@nextui-org/react';
import Heading from '@/components/Heading';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <main>
      <Heading>{t('title')}</Heading>
      <Input
        type="email"
        label={t('emailLabel')}
        placeholder={t('emailPlaceholder')}
        isRequired
        className="mt-8 max-w-md"
      />
      <Input
        type="text"
        label={t('nameLabel')}
        placeholder={t('namePlaceholder')}
        className="mt-8 max-w-md"
      />
      <Textarea
        label={t('messageLabel')}
        placeholder={t('messagePlaceholder')}
        className="mt-8 max-w-md"
        isRequired
      />
      <Button className="mt-8">{t('sendLabel')}</Button>
    </main>
  );
}
