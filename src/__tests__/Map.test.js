import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import store from "../lib/store";
import { Map } from "../feat/users/components/Map";

describe("Map Snapshot", () => {
  it("+++capturing Map Snapshot", () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Map />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
