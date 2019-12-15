import { combineReducers } from "redux";
import { albumsReducer } from "./albums";
import { photosReducer } from "./photos";
import { Album, Photo } from "../actions";
import "../styles/main.scss";

export interface StoreState {
  albums: Album[];
  photos: Photo[];
}

export const reducers = combineReducers<StoreState>({
  albums: albumsReducer,
  photos: photosReducer
});
