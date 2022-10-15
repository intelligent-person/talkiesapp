import HeaderComponent from '../components/HeaderComponent';
import { GridRow } from 'emotion-flex-grid';
import { SearchComponentProperties } from '../types';
import { FC } from 'react';

const Search: FC<SearchComponentProperties> = () => {
  return (
    <GridRow
      direction={'column'}
    >
      <HeaderComponent/>
    </GridRow>
  );
};

export default Search;
