import { ContactButton, Highlight } from '../ui';
import type { CtaSection } from '../../config/profile';

const Cta: React.FC<CtaSection> = ({ title, body, contacts }) => (
  <section className="flex flex-col items-center px-5 pt-20 pb-[60px] text-center md:px-10">
    <div className="max-w-[820px] border-4 border-white px-6 py-10 md:px-16 md:py-12">
      <h2 className="text-[32px] leading-[1.1] font-extrabold text-balance md:text-[48px]">
        <Highlight text={title} />
      </h2>
      <p className="mx-auto mt-5 mb-[30px] max-w-[480px] leading-[1.5625] text-secondary">{body}</p>
      <div className="flex flex-wrap justify-center gap-[15px]">
        {contacts.map((link) => (
          <ContactButton key={link.href} {...link} />
        ))}
      </div>
    </div>
  </section>
);

export default Cta;
