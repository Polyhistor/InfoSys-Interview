import { Photo, FetchPhotosAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const photosReducer = (
  state: Photo[] = [],
  action: FetchPhotosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchPhotos:
      return action.payload;
    default:
      return state;
  }
};
