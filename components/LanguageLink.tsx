import Link from 'next/link';

type LanguageLinkProps = {
  locale: string;
  active: boolean;
};

export default function LanguageLink({ locale, active }: LanguageLinkProps) {
  return (
    <span className="uppercase">
      {active ? (
        locale
      ) : (
        <Link href={`/${locale}`} className="underline">
          {locale}
        </Link>
      )}
    </span>
  );
}
