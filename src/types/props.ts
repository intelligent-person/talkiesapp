import { MoviesResponse, MovieTMDB, User } from './interfaces';

export interface AuthComponentProperties {
  type: 'login' | 'signup'
  mutationError: any
  mutation: any
}

export interface HeaderComponentProperties {
  currentUser: User | null
}

export interface SearchComponentProperties {
  currentUser: User | null
}

export interface TrendingComponentProperties {
  trendingFilms: MoviesResponse
}

export interface HomeComponentProperties {
  trendingFilms: MoviesResponse
  currentUser: User | null
}

export interface MovieCardComponentProperties {
  movie: MovieTMDB
}

export interface CarouselArrowComponentProperties {
  onClick?: () => void
  isLeft?: boolean
}
