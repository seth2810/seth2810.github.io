import Head from 'next/head';
import { profile } from '../config/profile';
import { Droplets } from '../components/ui';
import Nav from '../components/sections/Nav';
import Hero from '../components/sections/Hero';
import Domains from '../components/sections/Domains';
import Work from '../components/sections/Work';
import Principles from '../components/sections/Principles';
import Cta from '../components/sections/Cta';
import Footer from '../components/sections/Footer';

const Index = () => (
  <>
    <Head>
      <title>{profile.meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <div className="relative min-h-screen overflow-clip bg-navy text-white">
      <Droplets />
      <div className="relative mx-auto max-w-[1180px]">
        <Nav
          links={[
            { label: 'Domains', href: '#domains' },
            { label: 'Work', href: '#work' },
            { label: 'Principles', href: '#principles' },
          ]}
          {...profile.nav}
        />
        <main>
          <Hero {...profile.hero} />
          <Domains id="domains" title="Where I do my best work" {...profile.domains} />
          <Work id="work" title="Selected work" {...profile.work} />
          <Principles
            id="principles"
            title="How I work"
            stackTitle="Stack"
            principles={profile.principles}
            stack={profile.stack}
          />
          <Cta {...profile.cta} />
        </main>
        <Footer {...profile.footer} />
      </div>
    </div>
  </>
);

export default Index;
