import { useRouter } from 'next/router';

function Watch () {
  const { query: { id } } = useRouter();
  if (!id) return null;

  return (
    <div>
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
    </div>
  );
}

export default Watch;
