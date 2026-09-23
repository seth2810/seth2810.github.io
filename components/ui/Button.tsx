import type { ReactNode } from 'react';
import { squircle } from './squircle';

const SIZE = {
  sm: 'px-3 py-1.5 text-sm border-2',
  lg: 'px-[26px] py-3.5 text-lg border-3',
};

const VARIANT = {
  solid: 'bg-white border-white text-navy hover:bg-accent hover:border-accent',
  outline: 'bg-transparent border-accent text-accent hover:bg-accent hover:text-navy',
};

export const Button = ({
  href,
  variant,
  size,
  children,
}: {
  href: string;
  variant: keyof typeof VARIANT;
  size: keyof typeof SIZE;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={squircle}
    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] font-semibold leading-[1.2] no-underline transition duration-180 ease-[cubic-bezier(.2,.7,.2,1)] hover:shadow-glow active:scale-[.98] active:opacity-85 ${SIZE[size]} ${VARIANT[variant]}`}
  >
    {children}
  </a>
);
