import moxios from "moxios";
import { ActionTypes } from "../actions/types";
import { fetchAlbums } from "./fetchAlbums";
import { makeMockStore } from "../test/Utils";

describe("fetch albums action creator", () => {
  beforeEach(() => {
    //this makes moxios the dominant request handler
    moxios.install();
  });

  afterEach(() => {
    // returning axios to its default HTTP state
    moxios.uninstall();
  });

  it("registers correctly to the store", async () => {
    // Arrange

    // test data
    const Album = { userId: 1, id: 1, title: "album" };

    // creating a mock store
    const store = makeMockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        state: 200,
        response: Album
      });
    });

    // Act
    await store.dispatch(fetchAlbums());
    const actions = store.getActions();

    // Assert
    expect(actions[0]).toEqual({
      payload: Album,
      type: ActionTypes.fetchAlbums
    });
  });
});
