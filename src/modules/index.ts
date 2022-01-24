import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";

import { ItemListReducer, ItemListState } from "./itemList";

import { DetailReducer, DetailState } from "./detail/reducer";
import { rootDetailSaga } from "./detail/sagas";

import { SearchReducer, SearchState } from "./search";
import { rootSearchSaga } from "./search/sagas";

export interface RootState {
  itemList: ItemListState;
  search: SearchState;
  detail: DetailState;
}

export const rootReducer = combineReducers({
  itemList: ItemListReducer,
  search: SearchReducer,
  detail: DetailReducer,
});

export function* rootSaga() {
  yield all([
    call(rootSearchSaga),
    call(rootDetailSaga),
  ]);
}
