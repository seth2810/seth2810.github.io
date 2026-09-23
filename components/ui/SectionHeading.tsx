import type { ReactNode } from 'react';

// Anchor id and heading of a page section.
export type SectionHeader = { id: string; title: string };

export type SectionHeadingProps = { id?: string; className?: string; children: ReactNode };

export const SectionHeading: React.FC<SectionHeadingProps> = ({ id, className = 'mb-[30px]', children }) => (
  <h2 id={id} className={`scroll-mt-[110px] text-[32px] leading-[1.1] font-extrabold ${className}`}>
    {children}
  </h2>
);
