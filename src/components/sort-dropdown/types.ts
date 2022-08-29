import { IMovie } from "../../types";

export type SortKeys = keyof Pick<IMovie, "imDbRating" | "title" | "year">;
