import React from "react";
import "./movie-list-view.css";
import { IMovie } from "../../types";

interface IScoreViewProps {
  imDbRating: number;
}
const ScoreView: React.FC<IScoreViewProps> = ({ imDbRating }) => {
  const MAX_RATING = 10;
  return (
    <div>
        {imDbRating}/{MAX_RATING}
    </div>
  );
};

interface IMovieImageProps {
  imageUrl: string;
  title: string;
}
const MovieImage: React.FC<IMovieImageProps> = ({ imageUrl, title }) => {
  return <img alt={`${title} movie poster`} src={imageUrl} />;
};

const MovieListView: React.FC<
  Pick<IMovie, "title" | "year" | "imDbRating" | "image">
> = ({ title, year, imDbRating, image }) => {
  return (
    <div className="movie-list-element">
      <h3>
        {title} ({year})
      </h3>
      <div>
        <ScoreView imDbRating={imDbRating} />
        <div className="movie-poster-image">
          <MovieImage imageUrl={image} title={title} />
        </div>
      </div>
    </div>
  );
};

export default MovieListView;
