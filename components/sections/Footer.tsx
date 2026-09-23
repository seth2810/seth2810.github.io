import { faPaperPlane, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconButton } from '../ui';
import { CALENDLY, EMAIL, GITHUB, LINKEDIN } from './Contact';

const Footer = () => (
  <footer className="flex flex-col items-center gap-[18px] border-t border-line-subtle px-5 pt-[30px] pb-10 md:px-10">
    <div className="flex flex-wrap items-center justify-center gap-[30px]">
      <IconButton href={LINKEDIN} label="LinkedIn" icon={faLinkedin} />
      <IconButton href={CALENDLY} label="Book a call" icon={faCalendarCheck} />
      <IconButton href={EMAIL} label="Email me" icon={faPaperPlane} target="_self" />
      <IconButton href={GITHUB} label="GitHub" icon={faGithub} />
    </div>
    <div className="text-sm text-muted">Yerevan · Remote-friendly</div>
  </footer>
);

export default Footer;
