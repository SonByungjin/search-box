import { ItemInterface } from "modules/itemList";
import { AutoCompleteItem } from "screens";

export const SEARCH_KEYS = ['category', 'name', 'content', 'tags'];

export interface MockItem {
  [key: string]: any;
}

export const createSearchable = (item: MockItem): string[] => {
  let searchable: string[] = [];
  const addSearchable = (value: MockItem) => {
    if(typeof(value) !== 'object') {
      return
    }
    for(const key in value) {
      if(SEARCH_KEYS.includes(key)) {
        searchable = searchable.concat(value[key]);
      } else {
        addSearchable(value[key]);
      }
    }
  }
  addSearchable(item)
  return Array.from(new Set(searchable));
}

export const createUri = (searchInput: string, mockItem: MockItem): string => {
  let searchUri: string[] = [];
  const addUri = (value: MockItem) => {
    if(typeof(value) === 'object') {
      for(const key in value) {
        if(value[key] === searchInput) {
          searchUri = searchUri.concat(String(key));
          return String(key);
        } else if (addUri(value[key])) {
          searchUri = searchUri.concat(String(key));
          return String(key);
        } 
      }
    }
  }

  mockItem && addUri(mockItem);
  searchUri.push(mockItem['id'] || '');
  return searchUri.reverse().join('.');
}


export const filterAutoCompleteItems = (list: ItemInterface[], search: string): AutoCompleteItem[] => {
  const autoCompleteItems: AutoCompleteItem[] = [];
  list.forEach(({ id, name, category, searchable }) => {
    searchable.forEach((word) => {
      if (word.includes(search)) {
        autoCompleteItems.push({
          id,
          name,
          category,
          word,
        });
      }
    });
  });
  return autoCompleteItems;
}
