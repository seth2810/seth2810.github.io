import { Card, Highlight, Section, SectionHeading, type SectionHeader } from '../ui';
import type { WorkSection } from '../../config/profile';

export type WorkProps = WorkSection & SectionHeader;

const Work: React.FC<WorkProps> = ({ id, title, items }) => (
  <Section>
    <SectionHeading id={id}>{title}</SectionHeading>
    <div className="flex flex-col gap-[15px]">
      {items.map((w) => (
        <Card
          key={w.client}
          hover
          className="grid items-center gap-5 p-6 md:grid-cols-[200px_1fr_200px] md:gap-10 md:p-10"
        >
          <div className="text-[48px] leading-[1.1] font-extrabold text-accent">{w.highlight}</div>
          <div>
            <div className="mb-2 text-xs font-semibold tracking-[.08em] text-muted uppercase">{w.client}</div>
            <h3 className="mb-2.5 text-xl leading-tight font-semibold text-pretty">{w.title}</h3>
            <p className="m-0 max-w-[560px] text-[15px] leading-[1.5625] text-secondary">{w.body}</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-secondary md:flex-col md:text-right">
            {w.stats.map((s) => (
              <span key={s}>
                <Highlight text={s} />
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

export default Work;
