import { getGenres, getTrending } from '../clientAPI/axios';
import HeaderComponent from '../components/HeaderComponent';
import { getAuthorizedUser } from '../auth';
import { GridRow } from 'emotion-flex-grid';
import TrendingComponent from '../components/TrendingComponent';
import { css } from '@emotion/react';
import { wrapper } from '../store/store';
import { setGenres } from '../store/reducers/genresReducer';
import { HomeComponentProperties } from '../types';
import { FC } from 'react';

const Home: FC<HomeComponentProperties> = (props) => {
  const { trendingFilms, currentUser } = props;
  return (
    <GridRow
      direction={'column'}
      css={css`
        background-color: #161517;
        height: 100vh;
      `}
    >
      <HeaderComponent
        currentUser={currentUser}
      />
      <TrendingComponent
        trendingFilms={trendingFilms}
      />
    </GridRow>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => {
    return async ({ req }) => {
      const currentUser = await getAuthorizedUser(req);
      const { data: trendingFilms } = await getTrending('movie', 'week');
      const { data: { genres } } = await getGenres();
      await store.dispatch(setGenres(genres));

      return {
        props: {
          trendingFilms,
          currentUser: JSON.parse(JSON.stringify(currentUser))
        }
      };
    };
  });

export default Home;
