import React from "react";
import { shallow, findByClass } from "../test/Utils";
import { App } from "./App";

describe("App component", () => {
  let wrapper = shallow(<App></App>);

  it("renders the main container", () => {
    // Arrange
    const component = findByClass(wrapper, "container");

    // Act & Assert
    expect(component.length).toBe(1);
  });
});
