import { takeEvery } from "redux-saga/effects";
import { SEARCH_FETCH } from "../constants";
import { searchSaga } from "./searchSaga";

export function* rootSearchSaga() {
  yield takeEvery(SEARCH_FETCH, searchSaga);
}
