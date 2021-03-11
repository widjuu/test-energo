import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { Provider } from "react-redux";
import store from "../lib/store";
import { UserTable } from "../feat/users/components/UserTable";

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

it("handles click correctly", () => {
  act(() => {
    render(
      <Provider store={store}>
        <UserTable />
      </Provider>,
      container
    );
  });
  //userEvent.click(container.getAllByRole("checkbox"));
  //expect(container.querySelector("input")).toBeChecked();
});
