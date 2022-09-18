import { useRouter } from 'next/router';

function Watch () {
  const { query: { id } } = useRouter();
  if (!id) return null;

  return (
    <div>
      {/* <div */}
      {/*   css={css` */}
      {/*    display: block; */}
      {/*    width: 100% !important; */}
      {/*    height: 100% !important; */}

      {/*    iframe { */}
      {/*          height: 100% !important; */}
      {/*      } */}
      {/*    ` */}
      {/*   } */}
      {/*   id="kinobd" */}
      {/*   data-resize="1" */}
      {/*   data-bg="#000" */}
      {/*   data-kinopoisk={id} */}
      {/* ></div> */}
      <iframe title={'film'} src={`https://100.annacdn.cc/caxEtZ81jGMN?kp_id=${String(id)}`} width="640" height="480" frameBorder="0"
        allowFullScreen></iframe>
      {/* <iframe src="https://5165.svetacdn.in/T4uMkzS9mA3m?imdb_id=tt7631058" width="640" height="480" frameBorder="0" */}
      {/*   allowFullScreen></iframe> */}
      <div id="kinoplayertop" data-kinopoisk={id}></div>

    </div>
  );
}

export default Watch;
