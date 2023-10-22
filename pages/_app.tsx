import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Meta from '~/components/Meta';
import ScrollButtons from '~/components/ScrollButtons';
import Footer from '~/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Analytics />
      <Meta />
      <ScrollButtons />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
