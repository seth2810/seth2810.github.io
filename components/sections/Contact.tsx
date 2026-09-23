import { Button } from '../ui';

export const LINKEDIN = 'https://www.linkedin.com/in/roman-gafurov';
export const CALENDLY = 'https://calendly.com/seth2810';
export const EMAIL = 'mailto:gafurov.roma89@gmail.com?subject=Backend%20engagement%20enquiry';
export const GITHUB = 'https://github.com/seth2810';

export const ContactButtons = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-wrap gap-[15px] ${className}`}>
    <Button href={LINKEDIN} variant="solid" size="lg">
      Connect on LinkedIn
    </Button>
    <Button href={CALENDLY} variant="outline" size="lg">
      Book a call
    </Button>
  </div>
);
