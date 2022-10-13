import { Language, MovieGenreResponse, MoviesResponse, Trending, TrendingTime } from '../../types';
declare type TrendingType = keyof typeof Trending;
declare type TrendingTimeType = keyof typeof TrendingTime;
declare type LanguageType = keyof typeof Language;
export declare const getTrending: (type: TrendingType, time: TrendingTimeType, lang?: LanguageType) => Promise<import("axios").AxiosResponse<MoviesResponse, any>>;
export declare const getGenres: (lang?: LanguageType) => Promise<import("axios").AxiosResponse<MovieGenreResponse, any>>;
export {};
