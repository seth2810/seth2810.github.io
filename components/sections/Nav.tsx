import { Button, type LinkItem } from '../ui';
import type { NavSection } from '../../config/profile';

export type NavProps = NavSection & { links: LinkItem[] };

const Nav: React.FC<NavProps> = ({ links, action }) => (
  <nav className="sticky top-0 z-10 mx-[calc(50%-50vw)] flex items-center justify-end border-b border-line-subtle bg-navy/55 px-[max(20px,calc(50vw-50%+20px))] py-5 backdrop-blur-[14px] md:px-[max(40px,calc(50vw-50%+40px))]">
    <div className="flex items-center gap-[30px]">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="hidden leading-none font-medium text-secondary transition-colors hover:text-accent sm:inline"
        >
          {label}
        </a>
      ))}
      <Button href={action.href} variant="solid" size="sm">
        {action.label}
      </Button>
    </div>
  </nav>
);

export default Nav;
