import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface ProseProps {
  className?: string;
}

export default function Prose({ className, children }: PropsWithChildren<ProseProps>) {
  return (
    <div
      className={classNames(
        'prose prose-invert lg:prose-xl prose-headings:font-serif prose-headings:uppercase prose-p:m-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
