export const SEARCH_KEYS = ['category', 'name', 'content', 'tags'];

export const createSearchable = (item: any): string[] => {
  let searchable: string[] = [];
  const addSearchable = (value: any) => {
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

export const createUri = (searchInput: string, mockItem: any): string => {
  let searchUri: string[] = [];
  const addUri = (value: any) => {
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

  // addUri(mock.filter(item => item.id === id));
  mockItem && addUri(mockItem);
  return searchUri.reverse().join('.');
}