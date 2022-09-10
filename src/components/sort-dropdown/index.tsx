import React from "react";

const sortByKeys = {
  RATING: "imDbRating",
  YEAR: "year",
  NAME: "title",
};

const SortDropdown = ({
  setSort,
  sortDecending,
  currentSort,
  setSortDecending,
}) => {
  const onSelect = (e) => {
    const newValue = e.currentTarget.value;
    setSort(newValue);
  };

  const changeSortDirection = () => setSortDecending(!sortDecending);

  return (
    <div>
      <label htmlFor="sort">Sort on: </label>
      <select name="sort" id="sort" value={currentSort} onChange={onSelect}>
        <option value={sortByKeys.YEAR}>Year</option>

        <option value={sortByKeys.RATING}>Rating</option>

        <option value={sortByKeys.NAME}>Name</option>
      </select>
      <button onClick={changeSortDirection}>
        {sortDecending ? "Decending" : "Acending"}
      </button>
    </div>
  );
};

export default SortDropdown;
