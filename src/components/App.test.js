import React from "react";
import { mount, findByClass } from "../test/Utils";
import { _Albums as Albums } from "./AlbumsContainer";

describe("App component", () => {
  const baseProps = {
    albums: [],
    photos: [],
    fetchAlbums: jest.fn(),
    fetchPhotos: jest.fn()
  };

  let wrapper = mount(<Albums {...baseProps}></Albums>);

  it.skip("renders the main container", () => {
    // Arrange
    const component = findByClass(wrapper, "container");

    // Act & Assert
    expect(component.length).toBe(1);
  });

  it("renders the fetch button", () => {
    const component = findByClass(wrapper, "container__button");

    expect(component.length).toBe(1);
  });

  it("albums entries container is empty on load", () => {
    const component = findByClass(wrapper, "albums");

    expect(component.length).toBe(0);
  });

  it("fetch album gets called on click", () => {
    // Arrange
    const button = findByClass(wrapper, "container__button");

    // Act
    button.simulate("click", { preventDefault() {} });

    // Assert
    expect(baseProps.fetchAlbums).toHaveBeenCalled();
  });

  it("loads albums once it's available from the provider as props", () => {
    const newProps = {
      ...baseProps,
      albums: [{ uesrId: 1, id: 1, title: "test" }]
    };

    let wrapper = mount(<Albums {...newProps}></Albums>);
    const component = findByClass(wrapper, "albums");

    expect(component.length).toBe(1);
  });

  it("fetch photos gets called once album titles are clicked", () => {
    const newProps = {
      ...baseProps,
      albums: [{ uesrId: 1, id: 1, title: "test" }]
    };

    let wrapper = mount(<Albums {...newProps}></Albums>);
    const albumTitle = findByClass(wrapper, "albums__title");

    albumTitle.simulate("click", { preventDefault() {} });
    expect(baseProps.fetchPhotos).toHaveBeenCalled();
  });

  it("displays thumbnails once they are available from the provider as props", () => {
    const newProps = {
      ...baseProps,
      albums: [{ uesrId: 1, id: 1, title: "test" }],
      photos: [
        {
          albumId: 1,
          id: 1,
          title: "test",
          url: "testUrl",
          thumbnailUrl: "testThumbUrl"
        }
      ]
    };

    let wrapper = mount(<Albums {...newProps}></Albums>);
    const albums = findByClass(wrapper, "albums");
    const photos = findByClass(wrapper, "albums__thumbnails");

    expect(albums.length).toBe(1);
    expect(photos.length).toBe(1);
  });

  it("changes thumbnail url to image url on click", () => {
    const newProps = {
      ...baseProps,
      albums: [{ uesrId: 1, id: 1, title: "test" }],
      photos: [
        {
          albumId: 1,
          id: 1,
          title: "test",
          url: "testUrl",
          thumbnailUrl: "testThumbUrl"
        }
      ]
    };

    let wrapper = mount(<Albums {...newProps}></Albums>);
    const image = findByClass(wrapper, "image");
    const albumTitle = findByClass(wrapper, "albums__title");

    albumTitle.simulate("click", { preventDefault() {} });
    image.simulate("click", { preventDefault() {} });

    expect(wrapper.find(".image").prop("src")).toEqual("testUrl");
  });
});
