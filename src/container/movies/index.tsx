import React from "react";
import { getTop250Movies } from "../../api";
import LoadingWrapper from "../../components/loading-wrapper";
import MovieListView from "../../components/movie-list-view";
import Pagination from "../../components/pagination";
import RetryWrapper from "../../components/retry-wrapper";
import SortDropdown from "../../components/sort-dropdown";
import "./movies.css";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [loadingState, setLoadingState] =
    React.useState("SHOULD_UPDATE");

  React.useEffect(() => {
    if (loadingState === "SHOULD_UPDATE") {
      getTop250Movies() // begyn med å fikse getTop250Movies()
    }
  }, [loadingState]);

  const resetRequest = () => setLoadingState("SHOULD_UPDATE");
  return (
    <>
      <h1>Movies</h1>
      <SortDropdown
        setSort={console.log}
        currentSort={'rating'}
        setSortDecending={console.log}
        sortDecending={console.log}
      />
      <Pagination
        pageSize={1}
        currentPage={0}
        numberOfElements={1}
        setCurrentPage={console.log}
        setPageSize={console.log}
      />

      <LoadingWrapper isLoading={loadingState === "LOADING"}>
        <RetryWrapper
          isError={loadingState === "ERROR"}
          retryFunction={resetRequest}
        >
          {movies.map((movie) => (
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
