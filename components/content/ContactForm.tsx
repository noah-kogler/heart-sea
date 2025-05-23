import { Input, Textarea } from '@nextui-org/react';
import SubmitButton from '@/components/SubmitButton';
import React from 'react';
import { useFormState } from 'react-dom';
import { sendEmail } from '@/app/actions';
import { useTranslations } from 'next-intl';

type ContactFormProps = {
  captchaToken?: string;
};

export default function ContactForm({ captchaToken }: ContactFormProps) {
  const t = useTranslations('ContactForm');
  const [state, formAction] = useFormState(sendEmail.bind(null, captchaToken), {});

  return state.success ? (
    <p className="mt-8 text-center">{t('successMessage')}</p>
  ) : (
    <>
      {(state.validationErrors || state.sendError) && (
        <p className="mt-8 text-center">{t('errorMessage')}</p>
      )}
      <form action={formAction} className="flex flex-col light">
        <Input
          type="text"
          name="email"
          label={t('emailLabel')}
          placeholder={t('emailPlaceholder')}
          isInvalid={state.validationErrors?.includes('email')}
          errorMessage={t('emailError')}
          isRequired
          className="mt-8"
        />
        <Input
          type="text"
          name="name"
          label={t('nameLabel')}
          placeholder={t('namePlaceholder')}
          className="mt-8"
        />
        <Textarea
          name="message"
          label={t('messageLabel')}
          placeholder={t('messagePlaceholder')}
          isInvalid={state.validationErrors?.includes('message')}
          errorMessage={t('messageError')}
          className="mt-8"
          isRequired
        />
        <SubmitButton />
      </form>
    </>
  );
}
