import React from "react";
import { getTop250Movies } from "../../api";
import LoadingWrapper from "../../components/loading-wrapper";
import MovieListView from "../../components/movie-list-view";
import Pagination from "../../components/pagination";
import RetryWrapper from "../../components/retry-wrapper";
import SortDropdown from "../../components/sort-dropdown";
import { SortKeys } from "../../components/sort-dropdown/types";
import { IMovie, IRequestState } from "../../types";
import "./movies.css";

const Movies: React.FC<{}> = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [sortBy, setSortBy] = React.useState<SortKeys>("imDbRating");
  const [sortDecending, setSortDecending] = React.useState(true);

  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [loadingState, setLoadingState] =
    React.useState<IRequestState>("SHOULD_UPDATE");

  React.useEffect(() => {
    if (loadingState === "SHOULD_UPDATE") {
      getTop250Movies(setLoadingState, setMovies);
    }
  }, [loadingState]);

  const resetRequest = () => setLoadingState("SHOULD_UPDATE");

  const sortedMovies = React.useMemo(
    () =>
      movies.sort(
        (a, b) =>
          b[sortBy].toString().localeCompare(a[sortBy].toString()) *
          (sortDecending ? 1 : -1)
      ),
    [sortBy, movies, sortDecending]
  );

  const paginatedMovies = React.useMemo(() => {
    const startIndex = currentPage * pageSize;
    const endIndex = currentPage * pageSize + pageSize;
    return sortedMovies.slice(startIndex, endIndex);
  }, [sortedMovies, currentPage, sortDecending, sortBy, movies, pageSize]);

  return (
    <>
      <h1>Movies</h1>
      <SortDropdown
        setSort={setSortBy}
        currentSort={sortBy}
        setSortDecending={setSortDecending}
        sortDecending={sortDecending}
      />
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        numberOfElements={sortedMovies.length}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
      />

      <LoadingWrapper isLoading={loadingState === "LOADING"}>
        <RetryWrapper
          isError={loadingState === "ERROR"}
          retryFunction={resetRequest}
        >
          {paginatedMovies.map((movie) => (
            <MovieListView
              key={movie.id}
              title={movie.title}
              imDbRating={movie.imDbRating}
              year={movie.year}
              image={movie.image}
            />
          ))}
        </RetryWrapper>
      </LoadingWrapper>
    </>
  );
};

export default Movies;
