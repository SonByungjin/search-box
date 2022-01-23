import { put } from "redux-saga/effects";
import { detailData, detailError } from "../actions";
import { DetailFetch } from "../actions";

export function* detailSaga(action: DetailFetch) {
  try {
    // 여기서 필터링
    yield put(detailData([]));
  } catch (error: any) {
    yield put(detailError(error));
  }
}
