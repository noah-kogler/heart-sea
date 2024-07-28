import Script from 'next/script';
import React, { useCallback, useEffect } from 'react';
import { useLocale } from 'next-intl';

const onLoadCallbackName = 'onReCaptchaLoaded';
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type RecaptchaComponentProps = {
  setCaptchaToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function Recaptcha({ setCaptchaToken }: RecaptchaComponentProps) {
  const locale = useLocale();

  const onLoad = useCallback(() => {
    // @ts-expect-error no types for grecaptcha
    const grecaptcha = window.grecaptcha?.enterprise;
    if (grecaptcha) {
      grecaptcha.ready(function () {
        grecaptcha.execute(siteKey, { action: 'submit' }).then(function (token: string) {
          setCaptchaToken(token);
        });
      });
    }
  }, [setCaptchaToken]);

  useEffect(() => {
    onLoad();
    (window as unknown as { [key: string]: () => void })[onLoadCallbackName] = onLoad;
  }, [onLoad]);

  // TODO when the user sends the form and comes back to contact, recaptcha validation returns timeout-or-duplicate

  return (
    <Script
      src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}&onload=${onLoadCallbackName}&hl=${locale}`}
      async
      defer
    />
  );
}
