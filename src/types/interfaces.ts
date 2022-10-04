import { User as PrismaUser } from '@prisma/client';

export interface MovieTMDB {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MoviesResponse {
  page: number
  results: MovieTMDB[]
  total_pages: number
  total_results: number
}

export interface MovieGenre {
  id: number
  name: string
}

export interface MovieGenreResponse {
  genres: MovieGenre[]
}

export interface User extends Omit<PrismaUser, 'password'> {}
