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
    </div>
  );
}

export default Watch;
