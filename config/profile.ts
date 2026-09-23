// All site copy and links, plus the schema they follow. Section components take their props from
// these types; section ids, headings and nav anchors are layout, set by the page that composes them.
// Text wrapped in *asterisks* renders the marked part in the accent colour.
import type { ContactLink, IconName, LinkItem } from '../components/ui';

// --- Page ---

export type Meta = {
  title: string;
};

export type NavSection = {
  action: LinkItem;
};

// --- Hero ---

export type Metric = {
  value: string;
  label: string;
};

export type HeroSection = {
  name: string;
  tagline: string;
  headline: string[];
  intro: string;
  contacts: ContactLink[];
  metrics: Metric[];
};

// --- Domains ---

export type Domain = {
  title: string;
  body: string;
};

export type DomainsSection = {
  intro: string;
  items: Domain[];
};

// --- Work ---

export type Project = {
  highlight: string;
  client: string;
  title: string;
  body: string;
  stats: string[];
};

export type WorkSection = {
  items: Project[];
};

// --- Principles & stack ---

export type Principle = {
  title: string;
  body: string;
};

export type PrinciplesSection = {
  items: Principle[];
};

export type StackSection = {
  items: string[];
};

// --- Call to action ---

export type CtaSection = {
  title: string;
  body: string;
  contacts: ContactLink[];
};

// --- Footer ---

export type SocialLink = LinkItem & {
  icon: IconName;
};

export type FooterSection = {
  socials: SocialLink[];
  note: string;
};

// --- Whole profile ---

export type Profile = {
  meta: Meta;
  nav: NavSection;
  hero: HeroSection;
  domains: DomainsSection;
  work: WorkSection;
  principles: PrinciplesSection;
  stack: StackSection;
  cta: CtaSection;
  footer: FooterSection;
};

const linkedin: ContactLink = {
  label: 'Connect on LinkedIn',
  href: 'https://www.linkedin.com/in/roman-gafurov',
  primary: true,
};

const calendly: ContactLink = {
  label: 'Book a call',
  href: 'https://calendly.com/seth2810',
};

// Call-to-action buttons shown in the hero and the closing section; `primary` renders solid.
const contacts: ContactLink[] = [linkedin, calendly];

export const profile: Profile = {
  meta: {
    title: 'Roman Gafurov — Go engineer for high-load systems',
  },

  nav: {
    action: linkedin,
  },

  hero: {
    name: 'Roman Gafurov',
    tagline: 'Golang Engineer | High-Load Systems | Tech Lead',
    headline: ['*Go* backends for *high load*.', 'Built to *scale*, tuned to save.'],
    intro:
      'I make Go services carry millions of requests a day without falling over, and I lead the teams that keep them there. Ten years of backend work, most of it where traffic spikes are normal. Yerevan, remote worldwide.',
    contacts,
    metrics: [
      { value: '2M+', label: 'searches/day scaled' },
      { value: '4×', label: 'faster booking journey' },
      { value: '20×', label: 'user growth scaled' },
      { value: '10+', label: 'years of backend work' },
    ],
  },

  domains: {
    intro:
      "If your project sits outside these domains, I'm probably not your best option, and I'll tell you so in the first five minutes.",
    items: [
      {
        title: 'Fintech & trading',
        body: 'Exchanges, wallets, payment flows. Latency is money, correctness is non-negotiable.',
      },
      {
        title: 'Travel & booking',
        body: 'Fare search, availability, checkout. Bursty traffic, huge fan-out, flaky third-party APIs.',
      },
      {
        title: 'High-load platforms',
        body: 'Marketplaces, SaaS, edtech at scale. Infra bills that grow slower than traffic.',
      },
    ],
  },

  work: {
    items: [
      {
        highlight: '5s→1s',
        client: 'Dynatech — flight fare platform',
        title: 'Scaled search to 2M queries a day, then made it 3× faster.',
        body: 'HTTP → SQS migration, leaky-subscription fixes, and a rebuilt Go consumer cut time-to-first-result from 5 seconds to 1.',
        stats: ['2M/day', '*3× faster*', '−66% log cost'],
      },
      {
        highlight: '4×',
        client: 'Eurostar — booking platform',
        title: 'Cut the customer booking journey time fourfold.',
        body: 'Cache-aside plus deep memory optimization across login, checkout, and booking. Daily out-of-memory restarts gone for good.',
        stats: ['−75% latency', '*512→170MB*', '0 OOM restarts'],
      },
      {
        highlight: '20×',
        client: 'YouHodler — crypto fintech',
        title: 'The backend behind 20× user growth.',
        body: 'Built and scaled core wallet and trading features as monthly active users grew twentyfold. Growth customers notice and the backend never lets them feel.',
        stats: ['20× MAU', '*24/7 money in motion*', 'fintech / crypto'],
      },
      {
        highlight: '4–10×',
        client: 'Interhome — vacation rentals',
        title: 'Ten times less traffic, none of the staleness.',
        body: 'Caching and request collapsing cut calls to partner systems by 4–10×. Availability stayed fresh enough that nobody downstream noticed.',
        stats: ['4–10× less traffic', '*0 stale results*', 'travel / booking'],
      },
    ],
  },

  principles: {
    items: [
      {
        title: 'Measure before optimizing.',
        body: 'Every number on this page started with a profile, a trace, or a bill.',
      },
      { title: 'Boring tech, sharp execution.', body: 'Proven tools pushed hard beat novel tools used timidly.' },
      { title: 'Teams outlast code.', body: 'Mentoring and honest reviews compound longer than any service.' },
    ],
  },

  stack: {
    items: ['Go', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS', 'gRPC', 'Elasticsearch', 'Node.js'],
  },

  cta: {
    title: 'Need your backend *faster*, *cheaper*, or *calmer*?',
    body: 'I take on consulting engagements and select full-time roles. The fastest way to reach me is LinkedIn.',
    contacts,
  },

  footer: {
    socials: [
      { icon: 'linkedin', label: 'LinkedIn', href: linkedin.href },
      { icon: 'calendar', label: 'Book a call', href: calendly.href },
      {
        icon: 'email',
        label: 'Email me',
        href: 'mailto:gafurov.roma89@gmail.com?subject=Backend%20engagement%20enquiry',
      },
      { icon: 'github', label: 'GitHub', href: 'https://github.com/seth2810' },
    ],
    note: 'Yerevan · Remote-friendly',
  },
};
