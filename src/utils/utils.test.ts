import { ItemInterface } from "modules/itemList";
import * as utils from "../utils";

describe("util 함수 테스트", () => {
  const mockItem: utils.MockItem = {
    id: 1,
    category: "category",
    name: "name",
    mail: {
      content: "content",
      tags: ["tag1", "tag2"],
    },
    location: {
      address: "address",
      owner: {
        score: "test",
      },
    },
    searchable: ["category", "name", "content", "tag1", "tag2"],
  };

  test("정해진 키값에 맞게 자동 완성 단어가 모이는가", () => {
    expect(utils.createSearchable(mockItem)).toEqual(mockItem["searchable"]);
  });

  test("uri 경로에 따라 해당 값이 실제로 존재 하는가", () => {
    const testStringUri = "address";
    const checkItemPath = (uri: string): string => {
      const keys = uri.split(".");
      if (keys.length < 2) {
        return testStringUri;
      }
      let valueByUri = mockItem[keys[1]];
      for (let idx = 2; idx < keys.length; idx++) {
        valueByUri = valueByUri[keys[idx]];
      }

      return valueByUri;
    };
    expect(checkItemPath(utils.createUri(testStringUri, mockItem))).toEqual(
      testStringUri
    );
  });

  test("자동 완성 배열의 요소 개수가 실제 데이터 매칭 개수와 일치하는가", () => {
    const testStringAuto = "tag";
    const { id, name, category, searchable } = mockItem;
    const mockItemFilterd: ItemInterface = {
      id,
      name,
      category,
      searchable,
      count: 0,
    };
    const testStringAutoCount = mockItemFilterd.searchable.filter((search) =>
      search.includes(testStringAuto)
    ).length;
    expect(
      utils.filterAutoCompleteItems([mockItemFilterd], testStringAuto).length
    ).toEqual(testStringAutoCount);
  });
});
