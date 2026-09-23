import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../styles/globals.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
