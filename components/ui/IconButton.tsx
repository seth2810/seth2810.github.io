import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const IconButton = ({
  href,
  label,
  icon,
  target = '_blank',
}: {
  href: string;
  label: string;
  icon: IconDefinition;
  target?: string;
}) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' ? 'noreferrer' : undefined}
    aria-label={label}
    title={label}
    className="inline-flex items-center justify-center text-[22px] leading-[25px] text-secondary transition-colors duration-180 hover:text-accent"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);
