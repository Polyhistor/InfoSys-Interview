import { Album, FetchAlbumsAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const albumsReducer = (
  state: Album[] = [],
  action: FetchAlbumsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchAlbums:
      return action.payload;
    default:
      return state;
  }
};
