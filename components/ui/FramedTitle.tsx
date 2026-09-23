import type { ReactNode } from 'react';

export type FramedTitleProps = { children: ReactNode };

export const FramedTitle: React.FC<FramedTitleProps> = ({ children }) => (
  <div className="inline-block whitespace-nowrap border-4 border-white px-5 py-[15px] text-[32px] font-semibold leading-[normal] md:px-10 md:py-[30px] md:text-[48px]">
    {children}
  </div>
);
