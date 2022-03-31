import '../src/styles/main.scss';

import { AnimatePresence } from 'framer-motion';
import Footer from '../src/components/Footer';
import { GlobalContextProvider } from '../src/contexts/GlobalContext';
import Head from 'flareact/head';
import { Header } from '../src/components/Header';
import { globalStyle } from '../src/styles/stitches.config';
import { useRouter } from 'flareact/router';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
    const { query } = useRouter();
    globalStyle();
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://assets.azion.com/static/images/favicon/favicon.png"
                />
            </Head>

            <GlobalContextProvider lang={query.lang}>
                <AnimatePresence exitBeforeEnter>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                    {/* {JSON.stringify(data)} */}
                </AnimatePresence>
            </GlobalContextProvider>
        </>
    );
}
