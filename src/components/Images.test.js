import React from "react";
import { shallow, findByClass } from "../test/Utils";
import { Images } from "./Images";

describe("Image component", () => {
  const baseProps = {
    imagesData: [
      {
        albumId: 1,
        id: 1,
        title: "album",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }
    ]
  };

  let wrapper = shallow(<Images {...baseProps}></Images>);
  const thumbnails = findByClass(wrapper, "image");

  it("renders without any errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("display thumbnails received from the props", () => {
    expect(thumbnails.length).toBe(1);
  });

  it("thumbnail URLs are correctly set", () => {
    expect(thumbnails.prop("src")).toEqual(
      baseProps.imagesData[0].thumbnailUrl
    );
  });

  it("changes thumbnail URL to image URL on click", () => {
    thumbnails.simulate("click", { preventDefault() {} });
    expect(wrapper.find(".image").prop("src")).toEqual(
      baseProps.imagesData[0].url
    );
  });
});
