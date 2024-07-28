import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface ContentContainerProps {
  className?: string;
}

export default function MainContainer({
  className,
  children,
}: PropsWithChildren<ContentContainerProps>) {
  return (
    <main className={classNames('mx-auto flex max-w-5xl flex-col px-8 py-24', className)}>
      {children}
    </main>
  );
}
