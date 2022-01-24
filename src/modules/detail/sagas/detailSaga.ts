import { itemListCount } from "modules/itemList";
import { put } from "redux-saga/effects";
import { createUri } from "utils";
import { detailData, detailError } from "../actions";
import { DetailFetch } from "../actions";
import mock from 'mocks/mock.json';

export function* detailSaga(action: DetailFetch) {
  try {
    const { id, count, input } = action.payload;
    yield put(detailData({
      id,
      count: count + 1,
      uri: createUri(input, mock.filter(item => String(item.id) === id))
    }));
    yield put(itemListCount({ id }))
  } catch (error: any) {
    yield put(detailError(error));
  }
}
