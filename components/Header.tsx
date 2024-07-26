'use client';

import React from 'react';
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Trailer', href: '/trailer' },
    { label: 'Credits', href: '/credits' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="dark">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        height="4rem"
        className="opacity-75 transition-opacity hover:opacity-100"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden gap-8 sm:flex" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              {pathname === item.href ? (
                <span>{item.label}</span>
              ) : (
                <Link href={item.href} className="underline opacity-75 hover:opacity-100">
                  {item.label}
                </Link>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <LanguageSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="dark">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.href} onMouseUp={() => setIsMenuOpen()}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
