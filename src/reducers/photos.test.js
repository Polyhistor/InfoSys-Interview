import { photosReducer } from "./photos";
import { ActionTypes } from "../actions";

describe("photos reducer", () => {
  it("should return the initial sate", () => {
    expect(photosReducer(undefined, {})).toEqual([]);
  });

  it("should handle fetch albums", () => {
    expect(
      photosReducer([], {
        type: ActionTypes.fetchPhotos,
        payload: {
          albumId: 1,
          id: 1,
          title: "photo",
          url: "https://via.placeholder.com/600/24f355",
          thumbnailUrl: "https://via.placeholder.com/150/24f355"
        }
      })
    ).toEqual({
      albumId: 1,
      id: 1,
      title: "photo",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    });
  });
});
