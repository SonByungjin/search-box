import { ITEMLIST_FETCH, ITEMLIST_COUNT } from "./constants";
import mock from "mocks/mock.json";
import { ItemListAction } from "./actions";
import { createSearchable } from "utils";

export interface ItemInterface {
  id: string;
  name: string;
  category: string;
  count: number;
  searchable: string[];
}

export interface ItemListState {
  result: ItemInterface[];
}

export const mockInitialState: ItemListState = {
  result: [],
};

export const ItemListReducer = (
  state = mockInitialState,
  action: ItemListAction
): ItemListState => {
  switch (action.type) {
    case ITEMLIST_FETCH:
      if (state.result.length) {
        return state;
      }

      const stateModified = mock.map((el: any) => {
        return {
          id: String(el['id']),
          name: el['name'],
          category: el['category'],
          count: 0,
          searchable: createSearchable(el),
        };
      });

      return {
        result: stateModified,
      };
    case ITEMLIST_COUNT:
      const stateCountUp = state.result.map((item) => {
        if(item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1
          }
        } else {
          return item
        }
      })

      return {
        result: stateCountUp
      };
    default:
      return state;
  }
};
