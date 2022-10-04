import axios from 'axios';
import { Language, MovieGenreResponse, MoviesResponse, Trending, TrendingTime } from '../../types';

const axiosDefault = axios.create({
  baseURL: 'https://api.themoviedb.org'
});

const API_KEY = process.env.TMDB_SECRET ?? '';

type TrendingType = keyof typeof Trending;
type TrendingTimeType = keyof typeof TrendingTime;
type LanguageType = keyof typeof Language;

export const getTrending = async (type: TrendingType, time: TrendingTimeType, lang: LanguageType = 'ua') => {
  return await axiosDefault.get<MoviesResponse>(`/3/trending/${type}/${time}?api_key=${API_KEY}&language=${lang}`);
};

export const getGenres = async (lang: LanguageType = 'ua') => {
  return await axiosDefault.get<MovieGenreResponse>(`/3/genre/movie/list?api_key=${API_KEY}&language=${lang}`);
};
