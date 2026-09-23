import type { ReactNode } from 'react';

export type SectionProps = { className?: string; children: ReactNode };

export const Section: React.FC<SectionProps> = ({ className = '', children }) => (
  <section className={`border-b border-line-subtle px-5 py-[60px] md:px-10 ${className}`}>{children}</section>
);
