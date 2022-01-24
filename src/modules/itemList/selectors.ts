import { RootState } from "modules";
import { ItemInterface } from ".";

export const selectItemList = (state: RootState): ItemInterface[] => state.itemList.result;

export const selectItemCountById = (selectId: string) => (state: RootState) => {
    if(selectId) {
        const itemSelected = state.itemList.result.filter(({id}) => id === selectId)[0];
        if(itemSelected) {
            return itemSelected.count;
        }
    }
    return undefined;
}
