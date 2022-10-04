import { ApolloProvider } from '@apollo/client';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { globalCSS } from '../styles';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { apolloClient } from '../clientAPI/apolloClient';
import Script from 'next/script';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';

function MyApp ({ Component, pageProps: { session, ...pageProperties }, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProperties);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Global
              styles={globalCSS}
            />
            <Component {...props} />
            <meta name="my_id" content="600"/>
            <Script src="https://kinobd.ru/js/player_.js" strategy={'lazyOnload'}/>
            <Script src="https://kinoplayer.top/top.js" strategy={'lazyOnload'}/>
            <Script src="https://v1664100904.bazon.site/js/bazon.js" strategy={'lazyOnload'}></Script>
            <Script
              src="https://pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=[xfvalue_333]&players=apicollaps,videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&ani=COLLAPS&ati=&adi=&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=https://talkiesapp.vercel.app"
              strategy={'lazyOnload'}>
            </Script>
          </ThemeProvider>
        </ApolloProvider>
      </SessionProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
