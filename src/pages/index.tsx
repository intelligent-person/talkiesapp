import { getGenres, getTrending } from '../clientAPI/axios';
import HeaderComponent from '../components/HeaderComponent';
import { GridRow } from 'emotion-flex-grid';
import TrendingComponent from '../components/TrendingComponent';
import { css } from '@emotion/react';
import { wrapper } from '../store/store';
import { setGenres } from '../store/reducers/genresReducer';
import { HomeComponentProperties } from '../types';
import { FC } from 'react';

const Home: FC<HomeComponentProperties> = (props) => {
  const { trendingFilms } = props;
  return (
    <GridRow
      direction={'column'}
      css={css`
        background-color: #161517;
        height: 100vh;
      `}
    >
      <HeaderComponent/>
      <TrendingComponent
        trendingFilms={trendingFilms}
      />
    </GridRow>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => {
    return async () => {
      const { data: trendingFilms } = await getTrending('movie', 'week');
      const { data: { genres } } = await getGenres();

      await store.dispatch(setGenres(genres));

      return {
        props: {
          trendingFilms
        }
      };
    };
  });

export default Home;
