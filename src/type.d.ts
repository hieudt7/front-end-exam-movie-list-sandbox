interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface IMovieObject {
  results: IMovie[]
  page: number;
  total_pages: number;
  total_results: number;
}

type MovieState = {
  movies: IMovie[];
  page: number,
  total_pages: number,
  total_results: number,
  loading: boolean;
  hasLoadMore: boolean;
  wish_list: IMovie[];
  error: string | null;
};
type MovieProps = {
  movie: IMovie;
};


