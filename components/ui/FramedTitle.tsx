import type { ReactNode } from 'react';

export const FramedTitle = ({ children }: { children: ReactNode }) => (
  <div className="inline-block whitespace-nowrap border-4 border-white px-5 py-[15px] text-[32px] font-semibold leading-[normal] md:px-10 md:py-[30px] md:text-[48px]">
    {children}
  </div>
);
