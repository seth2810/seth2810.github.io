export type HighlightProps = { text: string };

// Renders text with *marked* parts in the accent colour, e.g. "Built to *scale*".
export const Highlight: React.FC<HighlightProps> = ({ text }) => (
  <>{text.split('*').map((part, i) => (i % 2 ? <span key={i} className="text-accent">{part}</span> : part))}</>
);
