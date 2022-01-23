import { SearchResultInterface } from ".";
import { RootState } from "..";

export const selectSearchData = (state: RootState): SearchResultInterface[] =>
  state.search.result;
