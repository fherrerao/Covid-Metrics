import React from "react";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import Continents from "../components/Continents";

describe("Testing Continents", () => {
  it("Render the continents, create a snapshot", () => {
    const list = renderer
      .create(
        <Provider store={store}>
          <Continents />
        </Provider>
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
