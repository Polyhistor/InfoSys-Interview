import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "http://jsonplaceholder.typicode.com/albums";

export interface Album {
  uesrId: number;
  id: number;
  title: string;
}

export interface FetchAlbumsAction {
  type: ActionTypes.fetchAlbums;
  payload: Album[];
}

// setting up our redux-thunk
export const fetchAlbums = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Album[]>(url);
  try {
    dispatch<FetchAlbumsAction>({
      type: ActionTypes.fetchAlbums,
      payload: response.data
    });
  } catch (err) {
    throw new Error(err);
  }
};
