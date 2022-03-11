import React from "react";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import Countries from "../components/Countries";

describe("Testing countries", () => {
  it("Render countries, create a snapshot", () => {
    const list = renderer
      .create(
        <Provider store={store}>
          <Countries />
        </Provider>
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
