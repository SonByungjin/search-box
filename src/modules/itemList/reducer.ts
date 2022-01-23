import { ITEMLIST_FETCH, ITEMLIST_COUNT } from "./constants";
import mock from "mocks/mock.json";
import { ItemListAction } from "./actions";

export interface ItemListState {
  result: any;
}

export const mockInitialState: ItemListState = {
  result: mock,
};

export const ItemListReducer = (
  state = mockInitialState,
  action: ItemListAction
): ItemListState => {
  switch (action.type) {
    case ITEMLIST_FETCH:
      // 여기서 count 프로퍼티를 넣고
      return state;
    case ITEMLIST_COUNT:
      // 여기서 조회수를 올려준다
      return state;
    default:
      return state;
  }
};
