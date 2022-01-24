import { RootState } from "modules";
import { ItemInterface } from ".";

export const selectItemList = (state: RootState): ItemInterface[] => state.itemList.result;
