import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import renderer from "react-test-renderer";

import { rootReducer } from "../../modules";
import { SearchScreen } from "../SearchScreen";

const store = createStore(rootReducer);

describe("SearchScreen", () => {
  test("show render", () => {
    const view = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <SearchScreen />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });
});
