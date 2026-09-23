import { Button } from './Button';

export type LinkItem = { label: string; href: string };
export type ContactLink = LinkItem & { primary?: boolean };

// One call-to-action link: solid when primary, outlined otherwise.
export const ContactButton: React.FC<ContactLink> = ({ label, href, primary }) => (
  <Button href={href} variant={primary ? 'solid' : 'outline'} size="lg">
    {label}
  </Button>
);
