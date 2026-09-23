import type { ReactNode } from 'react';
import { squircle } from './squircle';

export const Card = ({
  hover,
  className = '',
  children,
}: {
  hover?: boolean;
  className?: string;
  children: ReactNode;
}) => (
  <div
    style={squircle}
    className={`rounded-[20px] border border-line bg-navy/60 ${hover ? 'transition-colors hover:border-accent' : ''} ${className}`}
  >
    {children}
  </div>
);
