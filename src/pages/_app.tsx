import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { globalCSS } from '../styles';
import { AppProps } from 'next/app';

export const apolloClient = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
});

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Global
          styles={globalCSS}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
