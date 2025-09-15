'use client';

import React, { MouseEventHandler } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
  const pathname = usePathname();

  const menuItems = [
    { label: t('homeLabel'), href: '/' },
    { label: t('trailerLabel'), href: '/trailer' },
    { label: t('screeningsLabel'), href: '/screenings' },
    { label: t('downloadsLabel'), href: '/downloads' },
    { label: t('creditsLabel'), href: '/credits' },
    { label: t('contactLabel'), href: '/contact' },
  ];

  return (
    <div className="text-foreground dark">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        height="4rem"
        className="opacity-75 transition-opacity hover:opacity-100"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? t('closeMenuLabel') : t('openMenuLabel')}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden gap-8 sm:flex" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NavBarLink label={item.label} href={item.href} active={pathname === item.href} />
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <LanguageSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavBarLink
                label={item.label}
                href={item.href}
                active={pathname === item.href}
                onMouseUp={() => setIsMenuOpen()}
              />
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

type NavBarLinkProps = {
  label: string;
  href: string;
  active: boolean;
  onMouseUp?: MouseEventHandler<HTMLAnchorElement>;
};

function NavBarLink({ label, href, active, onMouseUp }: NavBarLinkProps) {
  return active ? (
    <span>{label}</span>
  ) : (
    <Link href={href} className="underline opacity-75 hover:opacity-100" onMouseUp={onMouseUp}>
      {label}
    </Link>
  );
}
