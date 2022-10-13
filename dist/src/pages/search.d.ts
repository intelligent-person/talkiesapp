/// <reference types="node" />
import { SearchComponentProperties } from '../types';
import { FC } from 'react';
declare const Search: FC<SearchComponentProperties>;
export declare const getServerSideProps: import("next").GetServerSideProps<{
    currentUser: any;
}, import("querystring").ParsedUrlQuery, import("next").PreviewData>;
export default Search;
