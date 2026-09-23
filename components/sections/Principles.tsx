import { Section, SectionHeading, Tag, type SectionHeader } from '../ui';
import type { PrinciplesSection, StackSection } from '../../config/profile';

export type PrinciplesProps = SectionHeader & {
  stackTitle: string;
  principles: PrinciplesSection;
  stack: StackSection;
};

// "How I work" and "Stack", side by side.
const Principles: React.FC<PrinciplesProps> = ({ id, title, stackTitle, principles, stack }) => (
  <Section className="grid gap-[60px] md:grid-cols-2">
    <div>
      <SectionHeading id={id}>{title}</SectionHeading>
      <ol className="m-0 flex list-none flex-col gap-5 p-0">
        {principles.items.map((item, i) => (
          <li key={item.title} className="flex items-baseline gap-[15px]">
            <div className="min-w-6 font-extrabold text-accent">{String(i + 1).padStart(2, '0')}</div>
            <div className="leading-[1.5625]">
              <b>{item.title}</b> <span className="text-secondary">{item.body}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div>
      <SectionHeading>{stackTitle}</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {stack.items.map((s) => (
          <Tag key={s} selected>
            {s}
          </Tag>
        ))}
      </div>
    </div>
  </Section>
);

export default Principles;
