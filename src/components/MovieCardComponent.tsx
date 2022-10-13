import { TrendingMovie, p, H4, GenreCard, gridGap, Button, Label, mb } from '../styles';
import Image from 'next/image';
import { GridColumn, GridRow } from 'emotion-flex-grid';
import { useSelector } from '../store/store';
import { FC, useMemo } from 'react';
import { MdDateRange, MdStarPurple500 } from 'react-icons/md';
import dayjs from 'dayjs';
import { MovieCardComponentProperties } from '../types';

const MovieCardComponent: FC<MovieCardComponentProperties> = (props) => {
  const { movie } = props;

  const allGenres = useSelector(({ genres }) => genres);
  const movieGenre = useMemo(() => {
    const result = allGenres.filter(genre => movie.genre_ids.slice(0, 2).includes(genre.id));
    return result;
  }, [allGenres, movie.genre_ids]);

  return (
    <TrendingMovie
      bgcSrc={`https://image.tmdb.org/t/p/w500/${String(movie.poster_path)}`}
    >
      <GridRow
        className={'backdrop-filter'}
      >
        <GridColumn
          display={['none', 'block']}
          width={6}
        >
          <Image
            loader={({ src, width, quality }) => {
              return `https://image.tmdb.org/t/p/w500${String(movie.poster_path)}?w=${width}&q=${quality ?? 75}`;
            }}
            src={`https://image.tmdb.org/t/p/w500${String(movie.poster_path)}`}
            layout="responsive"
            width={'410px'}
            height={'606px'}
            quality={100}
          />
        </GridColumn>
        <GridColumn
          align={'end'}
          width={[12, 6]}
          css={[p(['14px', '45px 35px 15px'])]}
        >
          <H4>{movie.title}</H4>
          <GridRow
            css={[
              mb([8, 20]),
              gridGap(20)
            ]}
          >
            <time
              dateTime={movie.release_date}
            >
              <GridRow
                align={'center'}
                css={gridGap(5)}
              >
                <MdDateRange/>
                <Label>
                  {dayjs(movie.release_date).format('YYYY')}
                </Label>
              </GridRow>
            </time>
            <GridRow
              align={'center'}
              css={gridGap(3)}
            >
              <MdStarPurple500/>
              <Label>
                {Math.round(movie.vote_average * 10) / 10}
              </Label>
            </GridRow>
          </GridRow>
          <p>{movie.overview}</p>
          <GridRow
            justify={['start', 'end']}
            wrap={['nowrap', 'wrap']}
            css={[gridGap('15px 20px')]}
          >
            {movieGenre.map(genre => <GenreCard
              key={genre.id}
            >
              {genre.name}
            </GenreCard>)}
          </GridRow>
          <GridRow
            justify={['start', 'end']}
          >
            <Button
              watch
            >
              WATCH NOW
            </Button>
          </GridRow>
        </GridColumn>
      </GridRow>
    </TrendingMovie>
  );
};

export default MovieCardComponent;
