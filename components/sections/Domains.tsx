import { Card, Section, SectionHeading } from '../ui';

const DOMAINS = [
  ['Fintech & trading', 'Exchanges, wallets, payment flows. Latency is money, correctness is non-negotiable.'],
  ['Travel & booking', 'Fare search, availability, checkout. Bursty traffic, huge fan-out, flaky third-party APIs.'],
  ['High-load platforms', 'Marketplaces, SaaS, edtech at scale. Infra bills that grow slower than traffic.'],
];

const Domains = () => (
  <Section>
    <SectionHeading id="domains" className="mb-3">
      Where I do my best work
    </SectionHeading>
    <p className="m-0 mb-[30px] max-w-[600px] leading-[1.5625] text-secondary">
      If your project sits outside these domains, I&apos;m probably not your best option, and I&apos;ll tell you so
      in the first five minutes.
    </p>
    <div className="grid gap-[15px] md:grid-cols-3">
      {DOMAINS.map(([title, body]) => (
        <Card key={title} hover className="p-[30px]">
          <h3 className="mb-2.5 text-xl leading-tight font-semibold">{title}</h3>
          <p className="m-0 text-[15px] leading-[1.5625] text-secondary">{body}</p>
        </Card>
      ))}
    </div>
  </Section>
);

export default Domains;
