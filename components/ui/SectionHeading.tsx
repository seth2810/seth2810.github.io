import type { ReactNode } from 'react';

export const SectionHeading = ({
  id,
  className = 'mb-[30px]',
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => (
  <h2 id={id} className={`scroll-mt-[110px] text-[32px] leading-[1.1] font-extrabold ${className}`}>
    {children}
  </h2>
);
