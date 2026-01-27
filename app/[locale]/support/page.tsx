import MainContainer from '@/components/MainContainer';
import React from 'react';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import Prose from '@/components/Prose';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Line from '@/components/Line';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('support', props);
}

export default function SupportPage() {
  const t = useTranslations('SupportPage');
  const locale = useLocale();

  return (
    <MainContainer>
      <Prose className="text-center prose-ul:list-none">
        <h3>{t('omwTourTitle')}</h3>
        <p>{t('omwTourText')}</p>
        <p>
          <Link href="https://gofund.me/1558b1607">{t('omwTourLink')}</Link>
        </p>
        <Line />
        <h3>{t('title')}</h3>
        <p>{t('text')}</p>
        {locale === 'de' ? (
          <>
            <ul>
              <li>
                <Link href="https://www.akhwien.at/default.aspx?pid=36081">
                  Zwangsambulanz AKH Wien
                </Link>
              </li>
              <li>
                <Link href="https://www.zwaenge.de">
                  Deutsche Gesellschaft für Zwangserkrankungen
                </Link>
              </li>
              <li>
                <Link href="https://www.ocdland.com">OCD Land</Link>{' '}
                <span>(viele Support Angebote)</span>
              </li>
              <li>
                <Link href="https://iocdf.org">International OCD Foundation</Link>
              </li>
              <li>
                <Link href="https://www.krisenhilfeooe.at/">Krisenhilfe Oberösterreich</Link>
              </li>
              <li>
                <Link href="https://www.pmooe.at/">Pro Mente Oberösterreich</Link>{' '}
                <span>(Erstanlaufstelle und andere Support-Optionen)</span>
              </li>
            </ul>
            <Line />
            <h4>Selbsthilfegruppen</h4>
            <h5>Österreich</h5>
            <ul>
              <li>
                <Link href="https://www.zwaenge.at/selbsthilfegruppen/">
                  Selbsthilfegruppen-Übersicht auf zwaenge.at
                </Link>
              </li>
              <li>
                <Link href="https://www.hpe.at/de/">Selbsthilfegruppen für Angehörige</Link>
              </li>
              <li>
                <Link href="https://www.selbsthilfenoe.at/gruppe-finden/#z">Niederösterreich</Link>
              </li>
              <li>
                <Link href="https://selbsthilfe-stmk.at/zwangsstoerungen/">Steiermark</Link>
              </li>
              <li>
                <Link href="https://www.selbsthilfe-ooe.at/selbsthilfegruppen/selbsthilfegruppe_finden/">
                  Oberösterreich
                </Link>
              </li>
              <li>
                <Link href="https://sites.google.com/view/shglinz/startseite">Linz</Link>
              </li>
              <li>
                <Link href="https://www.selbsthilfe-salzburg.at/selbsthilfegruppen/selbsthilfegruppen-im-ueberblick/alle-selbsthilfegruppen/3-angst-depression-manie/depression-depression-angst-zwang-salzburg-stadt-1">
                  Salzburg
                </Link>
              </li>
              <li>
                <Link href="https://www.selbsthilfe-kaernten.at/selbsthilfegruppen/detail/psychische-erkrankungen-stoerungen_149">
                  Kärnten
                </Link>
              </li>
              <li>
                <Link href="https://selbsthilfe-tirol.at/selbsthilfegruppen/#gruppenverzeichnis">
                  Tirol
                </Link>{' '}
                <span>(Seite 7)</span>
              </li>
            </ul>
            <h5>Deutschland</h5>
            <ul>
              <li>
                <Link href="https://www.zwaenge.de/selbsthilfe/shg_liste/">
                  Liste der Selbsthilfegruppen
                </Link>
              </li>
            </ul>
            <h5>Schweiz</h5>
            <ul>
              <li>
                <Link href="https://zwaenge.ch/de/betroffene/selbsthilfe/">
                  Selbsthilfegruppe auf zwaenge.ch
                </Link>
              </li>
              <li>
                <Link href="https://www.selbsthilfeschweiz.ch/shch/de/selbsthilfeangebote/themenliste~thema~Zwangsst-rungen~.html">
                  Selbsthilfegruppe Themenliste auf selbsthilfeschweiz.ch
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <Link href="https://iocdf.org">International OCD Foundation</Link>
            </li>
            <li>
              <Link href="https://www.ocdwa.com.au">Western Australia</Link>
            </li>
            <li>
              <Link href="https://www.ocd.org.nz">New Zealand</Link>
            </li>
          </ul>
        )}
      </Prose>
    </MainContainer>
  );
}
