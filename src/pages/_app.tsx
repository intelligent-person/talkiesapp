import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {css, Global, ThemeProvider} from "@emotion/react";
import {theme} from "../styles/theme";

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
          styles={css`
            body {
              margin: 0;
            }
            @font-face {
              font-family: "SF UI Display";
              src: url('../assets/fonts/FontsFree-Net-SF-UI-Display-Regular-1.ttf');
              font-weight: normal;
              font-style: normal;
            }
          `}
        />
          <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
