import React from 'react';

export interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h3 className="text-center text-lg font-bold">{children}</h3>;
}
