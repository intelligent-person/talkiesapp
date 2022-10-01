import { useRouter } from 'next/router';
import { css } from '@emotion/react';

function Watch () {
  const { query: { id } } = useRouter();
  if (!id) return null;

  return (
    <div>
      {/* <div > */}
      {/*   <button data-click-kinoplayer="kinoplayertop" >Терминатор</button> */}
      {/* </div> */}

      <div>
        <div id="kinoplayertop" data-kinopoisk="444"></div>
      </div>

      <div
        id="kinobd"
        data-resize="1"
        data-bg="#000"
        data-kinopoisk={id}
      ></div>
      <iframe title={'film'} src={`https://100.annacdn.cc/caxEtZ81jGMN?kp_id=${String(id)}`} width="640" height="480" frameBorder="0"
        allowFullScreen></iframe>
      {/* <iframe src="https://5165.svetacdn.in/T4uMkzS9mA3m?imdb_id=tt7631058" width="640" height="480" frameBorder="0" */}
      {/*   allowFullScreen></iframe> */}
      <div
        id="kinoplayertop"
        data-kinopoisk={String(id)}
      ></div>
      <div
        id="bazon"
        data-width="500"
        data-height="500"
        data-kinopoisk={id}
        // data-replace=""
        // data-calback=""
        // data-calback_found=""
      ></div>
      <iframe
        title={'film'}
        src={`https://v1664100904.bazon.site/kp/${String(id)}`}
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}
        referrerPolicy="origin"
        width="800"
        height="452"
      ></iframe>
      <div className="uitools" id="videoplayers"
        css={
          css`height:370px;width:610px;background-image: url('//pleer.videoplayers.club/web/img/loader.gif');background-repeat: no-repeat;background-position: center;background-color: #ccc;
      `}></div>
    </div>
  );
}

export default Watch;
