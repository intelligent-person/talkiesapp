import { ApolloProvider } from '@apollo/client';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { globalCSS } from '../styles';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { apolloClient } from '../apolloClient';
import Script from 'next/script';

export default function MyApp ({ Component, pageProps: { session, ...pageProperties } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Global
            styles={globalCSS}
          />
          <meta name="my_id" content="600"/>
          <Component {...pageProperties} />
          <Script src="https://kinobd.ru/js/player_.js" strategy={'lazyOnload'}/>
          <Script src="//kinoplayer.top/top.js" strategy={'lazyOnload'}/>

        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
