import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface ContentContainerProps {
  className?: string;
}

export default function ContentContainer({
  className,
  children,
}: PropsWithChildren<ContentContainerProps>) {
  return (
    <main className={classNames('m-auto flex max-w-5xl flex-col px-8', className)}>{children}</main>
  );
}
