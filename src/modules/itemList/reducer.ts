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
      if (state.result && state.result.length) {
        const stateModified = state.result.map((el: any) => {
          if (!el.count) {
            el["count"] = 0;
          }
          return el;
        });
        return {
          result: stateModified,
        };
      }
      return state;
    case ITEMLIST_COUNT:
      // 여기서 조회수를 올려준다
      return state;
    default:
      return state;
  }
};
