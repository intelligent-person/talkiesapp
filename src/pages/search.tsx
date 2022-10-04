import HeaderComponent from '../components/HeaderComponent';
import { getAuthorizedUser } from '../auth';
import { GridRow } from 'emotion-flex-grid';
import { wrapper } from '../store/store';
import { SearchComponentProperties } from '../types';
import { FC } from 'react';

const Search: FC<SearchComponentProperties> = ({ currentUser }) => {
  return (
    <GridRow
      direction={'column'}
    >
      <HeaderComponent
        currentUser={currentUser}
      />
    </GridRow>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  () => {
    return async ({ req }) => {
      const currentUser = await getAuthorizedUser(req);

      return {
        props: {
          currentUser: JSON.parse(JSON.stringify(currentUser))
        }
      };
    };
  });

export default Search;
