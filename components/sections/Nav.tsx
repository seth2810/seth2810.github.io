import { Button } from '../ui';
import { LINKEDIN } from './Contact';

const LINKS = [
  ['#domains', 'Domains'],
  ['#work', 'Work'],
  ['#principles', 'Principles'],
];

const Nav = () => (
  <nav className="sticky top-0 z-10 mx-[calc(50%-50vw)] flex items-center justify-end border-b border-line-subtle bg-navy/55 px-[max(20px,calc(50vw-50%+20px))] py-5 backdrop-blur-[14px] md:px-[max(40px,calc(50vw-50%+40px))]">
    <div className="flex items-center gap-[30px]">
      {LINKS.map(([href, label]) => (
        <a
          key={href}
          href={href}
          className="hidden leading-none font-medium text-secondary transition-colors hover:text-accent sm:inline"
        >
          {label}
        </a>
      ))}
      <Button href={LINKEDIN} variant="solid" size="sm">
        Connect on LinkedIn
      </Button>
    </div>
  </nav>
);

export default Nav;
