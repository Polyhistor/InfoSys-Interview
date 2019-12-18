import React from "react";
import { shallow, findByClass } from "../test/Utils";
import { Albums } from "./Albums";

describe("Albums component", () => {
  const baseProps = {
    albumsData: [
      {
        uesrId: 1,
        id: 1,
        title: "test"
      }
    ],
    clickHandler: jest.fn(),
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

  //Arrange
  const wrapper = shallow(<Albums {...baseProps}></Albums>);
  const albums = findByClass(wrapper, "albums");
  const albumsTitles = findByClass(wrapper, "albums__title");

  it("renders withot any errors", () => {
    // Assert
    expect(albums.length).toBe(1);
  });

  it("display album titles", () => {
    expect(albumsTitles.length).toBe(1);
  });

  it("display correct titles for albums", () => {
    const newProps = {
      ...baseProps,
      albumsData: [
        {
          uesrId: 1,
          id: 1,
          title: "test"
        },
        {
          uesrId: 2,
          id: 2,
          title: "testSecond"
        }
      ]
    };

    const wrapper = shallow(<Albums {...newProps}></Albums>);
    const albumsTitles = findByClass(wrapper, "albums__title");

    expect(albumsTitles.length).toBe(2);
    expect(albumsTitles.at(0).text()).toEqual("test");
    expect(albumsTitles.at(1).text()).toEqual("testSecond");
  });

  it("click handler gets called once album titles are clicked", () => {
    albumsTitles.simulate("click", { preventDefault() {} });
    expect(baseProps.clickHandler).toHaveBeenCalled();
  });

  it("renders the corresponding thumbnails", () => {
    const albumThumbnails = findByClass(wrapper, "albums__thumbnails");
    expect(albumThumbnails.length).toBe(1);
  });
});
