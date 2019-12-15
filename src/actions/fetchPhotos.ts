import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url2 = "http://jsonplaceholder.typicode.com/photos/?albumId=";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface FetchPhotosAction {
  type: ActionTypes.fetchPhotos;
  payload: Photo[];
}

// setting up our redux-thunk
export const fetchPhotos = (id: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Photo[]>(`${url2}${id}`);

    try {
      dispatch<FetchPhotosAction>({
        type: ActionTypes.fetchPhotos,
        payload: response.data
      });
    } catch (err) {
      throw new Error(err);
    }
  };
};
