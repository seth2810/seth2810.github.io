import type { ReactNode } from 'react';

export const Section = ({ className = '', children }: { className?: string; children: ReactNode }) => (
  <section className={`border-b border-line-subtle px-5 py-[60px] md:px-10 ${className}`}>{children}</section>
);
