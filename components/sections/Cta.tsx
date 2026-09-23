import { Accent } from '../ui';
import { ContactButtons } from './Contact';

const Cta = () => (
  <section className="flex flex-col items-center px-5 pt-20 pb-[60px] text-center md:px-10">
    <div className="max-w-[820px] border-4 border-white px-6 py-10 md:px-16 md:py-12">
      <h2 className="text-[32px] leading-[1.1] font-extrabold text-balance md:text-[48px]">
        Need your backend <Accent>faster</Accent>, <Accent>cheaper</Accent>, or <Accent>calmer</Accent>?
      </h2>
      <p className="mx-auto mt-5 mb-[30px] max-w-[480px] leading-[1.5625] text-secondary">
        I take on consulting engagements and select full-time roles. The fastest way to reach me is LinkedIn.
      </p>
      <ContactButtons className="justify-center" />
    </div>
  </section>
);

export default Cta;
