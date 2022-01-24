import { CommonError } from "../type";
import { DETAIL_FETCH, DETAIL_DATA, DETAIL_ERROR } from "./constants";
import { DetailItemInterface } from "./reducer";

export interface DetailFetch {
  type: typeof DETAIL_FETCH;
  payload: {
    id: string;
    word: string;
  };
}

export interface DetailData {
  type: typeof DETAIL_DATA;
  payload: DetailItemInterface;
}

export interface DetailError {
  type: typeof DETAIL_ERROR;
  payload: CommonError;
}

export type DetailAction = DetailFetch | DetailData | DetailError;

export const detailFetch = (payload: DetailFetch["payload"]): DetailFetch => ({
  type: DETAIL_FETCH,
  payload,
});

export const detailData = (payload: DetailData["payload"]): DetailData => ({
  type: DETAIL_DATA,
  payload,
});

export const detailError = (payload: DetailError["payload"]): DetailError => ({
  type: DETAIL_ERROR,
  payload,
});
