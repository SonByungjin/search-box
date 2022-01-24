import { selectItemList } from "modules/itemList";
import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./SearchScreen.scss";

interface AutoCompleteItem {
  id: string;
  name: string;
  category: string;
  word: string;
}

const SearchScreen: FC = () => {
  const navigate = useNavigate();
  const itemList = useSelector(selectItemList);
  const [input, setInput] = useState<string>("");
  const [autoCompleteItem, setAutoCompleteItem] = useState<AutoCompleteItem[]>(
    []
  );

  const createAutoCompleteItems = useCallback(() => {
    const autoCompleteItems: AutoCompleteItem[] = [];
    itemList.forEach(({ id, name, category, searchable, count }) => {
      searchable.forEach((word) => {
        if (word.includes(input)) {
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
  }, [input, itemList]);

  const handleItemClick = (id: string, word: string) => {
    navigate(`/detail/id=${id}&word=${word}&input=${input}`);
  };

  useEffect(() => {
    setAutoCompleteItem(input.length >= 2 ? createAutoCompleteItems() : []);
  }, [input, createAutoCompleteItems]);

  return (
    <div className="pg_search__wrapper">
      <div className="pg_search__input">
        <input
          placeholder="검색어 입력"
          value={input}
          onChange={({ target: { value } }) => {
            setInput(value || "");
          }}
        />
      </div>
      {autoCompleteItem.length ? (
        <div className="pg_search__auto">
          <div className="pg_search__auto__header">
            <span>검색어</span>
            <span>id</span>
            <span>name</span>
            <span>category</span>
          </div>
          {autoCompleteItem.map(({ id, name, category, word }, idx) => {
            return (
              <div
                key={idx}
                className="pg_search__auto__container"
                onClick={() => handleItemClick(id, word)}
              >
                <span>{word}</span>
                <span>{id}</span>
                <span>{name}</span>
                <span>{category}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export { SearchScreen };
