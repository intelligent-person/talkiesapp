import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {css, Global, ThemeProvider} from "@emotion/react";
import {theme} from "../styles/theme";
import {globalCSS} from "../styles";

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})

function MyApp({Component, pageProps}) {
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

export default MyApp;
