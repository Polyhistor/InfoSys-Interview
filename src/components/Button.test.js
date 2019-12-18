import React from "react";
import { shallow, findByClass } from "../test/Utils";
import { Button } from "./Button";

describe("Fetch button", () => {
  const baseProps = {
    fetching: false,
    clickHandler: jest.fn()
  };

  //Arrange
  const wrapper = shallow(<Button {...baseProps}></Button>);
  const component = findByClass(wrapper, "container__button");

  it("renders without any error", () => {
    // Assert
    expect(component.length).toBe(1);
  });

  it("executes the click handler on button click", () => {
    // Act
    component.simulate("click", { preventDefault() {} });

    // Assert
    expect(baseProps.clickHandler).toHaveBeenCalled();
  });

  it("display text 'loading' while fetching is set to true", () => {
    const newProps = {
      ...baseProps,
      fetching: true
    };

    const wrapper = shallow(<Button {...newProps}></Button>);
    const component = findByClass(wrapper, "container__button");

    expect(component.text()).toEqual("loading");
  });

  it("display text 'Fetch Albums' while fetch is set to false", () => {
    expect(component.text()).toEqual("Fetch Albums");
  });
});
