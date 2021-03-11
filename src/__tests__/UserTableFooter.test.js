import React from "react";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";
import { UserTableFooter } from "../feat/users/components/UserTableFooter";

import { Provider } from "react-redux";
import store from "../lib/store";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("test button", () => {
  act(() => {
    render(
      <Provider store={store}>
        <UserTableFooter />
      </Provider>,
      container
    );
  });
  expect(container.querySelector("Button").disabled).toBeDefined();
  expect(container.textContent).toBe("Отправить");
});

describe("UserTableFooter Snapshot", () => {
  it("+++capturing UserTableFooter Snapshot", () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <UserTableFooter />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
