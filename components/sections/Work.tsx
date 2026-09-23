import { Card, Section, SectionHeading } from '../ui';

const WORK = [
  {
    big: '5s→1s',
    client: 'Dynatech — flight fare platform',
    title: 'Scaled search to 2M queries a day, then made it 3× faster.',
    body: 'HTTP → SQS migration, leaky-subscription fixes, and a rebuilt Go consumer cut time-to-first-result from 5 seconds to 1.',
    stats: ['2M/day', '3× faster', '−66% log cost'],
  },
  {
    big: '4×',
    client: 'Eurostar — booking platform',
    title: 'Cut the customer booking journey time fourfold.',
    body: 'Cache-aside plus deep memory optimization across login, checkout, and booking. Daily out-of-memory restarts gone for good.',
    stats: ['−75% latency', '512→170MB', '0 OOM restarts'],
  },
  {
    big: '20×',
    client: 'YouHodler — crypto fintech',
    title: 'The backend behind 20× user growth.',
    body: 'Built and scaled core wallet and trading features as monthly active users grew twentyfold. Growth customers notice and the backend never lets them feel.',
    stats: ['20× MAU', '24/7 money in motion', 'fintech / crypto'],
  },
  {
    big: '4–10×',
    client: 'Interhome — vacation rentals',
    title: 'Ten times less traffic, none of the staleness.',
    body: 'Caching and request collapsing cut calls to partner systems by 4–10×. Availability stayed fresh enough that nobody downstream noticed.',
    stats: ['4–10× less traffic', '0 stale results', 'travel / booking'],
  },
];

const Work = () => (
  <Section>
    <SectionHeading id="work">Selected work</SectionHeading>
    <div className="flex flex-col gap-[15px]">
      {WORK.map((w) => (
        <Card
          key={w.client}
          hover
          className="grid items-center gap-5 p-6 md:grid-cols-[200px_1fr_200px] md:gap-10 md:p-10"
        >
          <div className="text-[48px] leading-[1.1] font-extrabold text-accent">{w.big}</div>
          <div>
            <div className="mb-2 text-xs font-semibold tracking-[.08em] text-muted uppercase">{w.client}</div>
            <h3 className="mb-2.5 text-xl leading-tight font-semibold text-pretty">{w.title}</h3>
            <p className="m-0 max-w-[560px] text-[15px] leading-[1.5625] text-secondary">{w.body}</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-secondary md:flex-col md:text-right">
            {w.stats.map((s, i) => (
              <span key={s} className={i === 1 ? 'text-accent' : undefined}>
                {s}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

export default Work;
