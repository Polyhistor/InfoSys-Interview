import { albumsReducer } from "./albums";
import { ActionTypes } from "../actions";

describe("albums reducer", () => {
  it("should return the initial sate", () => {
    expect(albumsReducer(undefined, {})).toEqual([]);
  });

  it("should handle fetch albums", () => {
    expect(
      albumsReducer([], {
        type: ActionTypes.fetchAlbums,
        payload: {
          userId: 1,
          id: 1,
          title: "album"
        }
      })
    ).toEqual({
      userId: 1,
      id: 1,
      title: "album"
    });
  });
});
