import { takeEvery } from "redux-saga/effects";
import { DETAIL_FETCH } from "../constants";
import { detailSaga } from "./detailSaga";

export function* rootDetailSaga() {
  yield takeEvery(DETAIL_FETCH, detailSaga);
}
