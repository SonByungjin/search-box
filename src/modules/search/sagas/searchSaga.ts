import { put } from "redux-saga/effects";
import { searchData, serachError } from "..";
import { SearchFetch } from "../actions";

export function* searchSaga(action: SearchFetch) {
  try {
    // 여기서 필터링
    yield put(
      searchData({
        result: [],
      })
    );
  } catch (error: any) {
    yield put(serachError(error));
  }
}
