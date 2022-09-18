import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Script from 'next/script';

function Watch () {
  const { query: { id } } = useRouter();
  if (!id) return null;

  return (
    <div>
      tata
      <div
        css={css`
         display: block;
         width: 100% !important;
         height: 100% !important;
      
         iframe {
               height: 100% !important;
           }
         `
        }
        id="kinobd"
        data-resize="1"
        data-bg="#000"
        data-kinopoisk={query?.id}
      ></div>
      <Script
        strategy="beforeInteractive"
        async={true}
        src={`//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=${String(id)}&players=moonwalk,hdgo,kodik,iframe,trailer,torrent`}
      />
      <div
        className="uitools"
        id="videoplayers"
        css={css`height:370px;width:610px;background-image: url('//pleer.videoplayers.club/web/img/loader.gif');background-repeat: no-repeat;background-position: center;background-color: #ccc;`}
      ></div>
      <iframe title={'film'} src={`https://100.annacdn.cc/caxEtZ81jGMN?kp_id=${String(id)}`} width="640" height="480" frameBorder="0"
        allowFullScreen></iframe>
      {/* <iframe src="https://5165.svetacdn.in/T4uMkzS9mA3m?imdb_id=tt7631058" width="640" height="480" frameBorder="0" */}
      {/*   allowFullScreen></iframe> */}
    </div>
  );
}

export default Watch;
