import React, { PropsWithChildren } from 'react';

export interface HeadingProps {
  className?: string;
}

export default function Heading({ className, children }: PropsWithChildren<HeadingProps>) {
  return <h3 className={className}>{children}</h3>;
}
