import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Index = () => (
  <>
    <Head>
      <title>Roman Gafurov - Software Engineer</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Roman Gafurov</h1>
      <FontAwesomeIcon icon={faInfinity} width={22} />
      <p>Software Engineer</p>
    </main>

    <footer>
      <nav>
        <ul>
          <li>
            <Link href="https://github.com/seth2810" passHref>
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} width={18} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/seth2810">
              <a target="_blank">
                <FontAwesomeIcon icon={faLinkedin} width={18} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://medium.com/@seth2810">
              <a target="_blank">
                <FontAwesomeIcon icon={faMedium} width={18} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="mailto:gafurov.roma89@gmail.com">
              <a target="_self">
                <FontAwesomeIcon icon={faPaperPlane} width={18} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  </>
);

export default Index;
