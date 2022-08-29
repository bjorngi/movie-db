import React from "react";
import { SortKeys } from "./types";

const sortByKeys: Record<string, SortKeys> = {
  RATING: "imDbRating",
  YEAR: "year",
  NAME: "title",
};

interface ISortDropdownProps {
  setSort: (newSort: SortKeys) => void;
  sortDecending: boolean;
  currentSort: string;
  setSortDecending: (newSortDirection: boolean) => void;
}
const SortDropdown: React.FC<ISortDropdownProps> = ({
  setSort,
  sortDecending,
  currentSort,
  setSortDecending,
}) => {
  const onSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newValue = e.currentTarget.value as SortKeys;
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
