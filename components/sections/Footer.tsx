import { IconButton } from '../ui';
import type { FooterSection } from '../../config/profile';

const Footer: React.FC<FooterSection> = ({ socials, note }) => (
  <footer className="flex flex-col items-center gap-[18px] border-t border-line-subtle px-5 pt-[30px] pb-10 md:px-10">
    <div className="flex flex-wrap items-center justify-center gap-[30px]">
      {socials.map((s) => (
        <IconButton key={s.href} {...s} />
      ))}
    </div>
    <div className="text-sm text-muted">{note}</div>
  </footer>
);

export default Footer;
