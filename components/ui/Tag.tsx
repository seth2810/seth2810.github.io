import type { ReactNode } from 'react';
import { squircle } from './squircle';

export const Tag = ({ selected, children }: { selected?: boolean; children: ReactNode }) => (
  <span
    style={squircle}
    className={`inline-flex items-center rounded-[10px] border px-2.5 py-1 text-sm font-medium transition-colors duration-180 ${
      selected ? 'border-accent bg-accent-subtle text-accent' : 'border-line text-secondary hover:border-white'
    }`}
  >
    {children}
  </span>
);
