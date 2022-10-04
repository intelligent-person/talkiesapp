import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <meta name="my_id" content="600"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
