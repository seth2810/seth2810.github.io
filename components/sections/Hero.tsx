import { Accent, Card, FramedTitle } from '../ui';
import { ContactButtons } from './Contact';

const METRICS = [
  ['2M+', 'searches/day scaled'],
  ['4×', 'faster booking journey'],
  ['20×', 'user growth scaled'],
  ['10+', 'years of backend work'],
];

const Hero = () => (
  <section className="border-b border-line-subtle">
    <div className="flex flex-col items-center gap-[22px] px-5 pt-[100px] pb-20 text-center md:px-10">
      <FramedTitle>Roman Gafurov</FramedTitle>
      <div className="leading-[1.5625] font-extrabold">Golang Engineer | High-Load Systems | Tech Lead</div>
    </div>

    <div className="px-5 pt-10 pb-20 md:px-10">
      <h1 className="m-0 max-w-[900px] text-[32px] leading-[1.1] font-extrabold text-balance md:text-[48px]">
        <Accent>Go</Accent> backends for <Accent>high load</Accent>.<br />
        Built to <Accent>scale</Accent>, tuned to save.
      </h1>
      <div className="mt-[30px] grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <p className="m-0 max-w-[600px] text-lg leading-[1.5625] text-secondary">
          I make Go services carry millions of requests a day without falling over, and I lead the teams that keep
          them there. Ten years of backend work, most of it where traffic spikes are normal. Yerevan, remote
          worldwide.
        </p>
        <ContactButtons />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-[15px] md:grid-cols-4">
        {METRICS.map(([value, label]) => (
          <Card key={label} className="p-[30px]">
            <div className="text-[40px] leading-[1.1] font-extrabold text-accent">{value}</div>
            <div className="mt-2 text-sm font-medium text-secondary">{label}</div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
