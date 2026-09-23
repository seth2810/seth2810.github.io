import { Card, Section, SectionHeading, type SectionHeader } from '../ui';
import type { DomainsSection } from '../../config/profile';

export type DomainsProps = DomainsSection & SectionHeader;

const Domains: React.FC<DomainsProps> = ({ id, title, intro, items }) => (
  <Section>
    <SectionHeading id={id} className="mb-3">
      {title}
    </SectionHeading>
    <p className="m-0 mb-[30px] max-w-[600px] leading-[1.5625] text-secondary">{intro}</p>
    <div className="grid gap-[15px] md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} hover className="p-[30px]">
          <h3 className="mb-2.5 text-xl leading-tight font-semibold">{item.title}</h3>
          <p className="m-0 text-[15px] leading-[1.5625] text-secondary">{item.body}</p>
        </Card>
      ))}
    </div>
  </Section>
);

export default Domains;
