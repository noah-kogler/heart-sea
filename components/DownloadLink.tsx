import Icon from '@mdi/react';
import React from 'react';
import classNames from 'classnames';

export type DownloadLinkProps = {
  href: string;
  label: string;
  icon: string;
  variant?: 'small' | 'regular';
  size: string;
};

export default function DownloadLink({
  href,
  label,
  icon,
  variant = 'regular',
  size,
}: DownloadLinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        'group mx-auto flex items-center rounded-lg border-1 border-gray-500 backdrop-blur-md hover:border-gray-200',
        {
          'gap-2 px-4 py-2': variant === 'regular',
          'gap-1 p-1': variant === 'small',
        },
      )}
    >
      <Icon path={icon} size={1} className="fill-current text-gray-500 group-hover:text-gray-200" />
      <span className={classNames({ 'text-sm': variant === 'small' })}>{label}</span>
      <span
        className={classNames('text-gray-500 group-hover:text-gray-200', {
          'text-sm': variant === 'regular',
          'text-xs': variant === 'small',
        })}
      >
        ({size})
      </span>
    </a>
  );
}
