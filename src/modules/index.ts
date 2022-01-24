import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";

import { ItemListReducer, ItemListState } from "./itemList";

import { DetailReducer, DetailState } from "./detail/reducer";
import { rootDetailSaga } from "./detail/sagas";

export interface RootState {
  itemList: ItemListState;
  detail: DetailState;
}

export const rootReducer = combineReducers({
  itemList: ItemListReducer,
  detail: DetailReducer,
});

export function* rootSaga() {
  yield all([
    call(rootDetailSaga),
  ]);
}
