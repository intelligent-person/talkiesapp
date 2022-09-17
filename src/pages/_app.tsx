import { ApolloProvider } from '@apollo/client';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { globalCSS } from '../styles';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { apolloClient } from '../apolloClient';

export default function MyApp ({ Component, pageProps: { session, ...pageProperties } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Global
            styles={globalCSS}
          />
          <Component {...pageProperties} />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
