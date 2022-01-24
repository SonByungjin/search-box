import { ITEMLIST_FETCH, ITEMLIST_COUNT } from "./constants";

export interface ItemListFetch {
  type: typeof ITEMLIST_FETCH;
}

export interface ItemListCount {
  type: typeof ITEMLIST_COUNT;
  payload: {
    id: string;
  };
}

export type ItemListAction = ItemListFetch | ItemListCount;

export const itemListFetch = (): ItemListFetch => ({
  type: ITEMLIST_FETCH,
});

export const itemListCount = (
  payload: ItemListCount["payload"]
): ItemListCount => ({
  type: ITEMLIST_COUNT,
  payload,
});
