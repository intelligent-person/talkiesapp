import { MoviesResponse, MovieTMDB } from './interfaces';
import { FieldValues, UseFormSetError } from 'react-hook-form';

interface AuthMutation {
  email: string
  password: string
  setError: UseFormSetError<FieldValues>
}
export interface AuthComponentProperties {
  type: 'login' | 'signup'
  mutation: ({ email, password, setError }: AuthMutation) => Promise<void>
}

export interface TrendingComponentProperties {
  trendingFilms: MoviesResponse
}

export interface HomeComponentProperties {
  trendingFilms: MoviesResponse
}

export interface MovieCardComponentProperties {
  movie: MovieTMDB
}

export interface CarouselArrowComponentProperties {
  onClick?: () => void
  isLeft?: boolean
}
