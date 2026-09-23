import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ICONS = {
  calendar: faCalendarCheck,
  email: faPaperPlane,
  github: faGithub,
  linkedin: faLinkedin,
};

export type IconName = keyof typeof ICONS;

export type IconButtonProps = { href: string; label: string; icon: IconName };

export const IconButton: React.FC<IconButtonProps> = ({ href, label, icon }) => {
  const external = !href.startsWith('mailto:');
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center text-[22px] leading-[25px] text-secondary transition-colors duration-180 hover:text-accent"
    >
      <FontAwesomeIcon icon={ICONS[icon]} />
    </a>
  );
};
