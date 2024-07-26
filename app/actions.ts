'use server';

import * as EmailValidator from 'email-validator';
import * as nodemailer from 'nodemailer';
import SMTPTransport, { Options } from 'nodemailer/lib/smtp-transport';

type Field = 'email' | 'message';
export type EmailState = {
  success?: boolean;
  validationErrors?: Field[];
  sendError?: boolean;
};

export async function sendEmail(
  captchaToken: string | undefined,
  _: EmailState,
  formData: FormData,
): Promise<EmailState> {
  const validationErrors: Field[] = [];

  const email = formData.has('email') ? formData.get('email')!.toString() : undefined;
  if (!email) {
    validationErrors.push('email');
  } else if (!EmailValidator.validate(email)) {
    validationErrors.push('email');
  }

  const message = formData.get('message');
  if (!message) {
    validationErrors.push('message');
  }

  const name = formData.has('name') ? formData.get('name')!.toString() : email;

  if (validationErrors.length > 0) {
    return { validationErrors };
  }

  if (captchaToken === undefined) {
    console.error('captcha verification failed because of missing token.');
    return { sendError: true };
  }

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${captchaToken}`;
  try {
    const response = await fetch(url, { method: 'post' });
    const result = await response.json();
    if (!result.success || result.score < 0.5) {
      console.error('captcha verification failed', result);
      return { sendError: true };
    }
  } catch (error) {
    console.error('captcha verification error', error);
    return { sendError: true };
  }

  // TODO read from config
  const canonicalUrl = 'ThrowYourHeartIntoTheSea.com';

  const mailOptions: Options = {
    from: process.env.SMTP_EMAIL,
    to: process.env.CONTACT_EMAIL,
    headers: [{ key: 'Reply-To', value: email! }],
    subject: `New message from ${email} via ${canonicalUrl}`,
    text: `${name} wrote: \n\n ${message}`,
  };

  let smtpPort: number;
  if (process.env.SMTP_PORT === undefined) {
    console.error("Couldn't send email. SMTP port is undefined.");
    return { sendError: true };
  }
  try {
    smtpPort = parseInt(process.env.SMTP_PORT, 10);
  } catch (e) {
    console.error("Couldn't send email. Error parsing SMTP port.", e);
    return { sendError: true };
  }

  const options: SMTPTransport.Options = {
    host: process.env.SMTP_SERVER,
    port: smtpPort,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(options);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (e) {
    console.error("Couldn't send email", e);
    return { sendError: true };
  }

  return {
    success: true,
  };
}
