import { IMovie, IRequestState } from "./types";

interface IMovieResponse {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: number;
  imDbRatingCount: number;
}

const convertMovieFromResponse = (responseMovie: IMovieResponse[]): IMovie[] =>
  responseMovie.map((movie) => ({
    ...movie,
    imDbRating: Number(movie.imDbRating),
    imDbRatingCount: Number(movie.imDbRatingCount),
  }));

export const getTop250Movies = (
  setLoadingState: (newState: IRequestState) => void,
  setMovieState: (movies: IMovie[]) => void
) => {
  setLoadingState("LOADING");
  fetch("http://localhost:8080/items")
    .then((resp) => resp.json())
    .then((data) => {
      const cleanImdbRequest = convertMovieFromResponse(data);
      setLoadingState("SUCCESS");
      setMovieState(cleanImdbRequest);
    })
    .catch((err) => {
      setMovieState([]);
      setLoadingState("ERROR");
    });
};
