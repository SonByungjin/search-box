import { CommonError } from "../type";
import { SearchResultInterface } from "./reducer";
import { SEARCH_FETCH, SEARCH_DATA, SEARCH_ERROR } from "./constants";

export interface SearchFetch {
  type: typeof SEARCH_FETCH;
  payload: {
    input: string;
  };
}

export interface SearchData {
  type: typeof SEARCH_DATA;
  payload: {
    result: SearchResultInterface[];
  };
}

export interface SearchError {
  type: typeof SEARCH_ERROR;
  payload: CommonError;
}

export type SearchAction = SearchFetch | SearchData | SearchError;

export const searchFetch = (payload: SearchFetch["payload"]): SearchFetch => ({
  type: SEARCH_FETCH,
  payload,
});

export const searchData = (payload: SearchData["payload"]): SearchData => ({
  type: SEARCH_DATA,
  payload,
});

export const serachError = (payload: SearchError["payload"]): SearchError => ({
  type: SEARCH_ERROR,
  payload,
});
