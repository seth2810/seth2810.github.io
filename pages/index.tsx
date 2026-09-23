import Head from 'next/head';
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
      <title>Roman Gafurov — Go engineer for high-load systems</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <div className="relative min-h-screen overflow-clip bg-navy text-white">
      <Droplets />
      <div className="relative mx-auto max-w-[1180px]">
        <Nav />
        <main>
          <Hero />
          <Domains />
          <Work />
          <Principles />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  </>
);

export default Index;
