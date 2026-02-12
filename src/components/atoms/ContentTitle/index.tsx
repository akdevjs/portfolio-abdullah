import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ContentTitle({ children, className }: Props) {
  return <h3 className={classNames('text-lg font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300', className)}>{children}</h3>;
}
