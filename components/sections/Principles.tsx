import { Section, SectionHeading, Tag } from '../ui';

const PRINCIPLES = [
  ['Measure before optimizing.', 'Every number on this page started with a profile, a trace, or a bill.'],
  ['Boring tech, sharp execution.', 'Proven tools pushed hard beat novel tools used timidly.'],
  ['Teams outlast code.', 'Mentoring and honest reviews compound longer than any service.'],
];

const STACK = ['Go', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS', 'gRPC', 'Elasticsearch', 'Node.js'];

// "How I work" and "Stack", side by side.
const Principles = () => (
  <Section className="grid gap-[60px] md:grid-cols-2">
    <div>
      <SectionHeading id="principles">How I work</SectionHeading>
      <ol className="m-0 flex list-none flex-col gap-5 p-0">
        {PRINCIPLES.map(([title, body], i) => (
          <li key={title} className="flex items-baseline gap-[15px]">
            <div className="min-w-6 font-extrabold text-accent">{String(i + 1).padStart(2, '0')}</div>
            <div className="leading-[1.5625]">
              <b>{title}</b> <span className="text-secondary">{body}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div>
      <SectionHeading>Stack</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {STACK.map((s) => (
          <Tag key={s} selected>
            {s}
          </Tag>
        ))}
      </div>
    </div>
  </Section>
);

export default Principles;
