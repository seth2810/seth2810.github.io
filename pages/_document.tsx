import { Html, Head, Main, NextScript } from 'next/document';

// Always open at the hero: runs before the body renders, so the browser neither restores
// the previous scroll position on refresh nor jumps to a #section hash from the URL.
const START_AT_TOP = `history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);`;

const Document = () => (
  <Html lang="en">
    <Head>
      <script dangerouslySetInnerHTML={{ __html: START_AT_TOP }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
