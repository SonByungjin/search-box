import { CommonError } from "../type";
import { DetailAction } from "./actions";
import { DETAIL_FETCH, DETAIL_DATA, DETAIL_ERROR } from "./constants";

export interface DetailItemInterface {
  id: string;
  count: number;
  uri: string;
}

export interface DetailState {
  result: DetailItemInterface;
  loading: boolean;
  error?: CommonError;
}

export const initialDetailState: DetailState = {
  result: {
    id: '',
    count: 0,
    uri: ''
  },
  loading: false,
};

export const DetailReducer = (
  state = initialDetailState,
  action: DetailAction
): DetailState => {
  switch (action.type) {
    case DETAIL_FETCH:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_DATA:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    case DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
