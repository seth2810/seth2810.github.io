import type { ReactNode } from 'react';
import { squircle } from './squircle';

export type CardProps = { hover?: boolean; className?: string; children: ReactNode };

export const Card: React.FC<CardProps> = ({ hover, className = '', children }) => (
  <div
    style={squircle}
    className={`rounded-[20px] border border-line bg-navy/60 ${hover ? 'transition-colors hover:border-accent' : ''} ${className}`}
  >
    {children}
  </div>
);
