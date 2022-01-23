import { CommonError } from "../type";
import { SearchAction } from "./actions";
import { SEARCH_FETCH, SEARCH_DATA, SEARCH_ERROR } from "./constants";

export interface SearchResultInterface {
  id: string;
  name: string;
  category: string;
}

export interface SearchState {
  result: SearchResultInterface[];
  loading: boolean;
  error?: CommonError;
}

export const initialSearchState: SearchState = {
  result: [],
  loading: false,
};

export const SearchReducer = (
  state = initialSearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case SEARCH_FETCH:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_DATA:
      const { result } = action.payload;
      return {
        ...state,
        loading: false,
        result,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
