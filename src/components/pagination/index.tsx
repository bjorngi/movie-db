import React from "react";
import { onEnterKey } from "../../utils";

const Pagination = ({
  pageSize,
  currentPage,
  numberOfElements,
  setCurrentPage,
  setPageSize,
}) => {
  const numberOfPages = Math.ceil(numberOfElements / pageSize);
  const pages = [...Array(numberOfPages).keys()];

  const setPage = (newPage: number) => () => setCurrentPage(newPage);
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSelectPageSize = (e) => {
    const newValue = e.currentTarget.value as unknown as number;
    setPageSize(newValue);
  };

  // Change to last page if current page is over number of pages.
  // In the case that page size is changed.
  React.useEffect(() => {
    if (currentPage > numberOfPages) {
      setCurrentPage(numberOfPages - 1);
    }
  }, [currentPage, numberOfPages, setCurrentPage]);

  return (
    <div className="pagination">
      <div
        className="pagination--page"
        tabIndex={0}
        onKeyUp={onEnterKey(prevPage)}
        onClick={prevPage}
      >
        {"<<"}
      </div>
      {pages.map((page) => (
        <div
          tabIndex={0}
          key={page}
          className={`pagination--page ${
            currentPage === page ? " pagination--page-selected" : ""
          }`}
          onKeyUp={onEnterKey(setPage(page))}
          onClick={setPage(page)}
          role="button"
        >
          {page + 1}
        </div>
      ))}
      <div
        tabIndex={0}
        className="pagination--page"
        onKeyUp={onEnterKey(nextPage)}
        onClick={nextPage}
      >
        {">>"}
      </div>
      <div>
        <label htmlFor="pagesize">Page size: </label>
        <select
          name="sort"
          id="sort"
          value={pageSize}
          onChange={onSelectPageSize}
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={150}>200</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
