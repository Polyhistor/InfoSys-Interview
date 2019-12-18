import React from "react";
import { shallow } from "../test/Utils";
import { _AlbumsContainer as AlbumsContainer } from "./AlbumsContainer";

describe("Albums Container component", () => {
  const baseProps = {
    albums: [],
    photos: [],
    fetchAlbums: jest.fn(),
    fetchPhotos: jest.fn()
  };

  let wrapper = shallow(<AlbumsContainer {...baseProps}></AlbumsContainer>);

  it("renders without any error", () => {
    expect(wrapper.length).toBe(1);
  });

  it("correct props are being passed down the album child component", () => {
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

    let wrapper = shallow(<AlbumsContainer {...newProps}></AlbumsContainer>);

    expect(
      wrapper
        .children()
        .at(1)
        .props().albumsData
    ).toEqual(newProps.albums);

    expect(
      wrapper
        .children()
        .at(1)
        .props().photos
    ).toEqual(newProps.photos);

    expect(
      wrapper
        .children()
        .at(1)
        .props().clickHandler
    ).toBeTruthy();
  });

  it("correct props are being passed down the button child component", () => {
    const newProps = {
      ...baseProps
    };

    let wrapper = shallow(<AlbumsContainer {...newProps}></AlbumsContainer>);

    expect(
      wrapper
        .children()
        .at(0)
        .props().fetching
    ).toEqual(false);

    expect(
      wrapper
        .children()
        .at(1)
        .props().clickHandler
    ).toBeTruthy();
  });
});
