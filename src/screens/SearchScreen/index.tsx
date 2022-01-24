import { selectItemList } from "modules/itemList";
import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface AutoCompleteItem {
  id: string;
  name: string;
  category: string;
  word: string;
}

const SearchScreen: FC = () => {
  const navigate = useNavigate();
  const itemList = useSelector(selectItemList);
  const [ input, setInput ] = useState<string>('');
  const [ autoCompleteItem, setAutoCompleteItem ] = useState<AutoCompleteItem[]>([]);

  const createAutoCompleteItems = useCallback(() => {
    const autoCompleteItems: AutoCompleteItem[] = []
    itemList.forEach(({id, name, category, searchable, count})=>{
      searchable.forEach((word) => {
        if(word.includes(input)){
          autoCompleteItems.push({
            id,
            name,
            category,
            word,
          })
        }
      })
    })
    return autoCompleteItems;
  }, [input, itemList])

  const handleItemClick = (id: string, word: string) => {
    navigate(`/detail/id=${id}&word=${word}&input=${input}`);
  }

  useEffect(() => {
    if(input.length >= 2) {
      setAutoCompleteItem(createAutoCompleteItems());
    }
  }, [input, createAutoCompleteItems]);

  return <div className="pg_search__wrapper">
    <div className="pg_search__input">
      <input
        value={input}
        onChange={({target: { value }})=>{
          setInput(value || '');
        }}
      />
    </div>
    <div className="pg_search__auto">
      {autoCompleteItem.map(({id, name, category, word}, idx) => {
        return <div key={idx} className="pg_search__auto__container" onClick={()=>handleItemClick(id, word)}>
          <span>{word}</span>
          <span>{id}</span>
          <span>{name}</span>
          <span>{category}</span>
        </div>
      })}
    </div>
  </div>;
};

export { SearchScreen };
