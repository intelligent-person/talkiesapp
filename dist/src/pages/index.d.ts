/// <reference types="node" />
import { HomeComponentProperties } from '../types';
import { FC } from 'react';
declare const Home: FC<HomeComponentProperties>;
export declare const getServerSideProps: import("next").GetServerSideProps<{
    trendingFilms: import("../types").MoviesResponse;
    currentUser: any;
}, import("querystring").ParsedUrlQuery, import("next").PreviewData>;
export default Home;
