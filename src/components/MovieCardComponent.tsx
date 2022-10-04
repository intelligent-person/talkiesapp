import { TrendingMovie, p, H4, GenreCard, gridGap, Button, Label } from '../styles';
import Image from 'next/image';
import { GridColumn, GridRow } from 'emotion-flex-grid';
import { css } from '@emotion/react';
import { useSelector } from '../store/store';
import { FC, useMemo } from 'react';
import { MdDateRange, MdStarPurple500 } from 'react-icons/md';
import dayjs from 'dayjs';
import { MovieCardComponentProperties } from '../types';

const MovieCardComponent: FC<MovieCardComponentProperties> = (props) => {
  const { movie } = props;

  const allGenres = useSelector(({ genres }) => genres);
  const movieGenre = useMemo(() => {
    const result = allGenres.filter(genre => movie.genre_ids.includes(genre.id));
    return result;
  }, [allGenres, movie.genre_ids]);

  return (
    <TrendingMovie
      bgcSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    >
      <GridRow
        css={css`
          -webkit-backdrop-filter: blur(100px);
          backdrop-filter: blur(100px);
          border-radius: 20px;
        `}
      >
        <GridColumn
          width={6}
        >
          <Image
            loader={({ src, width, quality }) => {
              return `https://image.tmdb.org/t/p/w500${movie.poster_path}?w=${width}&q=${quality ?? 75}`;
            }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            layout="responsive"
            width={'410px'}
            height={'606px'}
            quality={100}
          />
        </GridColumn>
        <GridColumn
          width={6}
          css={[p('45px 35px 15px')]}
        >
          <H4>{movie.title}</H4>
          <GridRow
            css={gridGap(20)}
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
            justify={'end'}
            wrap={'wrap'}
            css={gridGap('15px 20px')}
          >
            {movieGenre.map(genre => <GenreCard
              key={genre.id}
            >
              {genre.name}
            </GenreCard>)}
          </GridRow>
          <GridRow
            justify={'end'}
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
