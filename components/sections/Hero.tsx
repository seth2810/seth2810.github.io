import { Fragment } from 'react';
import { Card, ContactButton, FramedTitle, Highlight } from '../ui';
import type { HeroSection } from '../../config/profile';

const Hero: React.FC<HeroSection> = ({ name, tagline, headline, intro, contacts, metrics }) => (
  <section className="border-b border-line-subtle">
    <div className="flex flex-col items-center gap-[22px] px-5 pt-[100px] pb-20 text-center md:px-10">
      <FramedTitle>{name}</FramedTitle>
      <div className="leading-[1.5625] font-extrabold">{tagline}</div>
    </div>

    <div className="px-5 pt-10 pb-20 md:px-10">
      <h1 className="m-0 max-w-[900px] text-[32px] leading-[1.1] font-extrabold text-balance md:text-[48px]">
        {headline.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            <Highlight text={line} />
          </Fragment>
        ))}
      </h1>
      <div className="mt-[30px] grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <p className="m-0 max-w-[600px] text-lg leading-[1.5625] text-secondary">{intro}</p>
        <div className="flex flex-wrap gap-[15px]">
          {contacts.map((link) => (
            <ContactButton key={link.href} {...link} />
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-[15px] md:grid-cols-4">
        {metrics.map(({ value, label }) => (
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
