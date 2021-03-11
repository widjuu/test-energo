import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import store from "../lib/store";
import { UserTable } from "../feat/users/components/UserTable";

describe("User Table Snapshot", () => {
  it("+++capturing User Table Snapshot", () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <UserTable />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
