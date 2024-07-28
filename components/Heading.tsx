import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface HeadingProps {
  className?: string;
}

export default function Heading({ className, children }: PropsWithChildren<HeadingProps>) {
  return <h3 className={classNames(className, 'font-serif uppercase')}>{children}</h3>;
}
